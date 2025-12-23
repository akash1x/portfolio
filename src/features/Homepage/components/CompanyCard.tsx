import { Experience } from "../types";

interface CompanyCardProps {
  experience: Experience;
}

const CompanyCard = ({ experience }: CompanyCardProps) => {
  return (
    <div>
      <h2>{experience.role}</h2>
      <p>{experience.company}</p>
    </div>
  );
};

export default CompanyCard;
