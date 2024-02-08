
import './App.css';
// import Box from './box';
import CardList from './CardList'
import Iterator  from './Iterator';
import FilterDemo from './FilterDemo';
import Pegintion from './Pegintion';
import RegistrationForm from './RegistrationForm';
function App() {

  const cards = [
    { holder: 'John Doe', number: '1234-5678-9101-1121' },
    { holder: 'Jane Doe', number: '2234-5678-9101-1121' },
    { holder: 'Bob Smith', number: '3234-5678-9101-1121' },
    { holder: 'John Doe', number: '1234-5678-9101-1121' },
    { holder: 'Jane Doe', number: '2234-5678-9101-1121' },
    { holder: 'somnath  Smith', number: '3234-5678-9101-1121' },
    { holder: 'Arpit Doe', number: '1234-5678-9101-1121' },
    { holder: 'Jane Doe', number: '2234-5678-9101-1121' },
    { holder: 'Bob Smith', number: '3234-5678-9101-1121' },
    { holder: 'John Doe', number: '1234-5678-9101-1121' },
    { holder: 'Jane Doe', number: '2234-5678-9101-1121' },
    { holder: 'Bob Smith', number: '3234-5678-9101-1121' },
    // Add more cards as needed
  ];
  return (
    <div className="App">
     {/* <Box></Box> */}
     {/* <CardList cards={cards} />; */}
     {/* <Iterator/> */}
     {/* <FilterDemo/> */}
     {/* <Pegintion/> */}
     <RegistrationForm/>
    </div>
  );
}

export default App;
