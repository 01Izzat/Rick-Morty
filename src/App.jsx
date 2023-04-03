import { Header } from './Components/Header/Header';
import { Characters } from './pages/Characters/Characters';
import { CharacterInfo } from './pages/CharacterInfo/CharacterInfo';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Expisode } from './pages/Episode/Episode';
import { Location } from './pages/Location/Location';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/characters/:id' element={<CharacterInfo />} />
        <Route path='/episodes' element={<Expisode />} />
        <Route path='/location' element={<Location />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
