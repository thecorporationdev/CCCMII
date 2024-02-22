import { CoursesData } from "@/Data/Courses";
import { CourseItem } from "./CourseItem";

type Props = {};

const HeroGrid = (props: Props) => {
  return (
    <div className="border-b-[1px] border-black pb-10 ContainerPadding">
      <div className="flex gap-x-6 lg:px-6 flex-col gap-y-6  ">
        {CoursesData.map((courses) => (
          <CourseItem
            key={courses.slug}
            color={courses.color}
            image={courses.image}
            slug={courses.slug}
            courseblurb={courses.CourseBlurb}
            coursetitle={courses.CourseTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroGrid;
