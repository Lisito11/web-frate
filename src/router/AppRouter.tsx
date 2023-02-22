import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../frate/routes/AppRoutes';

export const AppRouter = () => {

  return (
    <Routes>
        <Route path="/*" element={ <AppRoutes />} />
    </Routes>
  )
}