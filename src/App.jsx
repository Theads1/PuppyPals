import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'


function App() {
  // console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  const styles = {
    border: '2px solid rgba(0, 0, 0, 0.05)',
};
  return (
  
      <div style={styles} className="App">
      { puppies.map((puppy) => {

      return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
   
    })
  

}
{ featPupId && (
        <div>
          <h2 style={{color:'#87CEEB'}}>{featuredPup.name}</h2>
          <ul style={{color:'beige'}}>
            <li >Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    

  )
}

export default App
