import { error } from 'console';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  function additem(){
    const title = prompt("Enter the title");
    const price = prompt("Enter the Price")
    console.log({title,price})
  
    fetch('api/add', {method: 'POST', body: JSON.stringify({title,price})})
    .catch((error) => {
      console.log("Error: ",error)
    })

       
  }

  let[product, setproduct] = useState([{}]);
  console.log(product)
  useEffect(() => {
    async function fetchdata(){
      let data = await fetch('api/products')
      let res = await data.json()
      setproduct(res);
    }
    fetchdata()
    
  }, [])



  return (
    <div className="App">
      
      <h2>Available Items</h2>
      
    <table style={{border: "1px solid black",marginLeft: "38%"}}>
      
      <th>Name</th>
      <th>Price</th>
      
      {product.map((el: any) => {
        return(
          <tr style={{border: "1px solid black"}}>
            <td>{el.title}</td>
            <td>{el.price}</td>
          </tr>
        )
      })}
    </table>
    <button onClick={additem}>Add Item</button>
    </div>
  );
}

export default App;
