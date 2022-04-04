import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import NewsPage from './components/NewsPage';
import PrivateRoute from './components/PrivateRoute';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/profile' element={<PrivateRoute Component={ProfilePage} />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
