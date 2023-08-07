import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SectionPage from 'pages/Section';
import MainLayout from 'components/shared/layouts/MainLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<SectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
