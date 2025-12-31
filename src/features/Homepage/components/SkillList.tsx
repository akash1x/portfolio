import { Skill } from "../types";

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2 max-w-[850px] mx-auto">
      {skills.map((skill, index) => {
        const row = Math.floor(index / 7);
        const isOffsetRow = row % 2 !== 0;
        const isFirstInRow = index % 7 === 0;

        return (
          <div
            key={index}
            className={`relative group w-28 h-32 transition-all duration-300 hover:scale-105 filter hover:drop-shadow-[0_0_10px_#64ffda]
              ${isOffsetRow && isFirstInRow ? "ml-15" : ""} ${
              row > 0 ? "-mt-8" : ""
            }`}
          >
            {/* OUTER HEXAGON: This serves as the "Border" */}
            <div
              className="absolute inset-0 bg-transparent transition-all duration-300 group-hover:bg-green-bright/20 
                 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
            >
              {/* INNER HEXAGON: This is your actual Skill card */}
              <div
                className="absolute inset-[4px] bg-green-bright/5 flex items-center justify-center text-white font-medium 
                   [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
              >
                {skill.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;
