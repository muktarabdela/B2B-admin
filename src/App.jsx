import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Calendar from './components/dashboard/pages/Calendar';
import Profile from './components/dashboard/pages/Profile';
import Forms from './components/dashboard/pages/Forms';
import Personal from './components/personal/Personal';
import Supplier from './components/dashboard/supplier/Supplier';
import Business from './components/dashboard/business/Business';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import { setIsSidebarOpen } from './store/uiSlice';
import Auth from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';
function App() {
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(setIsSidebarOpen(false));
      }
    };
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>

        <div className={`${isAuthenticated ? 'block' : 'hidden'} `}>

          <div >
            <Sidebar />
          </div>
          <div

          >
            <div className="fixed w-full  top-0 bg-white">
              <Navbar />
            </div>

            <div className=''>
              <Routes>
                <Route path="/" element={<PrivateRoute Component={Dashboard} />} />
                <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />

                {/* links */}

                <Route path="/calendar" element={<PrivateRoute Component={Calendar} />} />
                <Route path="/profile" element={<PrivateRoute Component={Profile} />} />
                <Route path="/forms" element={<PrivateRoute Component={Forms} />} />

                {/* users */}
                <Route path="/supplier" element={<PrivateRoute Component={Supplier} />} />
                <Route path="/business" element={<PrivateRoute Component={Business} />} />
                <Route path="/personal" element={<PrivateRoute Component={Personal} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
