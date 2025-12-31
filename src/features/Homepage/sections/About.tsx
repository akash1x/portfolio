import { usePortfolio } from "../hooks/usePortfolio";

const About = () => {
  const { about, profileImg } = usePortfolio();

  return (
    <div>
      <div className="flex flex-col gap-20 justify-center ">
        <h1>{about.introductionTitle}</h1>
        <div className="flex gap-6 justify-center items-center">
          <div>
            <img
              className=" w-50 rounded-full border-4 border-green-bright object-cover shadow-[0_0_20px_green-bright]"
              //lassName="rounded-2xl box-shadow-[6px_13px_23px_-5px_#00000075] h-auto max-w-[300px]"
              src={profileImg}
              alt="profile image"
            />

            <div className="flex gap-4 flex-wrap justify-center items-center mt-4">
              <button className="text-green-bright bg-transparent border-2 border-green-bright rounded-md px-2 py-1 hover:cursor-pointer">
                Resume
              </button>
              <button className="text-green-bright bg-transparent border-2 border-green-bright rounded-md px-2 py-1 hover:cursor-pointer">
                LinkedIn
              </button>
              <button className="text-green-bright bg-transparent border-2 border-green-bright rounded-md px-2 py-1 hover:cursor-pointer">
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
