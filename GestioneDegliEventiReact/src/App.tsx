
export function MouseClicker () {
  function handleClick (event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.name);
  };

  function handleImage (event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation ();
    console.log(event.currentTarget.src);
  };
  return (
    <button name="one" onClick={handleClick}>
      Cliccami!
      <img onClick={handleImage} src="public/favicon.svg" alt="img prova" />
      </button>
  )
};

export function MultiClick () {
  function handleClick (event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.name);
  };

  return (
    <div>
    <button onClick={handleClick} name="one">One</button>
    <button onClick={handleClick} name="two">Two</button>
    <button onClick={handleClick} name="three">Three</button>
    </div>
  )
};