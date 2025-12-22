import { Experience } from "../types";

interface CompanyCardProps {
  experience: Experience;
}

const CompanyCard = ({ experience }: CompanyCardProps) => {
  return (
    <div>
      <h2>{experience.role}</h2>
      <p>{experience.company}</p>
      <p>{experience.period}</p>
      <p>{experience.description}</p>
    </div>
  );
};

export default CompanyCard;
