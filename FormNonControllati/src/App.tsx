function App () {
  return (
    <div>
      <h1>Form non controllati</h1>
    </div>
  )
};

export function UncontrolledLogin () {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const email = formData.get("e-mail");
    const password = formData.get("password");
    console.log("E-mail:", email);
    console.log("Password:", password);
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="e-mail">E-Mail</label>
      <input  
        type="email"
        id="e-mail"
        name="e-mail"
      />
      <label htmlFor="password">Password</label>
      <input  
        type="password"
        id="password"
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  )
};

export default App;