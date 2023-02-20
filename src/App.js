import './App.css';
import Navigation from "./components/Navigation";
import Movie from "./components/Movie";

let movieTitle = "Pee Wee Herman's Big Adventure";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Movie movieTitle={movieTitle}/>
    </div>
  );
}

export default App;
