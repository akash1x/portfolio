import { usePortfolio } from "../hooks/usePortfolio";
import SkillList from "../components/SkillList";

const Skills = () => {
  const { skills } = usePortfolio();

  return (
    <div>
      <h3>Technical Proficiency</h3>
      <SkillList skills={skills} />
    </div>
  );
};

export default Skills;
