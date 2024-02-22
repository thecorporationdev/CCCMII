import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const ExploreMore = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex mt-8 gap-x-2 items-center uppercase font-semibold text-base " onClick={() => router.push("/explore")}>
      <ArrowRight size={20} />
      <h2 className="">explore sessions</h2>
    </div>
  );
};

export default ExploreMore;
