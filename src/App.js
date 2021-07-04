import './App.css';
import Wheel from './components/Wheel/Wheel'

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const guid = urlParams.get('guid')
  const username = urlParams.get('username')
  const randomChosenPackage = urlParams.get('RandomChosenPackage')


  return (
    <div className="App">
      <Wheel/>
    </div>
  );
}

export default App;
