import { forwardRef, useEffect } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";
import RichTextRenderer from "../../../components/RichTextRenderer";
import Title from "../../../components/Title";

import Intro from "./Intro";
interface AboutProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const About = ({ ref }: AboutProps) => {
  const { about, profileImg } = usePortfolio();

  if (!about) {
    return <div ref={ref}>Loading...</div>;
  }

  return (
    <div ref={ref} className="min-h-screen flex flex-col py-20">
      <div className="flex flex-col gap-20 justify-center ">
        <Title title={about.title} />
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start">
          <div className="flex justify-center w-full md:w-auto">
            <img
              className="border:none rounded-2xl box-shadow-[6px_13px_23px_-5px_#00000075] h-auto max-w-[200px] md:max-w-[300px]"
              src={profileImg}
              alt="profile image"
            />
          </div>
          <div className="flex flex-col gap-2 pl-0 md:pl-10 text-center md:text-left">
            <RichTextRenderer document={about.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
