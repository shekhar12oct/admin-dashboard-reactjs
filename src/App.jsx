import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CATEGORIES_LIST } from '../src/constant/categoryList';
import { PRODUCTS_LIST } from '../src/constant/productList';
import './App.css';
import Categories from './components/Categories';
import Customers from './components/Customers';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const theme = useSelector((state) => state.theme.mode);
  return (
    <Router>
      <div
        style={{ backgroundColor: `${theme === 'dark' ? 'black' : 'white'}` }}
        className='grid-container'
      >
        {/* Always visible */}
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        {/* Page content changes based on the route */}
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/products'
              element={<Products products={PRODUCTS_LIST} />}
            />
            <Route
              path='/categories'
              element={<Categories categoriesData={CATEGORIES_LIST} />}
            />
            <Route path='/customers' element={<Customers />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
