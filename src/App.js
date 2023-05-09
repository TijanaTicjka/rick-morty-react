import './App.css';
import { Routes, Route } from 'react-router';
import { Layout } from '../src/components/Layout/Layout'
import { Home } from './components/Home/Home';
import { DetailedCharacter } from './components/DetailedCharacter/DetailedCharacter';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/character/:id'} element={<DetailedCharacter/>}/>
    </Route>
  </Routes>
  );
}

export default App;
