
import './App.css';
// import Toggel from './component/Toggel';
import Toggle from './component/Toggle';


function App() {
  return (
    <div className="App">
     {/* <Toggel props='Assignments-React-States'/> */}
     <Toggle
     head='Hello Geekster'
     main='Introduction'
     text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
     h1='About pages'
     text2='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
     
     />
    
    </div>
  );
}

export default App;
