import { Link, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dash';
import MainLayout from './components/layouts/main';

const TestLinks = () => (
<ul>
      <li><Link to="/login">login</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
)
const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {path: '/', element: <MainLayout/>, children: [
    { path: '/index.html', element: <TestLinks/>},
    { path: 'dashboard', element: <Dashboard /> },
  ]}
]);

export default router;
