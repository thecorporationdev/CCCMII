import TeamDetails from "@/app/(Home)/_components/Team/TeamDetails";
import image from "@/public/CCCMIIIMAGES/dl.beatsnoop.com-3000-8auWx6lwOXcopy.jpg";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="">
        <div className="relative w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8">
          <Image
            alt="CCCMII IMAGE"
            src={image}
            fill
            className="h-full w-full object-cover object-top transition-all ease-in-out duration-300"
            loading="eager"
          />
        </div>

        <div className="px-4 lg:px-8">
          <div className="">
            <div className="w-full">
              <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
                Our profile
              </div>
            </div>

            <div className="h-[1px] bg-black w-full my-10"></div>

            <div className="w-full flex justify-end my-10">
              <div className="w-full lg:w-1/2 text-xl">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 uppercase">
                  purpose
                </h3>
                <p>
                  To empower individuals and organizations with the essential
                  skills and knowledge to effectively resolve conflicts, engage
                  in meaningful negotiations, provide insightful counselling,
                  and achieve harmonious conciliation.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end my-10">
              <div className="w-full lg:w-1/2 text-xl">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 uppercase">
                  vision
                </h3>
                <p>
                  To become the foremost global institution in fostering peace
                  and mutual understanding through professional training in
                  mediation, negotiation, counselling, and conciliation
                  techniques.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end my-10">
              <div className="w-full lg:w-1/2 text-xl ">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 uppercase">
                  mission
                </h3>
                <p>
                  Our mission at CCCMII is to offer comprehensive, high-calibre
                  educational programs that equip participants with cutting-edge
                  strategies in conflict resolution and collaborative
                  negotiation. We strive to create a cadre of skilled
                  professionals who facilitate dialogue, mend relationships, and
                  promote a more harmonious society.
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-black w-full mb-10"></div>
          </div>

          <div className="">
            <div className="w-full flex my-10 justify-end">
              <div className="w-full lg:w-1/2 text-xl">
                <h3 className="text-xl lg:text-2xl font-bold uppercase">
                  core values
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <span className="font-bold">Excellence:</span> We are
                    committed to providing top-tier education and training,
                    upholding high standards in all our programs and services.
                  </li>
                  <li>
                    <span className="font-bold">Integrity: </span>We operate
                    with the utmost ethics and sincerity, ensuring transparency
                    and trustworthiness in our interactions and teachings.
                  </li>
                  <li>
                    <span className="font-bold">Empathy:</span> We advocate for
                    understanding and compassion in conflict situations,
                    fostering emotional intelligence as a cornerstone of
                    effective mediation.
                  </li>
                  <li>
                    <span className="font-bold">Collaboration:</span> We believe
                    in the power of teamwork and collective problem-solving,
                    encouraging a cooperative approach to dispute resolution.
                  </li>
                  <li>
                    <span className="font-bold">Innovation: </span> We
                    continuously evolve our methodologies and practices to stay
                    at the forefront of mediation techniques and negotiation
                    strategies.
                  </li>
                  <li>
                    <span className="font-bold">Impact:</span> Our focus is on
                    delivering pragmatic, results-oriented training that has a
                    tangible, positive impact on individuals, communities, and
                    organizations.
                  </li>
                  <li>
                    <span className="font-bold">Diversity:</span> We embrace and
                    value the rich variety of perspectives and cultural
                    backgrounds, ensuring inclusivity and respect for all in our
                    global learning community.
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-[1px] bg-black w-full"></div>
          </div>

          <div className="">
            <div className="w-full flex my-10 justify-end">
              <div className=" w-full lg:w-1/2 text-xl space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold uppercase">
                  about cccmii
                </h3>
                <p>
                  Established by leading experts in conflict resolution and
                  counselling, CCCMII stands at the vanguard of contemporary
                  practices in the fields of mediation, negotiation,
                  counselling, and conciliation. With a global outlook and a
                  faculty comprising renowned specialists, we provide a wide
                  range of services, including certification courses, workshops,
                  and bespoke organizational training programs.
                </p>
                <p>
                  CCCMII&apos;s curricula are designed to teach theoretical
                  knowledge and provide hands-on experience that prepares our
                  clientele for real-world challenges. Whether working to
                  resolve complex business disputes or navigating the delicate
                  matters of family mediation, CCCMII holds steadfast to the
                  belief that effective communication, mutual understanding, and
                  creative problem-solving are universal keys to unlocking
                  lasting peace and concord.
                </p>
                <p>
                  Through our commitment to excellence, integrity, and
                  empathetic engagement, CCCMII continues to set the standard
                  for professional development in mediation and conflict
                  resolution—forging paths to agreement and understanding across
                  the globe.
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-black w-full "></div>
          </div>
        </div>
      </section>
      <div className="lg:px-8">
        <TeamDetails />
      </div>
    </>
  );
};

export default page;
