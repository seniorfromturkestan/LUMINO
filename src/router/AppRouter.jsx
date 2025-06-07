import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import TestInterface from '../pages/TestPage';
import Lists from '../pages/Lists';
import Profile from '../pages/Profile';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/testing" element={<TestInterface />}/>
            <Route path="/lists" element={<Lists />}/>
            <Route path="/profile" element={<Profile />} />



        
            <Route path="*" element={<div className="text-center mt-10 text-red-500 text-xl">404 - Page Not Found</div>} />
        </Routes>
    );
};

export default AppRouter;
