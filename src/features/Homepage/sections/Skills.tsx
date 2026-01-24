import SkillList from "../components/SkillList";
import useContentful from "../../../hooks/useContentful";
import { useEffect, useState } from "react";
interface SkillsProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const Skills = ({ ref }: SkillsProps) => {
  const { getTechnicalSkills } = useContentful();
  const [skills, setSkills] = useState<string[]>([]);
  useEffect(() => {
    getTechnicalSkills().then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <div ref={ref} className="flex flex-col gap-20">
      <h1>/ technical skills</h1>
      <SkillList skills={skills} />
    </div>
  );
};

export default Skills;
