import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/Home/Home';
import VideoPage from './Pages/Video/Video';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/video/:categoryId/:videoId' element={<VideoPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
