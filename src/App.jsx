import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      <h1>Puppy Pals</h1>
      { puppies.map(puppy => <p key={puppy.id}>{puppy.name}</p>) }
    </>
  )
}

export default App
