
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/login';
import RegistrationForm from '../pages/RegistrationForm';
import ProtectedRoute, {ProtectedRoute2} from './ProtectedRoute';
import ForgetPassword from '../pages/ForgetPassword';
import Homepage from '../pages/Homepage';
const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/dashboard',
                element: <ProtectedRoute> <Dashboard/> </ProtectedRoute>
            },
            {
                path: '/signup',
                element: <ProtectedRoute2> <RegistrationForm/> </ProtectedRoute2>
            },
            {
                path: '/register',
                element: <ProtectedRoute2> <RegistrationForm/> </ProtectedRoute2>
            },
            {
                path: '/signin',
                element: <ProtectedRoute2> <LoginPage/> </ProtectedRoute2>
            },
            {
                path: '/login',
                element: <ProtectedRoute2> <LoginPage/> </ProtectedRoute2>
            },
            {
                path: '/forgot',
                element: <ProtectedRoute2> <ForgetPassword/> </ProtectedRoute2>
            },
            
        ],
    },  
  
     
]);

export default router;


