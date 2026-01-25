import { Experience } from "../types";

interface DetailedCompanyCardProps {
  experience: Experience;
}

const DetailedCompanyCard = ({ experience }: DetailedCompanyCardProps) => {
  if (!experience) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">
          {experience.designation} @
          <span className="text-green-bright">{experience.company}</span>
        </h2>
        <p className="uppercase">{experience.period}</p>
      </div>
      <ul className="flex flex-col gap-3">
        {experience.description.map((desc, index) => (
          <li className="marker:text-green-bright list-disc" key={index}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailedCompanyCard;
