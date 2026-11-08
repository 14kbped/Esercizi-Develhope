function Message() {
  return <p>What a beautiful day!</p>
};

function Hello() {
  return (
    <>
      <h2>Hello, World!</h2>
      <Message />
    </>
  )
};

function App() {
    return (
        <div>
            <Hello />
        </div>
    )
}
export default App