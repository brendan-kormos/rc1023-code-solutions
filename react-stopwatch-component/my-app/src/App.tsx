import './App.css';
import './style.css';
import Stopwatch from './Stopwatch.tsx';

function App() {


  function handlePlayToggled(playing:boolean){
    console.log(playing)
  }
  return (
    <>
      <Stopwatch color="black" size="400px" onPlayToggled={handlePlayToggled}/>
    </>
  );
}

export default App;
