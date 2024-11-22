import { CurrenciesAndPrice } from '@/interfaces/SupportedCurrencies';

export const fetchCrypto = async (): Promise<CurrenciesAndPrice[]> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/supported-currencies`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Response is not ok');
  }

  const data = await response.json();

  return data;
};
