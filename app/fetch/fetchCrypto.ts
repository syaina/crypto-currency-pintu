import { CurrenciesAndPrice } from "@/interfaces/SupportedCurrencies";

const fetchCrypto = async (): Promise<CurrenciesAndPrice[] | []> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/supported-currencies`;

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
