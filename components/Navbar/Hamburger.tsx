"use client";
type Props = {
  barstate?: boolean;
  //   barfunction?: (barstate: boolean) => void;
  className?: string;
  bgclass?: string;
};

const Hamburger = (props: Props) => {
  const { barstate, className } = props;
  return (
    <div
      className="flex flex-col items-end justify-center space-y-1 cursor-pointer gap-y-1 "
      //   onClick={() => {
      //     barfunction(!barstate);
      //   }}
    >
      <span className="w-[34px] h-[1px] bg-black "></span>
      <span className="w-[34px] h-[1px] bg-black"></span>
      <span className="w-[34px] h-[1px] bg-black"></span>
    </div>
    // <div
    //   className={cn(
    //     `${
    //       barstate ? "bar active sticky z-40 overflow-y-none" : "bar"
    //     } flex flex-col items-center justify-center gap-y-2 ${className}`
    //   )}
    //   onClick={() => {
    //     barfunction(!barstate);
    //   }}
    // >
    //   <div className={cn(`line`)}></div>
    // </div>
  );
};

export default Hamburger;
