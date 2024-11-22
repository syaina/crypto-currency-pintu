import CryptoListHeader from "@/components/CryptoList/CryptoList.Header";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CryptoListWrapper from "@/components/CryptoList/CryptoList.Wrapper";
import { getQueryClient } from "@/hooks/getQueryClient";
import { getQueryOptionCrypto } from "@/hooks/getQueryOptionCrypto";
import { CryptoListProvider } from "@/context/CryptoListProvider";
import { CryptoFilterProvider } from "@/context/CryptoFilterProvider";

const CryptoCurrency: React.FC = async () => {
  // fetch on server side
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(getQueryOptionCrypto);

  return (
    <div className="crypto-currency-container">
      {/* Hydrate React Query state */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CryptoListProvider>
          <CryptoFilterProvider>
            <CryptoListHeader />
            <CryptoListWrapper />
          </CryptoFilterProvider>
        </CryptoListProvider>
      </HydrationBoundary>
    </div>
  );
};

export default CryptoCurrency;
