"use client";
import Reveal from "@/Animations/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  slug: string;
  title?: string;
};

const Readmore = (props: Props) => {
  const { slug, title } = props;
  const router = useRouter();
  return (
    <Reveal delay={0.3}>
      <Link href={`/Blog/${slug}`}>
        <div className="flex mt-10 gap-x-2 items-center uppercase mb-10 bottom-4 font-semibold text-[14px] cursor-pointer hover:underline hover:underline-offset-1">
          <ArrowRight size={20} />
          <h2 className="">{`${title ? title : "readmore"}`}</h2>
        </div>
      </Link>
    </Reveal>
  );
};

export default Readmore;
