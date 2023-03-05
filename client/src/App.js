import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/index.scss';
import Layout from './components/layout/PrivateLayout';
import PublicLayout from './components/layout/PublicLayout';
import PrivateRoute from './customs/PrivateRoute';
import { publicRoute, privateRoute } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoute.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={<PublicLayout>{r.element}</PublicLayout>}
          />
        ))}

        {privateRoute.map((r) => (
          <Route key={r.path} path='/' element={<PrivateRoute />}>
            <Route path={r.path} element={<Layout>{r.element}</Layout>} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
