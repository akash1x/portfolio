import { Education } from "../types";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="bg-green-bright/5 px-4 py-4 rounded-md justify-center items-center flex flex-col gap-2">
      <p className="font-bold font-xl">{education.degree}</p>
      <p className="font-bold font-xl">{education.institution}</p>
    </div>
  );
};

export default EducationCard;
