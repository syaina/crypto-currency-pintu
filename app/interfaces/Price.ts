export interface Price {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

export interface ResponsePrice {
  code: string;
  message: string;
  payload: Price[];
}
