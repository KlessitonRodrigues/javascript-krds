import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useGlobalContext from '../hooks/useGlobalContext';

import NotesPage from './Notes';
import HomePage from './Home';
import { Slide } from '@mui/material';

const Router = () => {
  const [global] = useGlobalContext();
  const locations = ['/', '/folders'];

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/folders" element={<NotesPage />} />
    </Routes>
  );
};

export default Router;
