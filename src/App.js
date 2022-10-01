import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Pricing from './components/Price/Pricing';
import AssingnmentMarks from './components/Assingment/AssingnmentMarks';
import PhonBar from './components/Phone/PhonBar';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
        <h1 className='text-3xl font-bold'>this is big big header</h1>
        <p>this is paragraph</p>
        <Pricing></Pricing>
        <AssingnmentMarks></AssingnmentMarks>
        <PhonBar></PhonBar>
    </div>
  );
}

export default App;
