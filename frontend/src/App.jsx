``
import './App.css'
import Forms from './components/Forms';
import Posts from './components/Posts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Posts/>} />
      <Route path='form/' element={<Forms/>} />
      <Route path='form/:id/' element={<Forms/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App
