import { forwardRef } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import SkillList from "../components/SkillList";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  const { skills } = usePortfolio();

  return (
    <div ref={ref} className="flex flex-col gap-20">
      <h1>/ technical skills</h1>
      <SkillList skills={skills} />
    </div>
  );
});

export default Skills;
