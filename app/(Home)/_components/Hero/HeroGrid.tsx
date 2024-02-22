import { CoursesData } from "@/Data/Courses";
import { BlogItem } from "./BlogItem";
import { ArrowRight } from "lucide-react";
import ViewAll from "./ViewAll";

type Props = {};

const HeroGrid = (props: Props) => {
  return (
    <div className="border-b-[1px] border-black pb-10 ContainerPadding">
      <div className="flex gap-x-6 lg:px-6 flex-col gap-y-6  ">
        {CoursesData.map((courses) => (
          <BlogItem
            key={courses.slug}
            color={courses.color}
            image={courses.image}
            slug={courses.slug}
            courseblurb={courses.CourseBlurb}
            coursetitle={courses.CourseTitle}
          />
        ))}
      </div>

      <ViewAll />
    </div>
  );
};

export default HeroGrid;
