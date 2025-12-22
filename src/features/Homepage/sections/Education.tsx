import { usePortfolio } from "../hooks/usePortfolio";
import EducationCard from "../components/EducationCard";

const Education = () => {
  const { education } = usePortfolio();

  return (
    <div>
      <h3>What I have Studied so far</h3>
      <h1>Education</h1>
      {education.map((edu, index) => (
        <EducationCard key={index} education={edu} />
      ))}
    </div>
  );
};

export default Education;
