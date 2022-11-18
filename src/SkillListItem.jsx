import { useState } from "react";
import Counter from "./Counter";


export default function SkillListItem({skill}) {

    const [mastered, setMastered] = useState(false);
    const [sleepLost, setSleepLost] = useState(0);

    const handleClick = () => {
        if (mastered) {
        setMastered(false)
        setSleepLost(0)
        } else {
        setMastered(true)    
        }
      
    }

    const handleCount = () => {
        setSleepLost(prevSleepLost => prevSleepLost + 1)
    }




    
    return (
        <li>

            <h2>{skill}</h2>
            
            <p>Mastered?? : {mastered ? 'Yes I have mastered this skill' : 'No I have yet to master this skill'}</p>

            { mastered ? <h4>I have lost enough sleep studying</h4> : <h4>I need to lose even more sleep</h4>}

            { mastered && <Counter 
            handleCount={handleCount}
            sleepLost={sleepLost} /> }

            <button onClick={handleClick}>Mastered</button>

        </li>
        
    );
}
  
  