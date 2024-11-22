import { fetchCrypto } from '@/fetch/fetchCrypto';
import { queryOptions } from '@tanstack/react-query';

export const getQueryOptionCrypto = queryOptions({
  queryKey: ['crypto'],
  queryFn: fetchCrypto,
});
