import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SectionPage from 'pages/Section';
import MainLayout from 'components/shared/layouts/MainLayout';
import ToDo from 'pages/Todo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<SectionPage />} />
          <Route path="/:id" element={<ToDo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
