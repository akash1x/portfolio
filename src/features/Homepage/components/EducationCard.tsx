import { Education } from "../types";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="bg-purple-bg px-4 py-6">
      <p className="font-bold font-xl">{education.degree}</p>
      <p className="font-bold font-xl">{education.institution}</p>
    </div>
  );
};

export default EducationCard;
