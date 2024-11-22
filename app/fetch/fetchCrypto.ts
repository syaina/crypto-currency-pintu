import { CryptoCurrenciesType } from "@/interfaces/CryptoCurrencies";

const fetchCrypto = async (): Promise<CryptoCurrenciesType[] | []> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/crypto-currencies`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Response is not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchCrypto;
