import { IoMail } from "react-icons/io5";
import { usePortfolio } from "../../../hooks/usePortfolio";
const Intro = () => {
  const { intro } = usePortfolio();

  if (!intro || typeof intro !== "object") return null;

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex">
        <p className="w-fit text-2xl whitespace-nowrap overflow-hidden border-r-[3px] border-[#64ffda] font-mono animate-[typing_2s_steps(16),blink_.5s_step-end_infinite_alternate]">
          hi,<span className="text-[#64ffda] font-bold">akash</span> here.
        </p>
        <style>{`
        @keyframes typing { from { width: 0 } to { width: 16ch } }
        @keyframes blink { 50% { border-color: transparent } }
      `}</style>
      </div>
      <div>
        <p>{intro.description}</p>
      </div>
      <a
        href="mailto:akash1x25@gmail.com"
        className="cursor-pointer outline outline-[#64ffda] mt-7 ml-1 max-w-[120px] flex justify-center items-center gap-2 rounded-lg px-4 py-2"
        onClick={(e) => {
          setTimeout(() => {
            alert("If nothing opened, email me at akash1x25@gmail.com");
          }, 500);
        }}
      >
        <IoMail className="text-[#64ffda]" /> Say Hi!
      </a>
    </div>
  );
};

export default Intro;
