import { forwardRef } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";
import RichTextRenderer from "../../../components/RichTextRenderer";
import Title from "../../../components/Title";
interface AboutProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const About = ({ ref }: AboutProps) => {
  const { about, profileImg } = usePortfolio();

  if (!about) {
    return <div ref={ref}>Loading...</div>;
  }

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-20 justify-center ">
        <Title title={about.title} />
        <div className="flex gap-6 justify-center">
          <div>
            <img
              className="border:none rounded-2xl box-shadow-[6px_13px_23px_-5px_#00000075] h-auto max-w-[300px]"
              src={profileImg}
              alt="profile image"
            />
          </div>
          <div className="flex flex-col gap-2 pl-10">
            <RichTextRenderer document={about.description} />
            {/* {about.description.map((point, index) => (
              <div key={index} className="flex gap-4">
                <span className=""> {point}</span>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
