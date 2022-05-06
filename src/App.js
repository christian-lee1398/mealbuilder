import './App.css';
import RandomMeal from './mealPicker';
import About from './about';
import RandomVeganMeal from './veganMeal';

function App() {
  return (
    <div className="App">
      <div className="randomMeal">
        <RandomMeal />
        <RandomVeganMeal />
      </div>

      <About />
    </div>
  );
}

export default App;
