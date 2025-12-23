import { usePortfolio } from "../hooks/usePortfolio";

const About = () => {
  const { about, profileImg } = usePortfolio();

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3> {about.introductionTitle}</h3>
        <h1>Overview.</h1>
        <div className="flex gap-6 justify-center items-center">
          <div>
            <img
              className="h-50 w-50 rounded-full border-4 border-[#ff00ff] object-cover shadow-[0_0_20px_#ff00ff]"
              src={profileImg}
              alt="profile image"
            />

            <div className="flex gap-4 flex-wrap justify-center items-center mt-4">
              <button className="bg-blue-500 border-2 border-blue-500 rounded-md px-2 py-1 hover:cursor-pointer">
                Resume
              </button>
              <button className="bg-blue-500 border-2 border-blue-500 rounded-md px-2 py-1 hover:cursor-pointer">
                LinkedIn
              </button>
              <button className="bg-blue-500 border-2 border-blue-500 rounded-md px-2 py-1 hover:cursor-pointer">
                GitHub
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 pl-10">
            {about.bioPoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-2xl"> {point.emoji}</span>
                <span className=""> {point.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
