import { useRef, useEffect } from "react";

export function FirstMount () {
    const hasMounted = useRef(false);
    useEffect (() => {
        if (!hasMounted.current) {
            console.log("Componente montato!");
            hasMounted.current = true;
        }
    }, []);
    return (
        <>
        <h2>First Mount</h2>
        </>
    )
};