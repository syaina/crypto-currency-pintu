import ChevronUp from "@/icons/ChevronUp.svg";
import ChevronDown from "@/icons/ChevronDown.svg";

const HeaderList = [
  {
    ID: "CRYPTO",
    EN: "CRYPTO",
  },
  {
    ID: "HARGA",
    EN: "PRICE",
  },
  {
    ID: "24JAM",
    EN: "24H",
  },
  {
    ID: "1MGG",
    EN: "1W",
  },
  {
    ID: "1BLN",
    EN: "1M",
  },
  {
    ID: "1THN",
    EN: "1Y",
  },
];

const CryptoListHeader: React.FC = () => {
  // TODO: language switcher
  const language = "ID";

  // TODO: Filtering crypto currency
  // const { cryptoList, setCryptoList } = useCryptoListContext();
  // const { filter, setFilter } = useCryptoFilterContext();
  // const handleFilter = (sortBy: string) => {
  //   switch (sortBy) {
  //     case HeaderList[1]["EN"]:
  //       if (filter === "PRICE.ASC") {
  //         setFilter(null);
  //         setCryptoList(cryptoList.toSorted((a, b) => a.id - b.id));
  //       } else if (filter === "PRICE.DESC") {
  //         setFilter("PRICE.ASC");
  //         setCryptoList(
  //           cryptoList.toSorted(
  //             (a, b) => Number(b.latestPrice) - Number(a.latestPrice)
  //           )
  //         );
  //       } else {
  //         setFilter("PRICE.DESC");
  //         setCryptoList(
  //           cryptoList.toSorted(
  //             (a, b) => Number(a.latestPrice) - Number(b.latestPrice)
  //           )
  //         );
  //       }

  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="crypto-list-header grid grid-cols-[26%_14%_1fr_1fr_1fr_1fr_9%] border border-[rgb(229,231,235)] rounded-tl-lg rounded-tr-lg">
      <div className="p-5 pl-[75px]">
        <p className="font-semibold text-sm text-[rgba(146,147,150,1)]">
          {HeaderList[0][language]}
        </p>
      </div>

      {HeaderList.slice(1, HeaderList.length).map((list, index) => (
        <div
          key={list[language]}
          className={`p-5 flex gap-2 items-center cursor-pointer ${
            index > 0 ? "mx-auto" : ""
          }`}
        >
          <p className="font-semibold text-sm text-[rgba(146,147,150,1)]">
            {list[language]}
          </p>
          <div className="flex flex-col gap-1">
            <ChevronUp
              className="text-[#929396]"
              // TODO: needs to improve to implement filter UI
              // className={
              //   filter &&
              //   list.EN.includes(filter) &&
              //   filter.split(".")[1] === "ASC"
              //     ? "text-black"
              //     : "text-[#929396]"
              // }
            />
            <ChevronDown
              // TODO: needs to improve to implement filter UI
              className="text-[#929396]"

              // className={
              //   filter &&
              //   list.EN.includes(filter) &&
              //   filter.split(".")[1] === "DESC"
              //     ? "text-black"
              //     : "text-[#929396]"
              // }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoListHeader;
