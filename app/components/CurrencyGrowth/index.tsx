import "@/components/CurrencyGrowth/CurrencyGrowth.css";

interface CurrencyGrowthProps {
  amount: number;
  className?: string;
}

const CurrencyGrowth = (props: CurrencyGrowthProps) => {
  return (
    <div
      className={`currency-growth text-center flex items-center mx-auto ${
        props.className ?? ""
      }`}
    >
      {props.amount === 0 ? (
        <div className="">
          <p>{props.amount}.00%</p>
        </div>
      ) : (
        <>
          <div className={props.amount > 0 ? "up" : "down"}></div>
          <p>{props.amount}%</p>
        </>
      )}
    </div>
  );
};

export default CurrencyGrowth;
