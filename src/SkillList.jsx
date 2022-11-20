

import SkillListItem from "./SkillListItem";

export default function SkillList({skills}) {

    


    return (
        <div>
        <ul>

        {skills.map((skill, idx) => (

        <SkillListItem 
        skill={skill.name} 
        level={skill.level} 
        key={idx} />
      ))}
      
        </ul>
        </div>
    );


  }