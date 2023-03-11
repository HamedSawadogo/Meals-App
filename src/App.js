import './App.css';
import Meals from './components/Meals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Meals />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Meals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
