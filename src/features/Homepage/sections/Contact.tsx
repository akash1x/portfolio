import { usePortfolio } from "../../../hooks/usePortfolio";
import Title from "../../../components/Title";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

interface ContactProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const Contact = ({ ref }: ContactProps) => {
  const { contact } = usePortfolio();
  if (!contact) {
    return <div>Loading...</div>;
  }
  return (
    <div ref={ref} className="min-h-screen flex flex-col py-20 gap-20">
      <Title title="/ contact" />

      <div className="flex flex-col gap-10 items-center justify-center flex-1">
        <p className="text-[#8892b0] text-center max-w-2xl text-lg md:text-xl leading-relaxed">
          {contact.message}
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-10">
          <a
            href="mailto:akash1x25@gmail.com"
            className="flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#64ffda] flex items-center justify-center group-hover:bg-[#64ffda]/10 transition-colors">
              <IoMail className="text-3xl text-[#64ffda]" />
            </div>
            <span className="text-[#ccd6f6] font-mono text-sm group-hover:text-[#64ffda] transition-colors">
              Email
            </span>
            <span className="text-[#8892b0] text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-10 transition-all duration-300 text-center">
              akash1x25@gmail.com
            </span>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#64ffda] flex items-center justify-center group-hover:bg-[#64ffda]/10 transition-colors">
              <FaLinkedin className="text-3xl text-[#64ffda]" />
            </div>
            <span className="text-[#ccd6f6] font-mono text-sm group-hover:text-[#64ffda] transition-colors">
              LinkedIn
            </span>
            <span className="text-[#8892b0] text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-10 transition-all duration-300 text-center">
              Connect on LinkedIn
            </span>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#64ffda] flex items-center justify-center group-hover:bg-[#64ffda]/10 transition-colors">
              <FaGithub className="text-3xl text-[#64ffda]" />
            </div>
            <span className="text-[#ccd6f6] font-mono text-sm group-hover:text-[#64ffda] transition-colors">
              GitHub
            </span>
            <span className="text-[#8892b0] text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-10 transition-all duration-300 text-center">
              Check my Code
            </span>
          </a>

          <a
            href={`tel:${contact.phoneNumber}`}
            className="flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#64ffda] flex items-center justify-center group-hover:bg-[#64ffda]/10 transition-colors">
              <FaPhone className="text-3xl text-[#64ffda]" />
            </div>
            <span className="text-[#ccd6f6] font-mono text-sm group-hover:text-[#64ffda] transition-colors">
              Phone
            </span>
            <span className="text-[#8892b0] text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-10 transition-all duration-300 text-center">
              {contact.phoneNumber}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
