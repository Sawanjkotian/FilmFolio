
import './App.css';

import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routPath } from './constants/route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routPath.home} element={<Home/>} />
        <Route path={routPath.categories} element={<CategoryMovies/>} />
        <Route path={routPath.invalid} element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
