import { useRef, useEffect } from "react"
import { FirstMount } from "./FirstMount";
import { Counter } from "./Counter";

export function App () {
  return (
    <>
    <FirstMount />
    <Counter initialValue={0} increment={1}/>
    </>
  )
};

export function FocusableInput () {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus
  }, []);
    return (
        <>
            <input 
            type="text"
            ref={inputRef}
            />
        </>
    )
};