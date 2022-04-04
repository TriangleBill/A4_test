import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import NewsPage from './components/NewsPage';
import ProfilePage from './components/ProfilePage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
