import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find(puppy => puppy.id === featPupId);

  return (
    <>
      <h1>Puppy Pals</h1>
      { puppies.map(puppy => <p onClick={()=>setFeatPupId(puppy.id)} key={puppy.id}> {puppy.name} </p>) }
      { featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default App
