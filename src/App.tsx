import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import NewsPage from './components/NewsPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/news' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
