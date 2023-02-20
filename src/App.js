import './App.css';
import Navigation from "./components/Navigation";
import Movie from "./components/Movie";

let testTitle = "Pee Wee Herman's Big Adventure";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Movie movieTitle={testTitle}/>
    </div>
  );
}

export default App;
