import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FoodTypeSelector from './components/FoodTypeSelector';
import AppRouter from './App.routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
