import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPage/Header/Header';
import Footer from '../Pages/SharedPage/Footer/Footer';

const Layout = () => {
    return (
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Layout;