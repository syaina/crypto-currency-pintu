import CryptoListHeader from '@/components/CryptoListHeader';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import CryptoListWrapper from '@/components/CryptoListWrapper';
import { getQueryClient } from '@/hooks/getQueryClient';
import { getQueryOptionCrypto } from '@/hooks/getQueryOptionCrypto';

const CryptoCurrency: React.FC  = async () => {
  // fetch on server side
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getQueryOptionCrypto);

  return (
    <div className="crypto-currency-container">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CryptoListHeader />
        <CryptoListWrapper />
      </HydrationBoundary>
    </div>
  );
};

export default CryptoCurrency;
