import { Experience } from "../types";

interface CompanyCardProps {
  experience: Experience;
}

const CompanyCard = ({ experience }: CompanyCardProps) => {
  if (!experience) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{experience.designation}</h2>
      <p>{experience.company}</p>
    </div>
  );
};

export default CompanyCard;
