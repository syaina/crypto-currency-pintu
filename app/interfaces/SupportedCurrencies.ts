export interface SupportedCurrencies {
  currency_id: number;
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallets: Wallet[];
  is_limit_order_enabled: boolean;
  is_upcoming: boolean;
}

export interface CurrenciesAndPrice extends SupportedCurrencies {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

export interface Wallet {
  currency_id: number;
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
}

export interface ResponseSupportedCurrencies {
  code: string;
  message: string;
  payload: SupportedCurrencies[];
}
