import { useState, useEffect } from "react";

type CounterProps = {
  initialValue: number
  increment: number
}

function CounterDisplay ( {count}:{count:number} ) {
    return (
        <h1>{count}</h1>
    )
}

export function Counter ({initialValue, increment} : CounterProps){
    const  [counter, setCounter] = useState(initialValue)
    
    useEffect (()=>{
        console.log(counter)
    }, [counter])

    function handleIncrement() {
        setCounter((currentCounter) => currentCounter + increment)
    }   // Passiamo una funzione perché il nuovo valore dipende da quello precedente.
        // React potrebbe raggruppare più aggiornamenti.
        function handleDecrement() {
           setCounter((currentCounter) => currentCounter - increment) 
        }
            function handleReset (){
                setCounter(initialValue)
            }
    return (
        <div>
        <CounterDisplay count={counter} />
        <button onClick={handleIncrement}>Aggiungi</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Sottrai</button>
        </div>
    )
};

export function Clock () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);
        return ()=> clearInterval(interval);
        }, []);

    return (
        <h1>{time.toLocaleTimeString()}</h1>
    )
};