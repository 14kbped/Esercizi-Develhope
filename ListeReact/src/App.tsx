import { Colors } from './Colors'
import './App.css'

const colors = [
  { id: 1, name: "Rosso"},
  { id: 2, name: "Blu"},
  { id: 3, name: "Verde"},
  { id: 4, name: "Giallo"},
  { id: 5, name: "Bianco"}
];

function App () {
  return (
    <>
    <h1>La mia lista di Colori</h1>
    <Colors items={colors} />
    </>
  )
};
export default App
