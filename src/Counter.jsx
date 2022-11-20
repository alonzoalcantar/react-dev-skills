export default function Counter({sleepLost, handleCount}) {


    
    return(

        <div>
             <p>Nights of Sleep Lost : {sleepLost}</p>
            <button onClick={handleCount}>Increase Count</button>
        </div>
    )
}

