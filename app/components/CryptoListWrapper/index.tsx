'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import CryptoList from '../CryptoList';
import { getQueryOptionCrypto } from '@/hooks/getQueryOptionCrypto';

const CryptoListWrapper: React.FC = () => {
  const { data, error, isLoading } = useSuspenseQuery(getQueryOptionCrypto);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map((crypto) => (
        <CryptoList
          key={crypto.currency_id}
          logo={crypto.logo}
          name={crypto.name}
          currencySymbol={crypto.currencySymbol}
          color={crypto.color}
          latestPrice={crypto.latestPrice.toString()}
          day={Number(crypto.day)}
          week={Number(crypto.week)}
          month={Number(crypto.month)}
          year={Number(crypto.year)}
        />
      ))}
    </div>
  );
};

export default CryptoListWrapper;
