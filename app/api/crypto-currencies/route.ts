import { CryptoCurrenciesType } from "@/interfaces/CryptoCurrencies";
import { ResponsePrice } from "@/interfaces/Price";
import { ResponseSupportedCurrencies } from "@/interfaces/SupportedCurrencies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [resCurrency, resPrice] = await Promise.all([
      fetch("https://api.pintu.co.id/v2/wallet/supportedCurrencies"),
      fetch("https://api.pintu.co.id/v2/trade/price-changes"),
    ]);

    if (!resCurrency.ok || !resPrice.ok) {
      throw new Error("Failed fetch currency or price API");
    }

    const currencyData: ResponseSupportedCurrencies = await resCurrency.json();
    const priceData: ResponsePrice = await resPrice.json();

    const currencyAndPriceData: CryptoCurrenciesType[] = currencyData.payload
      .map((currency) => {
        const price = priceData.payload.find(
          (price) =>
            price.pair.split("/")[0] === currency.currencySymbol.toLowerCase()
        );

        if (!price) return null;

        return {
          id: currency.currency_id,
          currencySymbol: currency.currencySymbol,
          name: currency.name,
          logo: currency.logo,
          color: currency.color,
          pair: price.pair,
          latestPrice: price.latestPrice,
          day: price.day,
          week: price.week,
          month: price.month,
          year: price.year,
        };
      })
      .filter((item) => item !== null);

    return NextResponse.json(currencyAndPriceData);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
