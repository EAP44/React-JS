import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// ---------------------------------------------------------API//
import API from './API/TEST';
// --------------------------------------------------TodoListe//
// import Display from './TodoListe/display';
// --------------------------------------------------Calculator//
// import Cal from './Calculator/Calculator';
// -------------------------------------------------------CRUDS//
// import CRUDS from './CRUDS/CRUDS'
// import Submit from './CRUDS/Submit';
// ----------------------------------------------------------PC//
// import Produit from './PC/produit'
// ---------------------------------------------------TimeTable//
// import Table from './TimeTable/Table';
// ---------------------------------------------------------App//
// import App from './App';
// -------------------------------------------------------Route//
// import AppRoute from './Route/NavBar/AppRoute';
// import AppProduct from './Route/ProductCar/AppProduct';
// -------------------------------------------------------Quick//
// import Quick from './Quick/Quick';
// -----------------------------------------------------MyStore//
// import MyStore from './APIStore/MyStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* -----------------------------------------------API*/}
    <API/>
    {/* -----------------------------------------------Cal*/}
    {/* <Cal/> */}
    {/* ---------------------------------------------CRUDS*/}
    {/* <CRUDS/> */}
    {/* <Submit/> */}
    {/* <List/> */}
    {/* ------------------------------------------------PC*/}
    {/* <Produit/> */}
    {/* -----------------------------------------TimeTable*/}
    {/* <Table/> */}
    {/* -----------------------------------------TodoListe*/}
    {/* <Display/> */}
    {/* -----------------------------------------------App*/}
    {/* <App/> */}
    {/* ---------------------------------------------Route*/}
    {/* <AppRoute/> */}
    {/* <AppProduct/> */}
    {/* ---------------------------------------------Route*/}
    {/* <Quick/> */}
    {/* -------------------------------------------MyStore*/}
    {/* <MyStore/> */}
  </React.StrictMode>
);
reportWebVitals();
