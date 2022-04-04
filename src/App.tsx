import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}

export default App;
