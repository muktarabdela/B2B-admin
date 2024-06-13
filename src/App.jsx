import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Personal from './components/personal/Personal';
import Supplier from './components/dashboard/supplier/Supplier';
import Business from './components/business/Business';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import { setIsSidebarOpen } from './store/uiSlice';
import Auth from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';
import Approve from './components/products/Approve';
import Failed from './components/products/Failed';
import Pending from './components/products/Pending';
import Rejected from './components/products/Rejected';
import AllProducts from './components/products/AllProducts';
import DetailProduct from './components/products/models/detailProduct/DetailProduct';
import AddProducts from './components/products/add_Product/AddProducts';
import SupplierDetail from './components/dashboard/supplier/supplierDtail/SupplierDetail';
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

                {/* Products */}
                <Route path="/all-products" element={<PrivateRoute Component={AllProducts} />} />
                <Route path="/pending" element={<PrivateRoute Component={Pending} />} />
                <Route path="/approve" element={<PrivateRoute Component={Approve} />} />
                <Route path="/rejected" element={<PrivateRoute Component={Rejected} />} />
                {/* <Route path="/failed" element={<PrivateRoute Component={Failed} />} /> */}


                {/* users */}
                <Route path="/supplier" element={<PrivateRoute Component={Supplier} />} />
                <Route path="/business" element={<PrivateRoute Component={Business} />} />
                <Route path="/personal" element={<PrivateRoute Component={Personal} />} />

                {/* other */}
                <Route path="/add-products" element={<PrivateRoute Component={AddProducts} />} />
                <Route path="/detail/products/:productId" element={<PrivateRoute Component={DetailProduct} />} />

                {/* supplier detail */}
                <Route path="/detail/supplier/:supplierId" element={<PrivateRoute Component={SupplierDetail} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
