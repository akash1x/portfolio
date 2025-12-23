import { Skill } from "../types";

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <div className="flex gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative group w-28 h-32 transition-all duration-300 hover:scale-105 filter hover:drop-shadow-[0_0_10px_#bc13fe]"
        >
          {/* OUTER HEXAGON: This serves as the "Border" */}
          <div
            className="absolute inset-0 bg-transparent transition-all duration-300 group-hover:bg-red-400 
               [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
          >
            {/* INNER HEXAGON: This is your actual Skill card */}
            <div
              className="absolute inset-[4px] bg-purple-bg flex items-center justify-center text-white font-medium 
                 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
            >
              {skill.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
