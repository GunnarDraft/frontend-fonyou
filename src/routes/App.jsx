import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Home from '../containers/Home'; 
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import '../styles/globals.css' 

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route element={<NotFound/>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
