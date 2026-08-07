import './App.css';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import { Button } from '@mui/material';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import Footer from './customer/components/Footer/Footer';
import Products from './customer/pages/Products/Products';
import { Route, Routes, useNavigate } from 'react-router-dom';

import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import CustomerRoutes from './routes/CustomerRoutes';
import AdminDashboard from './admin/pages/Dashboard/Dashboard';
import SellerAccountForm from './customer/pages/BecomeSeller/SellerAccountForm';
import SellerAccountVerification from './seller/pages/SellerAccountVerification';
import SellerAccountVerified from './seller/pages/SellerAccountVerified';
import { useAppDispatch, useAppSelector } from './Redux Toolkit/Store';
import { useEffect } from 'react';
import { fetchSellerProfile } from './Redux Toolkit/Seller/sellerSlice';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import AdminLoginForm from './admin/pages/Auth/AdminLogin';
import AdminAuth from './admin/pages/Auth/AdminAuth';
import { fetchUserProfile } from './Redux Toolkit/Customer/UserSlice';
import { createHomeCategories, fetchHomePageData } from './Redux Toolkit/Customer/Customer/AsyncThunk';
import { homeCategories } from './data/homeCategories';
import Mobile from './data/Products/mobile';

function App() {
  const dispatch = useAppDispatch();
  const { auth, sellerAuth, sellers, user } = useAppSelector(store => store);
  const navigate = useNavigate();

  // 1. JWT validation logic with safe dependency tracking to prevent infinite 429 loops
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    
    if (token) {
      // Sirf tabhi profile fetch karega jab Redux store me data available na ho
      if (!user.user) {
        dispatch(fetchUserProfile({ jwt: token, navigate }));
      }
      if (!sellers.profile) {
        dispatch(fetchSellerProfile(token));
      }
    }
  }, [dispatch, navigate, user.user, sellers.profile]);

  // 2. Static configuration loading (runs once)
  useEffect(() => {
    dispatch(createHomeCategories(homeCategories));
    // dispatch(fetchHomePageData())
  }, [dispatch]);

  return (
    <ThemeProvider theme={customeTheme}>
      <div className='App' >

        <Routes>
          {sellers.profile && <Route path='/seller/*' element={<SellerDashboard />} />}
          {user.user?.role === "ROLE_ADMIN" && <Route path='/admin/*' element={<AdminDashboard />} />}
          <Route path='/verify-seller/:otp' element={<SellerAccountVerification />} />
          <Route path='/seller-account-verified' element={<SellerAccountVerified />} />
          <Route path='/become-seller' element={<BecomeSeller />} />
          <Route path='/admin-login' element={<AdminAuth />} />

          <Route path='/dummy' element={<Mobile />} />

          <Route path='*' element={<CustomerRoutes />} />

        </Routes>
        {/* <Footer/> */}
      </div>

    </ThemeProvider>
  );
}

export default App;