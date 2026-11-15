import type { ReactNode } from 'react';

function Age({age}:{age: number}){
return <p>Your age is {age}</p>
};

function Welcome({name=`User`, age}:{name?: ReactNode; age: number}) {
    return <div>
    <h1>Welcome, {name}!</h1>
    <Age age={age}/>
    </div>
};

function App() {
    return <Welcome name={<strong>Mattia</strong>} age={28} />
};

export default App