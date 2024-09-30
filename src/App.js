import './App.css';
import './assets/css/tailwind.css';
// import './assets/css/materialdesignicons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IndexTwo from './pages/index-two';

function App() {
  return (
    <BrowserRouter basename="/aerowebsite">
      <Routes>
        <Route path='/' element={<IndexTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;