import { CurrenciesAndPrice } from '@/interfaces/SupportedCurrencies';

export const fetchCrypto = async (): Promise<CurrenciesAndPrice[]> => {
  const response = await fetch('/api/supported-currencies');

  if (!response.ok) {
    throw new Error('Response is not ok');
  }

  const data = await response.json();

  return data;
};
