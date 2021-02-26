import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafar', 'Alamgir', 'Bappi', 'Shuvo']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  const productNames = products.map(product =>product.name);
  console.log(productNames);


  return (
    <div className="App">
      <header className="App-header"> 
      <Counter></Counter>
      <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.price}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>   
        <Product product={products[1]}></Product>   
        <Product product={products[2]}></Product>   
        <p>I am a react person</p>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
   
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return ( 
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>

    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h3>My Name: {props.name} </h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
