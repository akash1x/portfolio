import SkillList from "../components/SkillList";
import useContentful from "../../../hooks/useContentful";
import { useEffect, useState } from "react";
import Title from "../../../components/Title";
interface SkillsProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const Skills = ({ ref }: SkillsProps) => {
  const { getTechnicalSkills } = useContentful();
  const [skills, setSkills] = useState<string[]>([]);
  useEffect(() => {
    getTechnicalSkills().then((data) => {
      if (Array.isArray(data)) {
        setSkills(data as string[]);
      }
    });
  }, []);
  return (
    <div ref={ref} className="min-h-screen flex flex-col py-20 gap-20">
      <Title title="/ technical skills" />
      <SkillList skills={skills} />
    </div>
  );
};

export default Skills;
