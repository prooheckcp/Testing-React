import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>  
  )
}

function App() {
  return (
    <div className="App">
      <Person 
        name={'John'} 
        lastName={'Doe'} 
        age={30}
        />
      <Person name={'Amogus'} lastName={'Doe2'} age={23}/>
    </div>
  );
}

export default App;