import { Experience } from "../types";

interface DetailedCompanyCardProps {
  experience: Experience;
}

const DetailedCompanyCard = ({ experience }: DetailedCompanyCardProps) => {
  return (
    <div>
      <h2>{experience.role}</h2>
      <p>{experience.company}</p>
      <p>{experience.period}</p>
      <ul>
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailedCompanyCard;
