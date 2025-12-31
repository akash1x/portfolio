import { usePortfolio } from "../hooks/usePortfolio";
import SkillList from "../components/SkillList";

const Skills = () => {
  const { skills } = usePortfolio();

  return (
    <div className="flex flex-col gap-20">
      <h1>/ technical skills</h1>
      <SkillList skills={skills} />
    </div>
  );
};

export default Skills;
