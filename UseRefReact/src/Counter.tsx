import { useState, useRef, useEffect } from "react";

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
    const  [counter, setCounter] = useState(initialValue);
    const directionRef = useRef<"up" | "down" | null>(null);
    const prevDirectionRef = useRef<"up" | "down" | null>(null);

    useEffect (() => {      
        if (counter>initialValue) {
            directionRef.current = "up"
        } else if (counter<initialValue) {
            directionRef.current = "down"
        } else {
            directionRef.current = null;
        }
    }, [counter, initialValue]);

    useEffect (() => {
        if (directionRef.current !== prevDirectionRef.current) {
            console.log(directionRef.current)
        }
        prevDirectionRef.current = directionRef.current;
    }, [counter, initialValue]);
    
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

export default CounterDisplay