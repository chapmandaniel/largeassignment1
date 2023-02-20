import './App.css';
import Navigation from "./components/Navigation";
import Movie from "./components/MovieList";
import MovieList from "./components/MovieList";

let testTitle = "Pee Wee Herman's Big Adventure";

function App() {
  return (
    <div className="App">
        <Navigation />
        <MovieList />
    </div>
  );
}

export default App;
