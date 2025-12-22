import { Education } from "../types";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div>
      <h2>{education.degree}</h2>
      <p>{education.institution}</p>
      <p>{education.period}</p>
    </div>
  );
};

export default EducationCard;
