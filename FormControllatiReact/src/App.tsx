import { useState } from "react";

function App () {
  function handleUserLogin (data: {
    username: string;
    password: string;
    remember: boolean;
  }) {
    console.log(`Login ricevuto:`, data)
  };
  return (
    <div>
      <h1>Form controllati</h1>
      <Login onLogin={handleUserLogin} />
    </div>
  )
};

export function Welcome (props: { name: string}) {
  return (
    <div>
      <h2>Benvenuto, {props.name}!</h2>
    </div>
  )
};

export function InteractiveWelcome () {
    const [name, setName] = useState("");
    return (
      <div>
        <Welcome name={name}/>
        <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        >
        </input>
      </div>
    )
  };

export function Login (props: {
  onLogin: (data: {
    username: string;
    password: string;
    remember: boolean;
  }) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleLogin () {
    props.onLogin({username, password, remember})
  };

  return (
    <div>
    <div id="login">
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(event)=> setUsername(event.target.value)}
          >
          </input>
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event)=> setPassword(event.target.value)}
          >
          </input>
      </label>
      </div>
      <div id="button">
        
          <label>
        Ricordami
        <input
          type="checkbox"
          checked={remember}
          onChange={(event)=> setRemember(event.target.checked)}
          >
          </input>
      </label>
      <button
      type="button"
      disabled={!username || !password}
      onClick={handleLogin}
      >
        Login
      </button>
      <button
      type="button"
      onClick={() => {
        setUsername("");
        setPassword("");
        setRemember(false);
        }}
      >Reset
      </button>
      </div>
    
    </div>
  )
};
export default App;