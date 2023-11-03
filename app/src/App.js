import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Help from './views/Help';
import MoviesList from './views/MoviesList';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
    
  );
}

export default App;
