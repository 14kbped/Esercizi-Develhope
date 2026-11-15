import type { ReactNode } from 'react';

function Age({age}:{age: number}){
    return <p>Your age is {age}</p>
};

function Message({ age }: { age?: number }) {
  if (age !== undefined && age > 18) {
    return <p>Your age is {age}</p>
  }

  return <p>You are very young!</p>
};

function Welcome({name=`User`, age}:{name?: ReactNode; age: number}) {
    return <div>
    <h1>Welcome, {name}!</h1>
     {age !== undefined && age > 18 && <Age age={age} />}
     {age !== undefined && <Age age={age} />}
     {age !== undefined && age > 18 && age < 65 && <Age age={age} />}
     {age !== undefined && age > 18 && name === 'John' && <Age age={age} />}
     {age !== undefined && age > 18 && <Age age={age} />}
     <Message age={age} />
    </div>
};

function App() {
    return <Welcome name="John" age={28} />
};

export default App