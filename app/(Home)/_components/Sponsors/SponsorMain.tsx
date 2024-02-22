import SponsorDark from "./SponsorDark";
import SponsosGrid from "./SponsosGrid";

type Props = {};

const SponsorMain = (props: Props) => {
  return (
    <div className="flex flex-col">
      {/* <SponsosGrid /> */}
      <SponsorDark />
    </div>
  );
};

export default SponsorMain;
