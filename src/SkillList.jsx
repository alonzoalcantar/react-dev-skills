import SkillListItem from "./SkillListItem";

export default function SkillList() {

    // const skills = [
    //     { name: "HTML", level: 5 },
    //     { name: "CSS", level: 3 },
    //     { name: "JavaScript", level: 4 },
    //     { name: "Python", level: 2 },
    //   ];
      
    const skills = ['Html' , 'CSS' , 'Javascript', 'Python']

    return (
        <div>
        <ul>

        {skills.map(skill => (
            <SkillListItem
            skill = {skill}/>
        ))}
        </ul>
        </div>
    );
  }
