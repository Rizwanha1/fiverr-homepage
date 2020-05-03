import './App.css';
import Footer from './components/footer/Footer';
import { Box } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import Store from './redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/loginSignUp/Login'
import SignUp from './components/loginSignUp/SignUp'
import BecomeSeller from './components/becomeASeller/BecomeSeller';
import Dashbord from './components/dashbord/Dashbord'
import Billing from './components/dashbord/dashbordComponents/Billing';
import DefaultHome from './components/dashbord/dashbordComponents/Home';
import Profile from './components/dashbord/dashbordComponents/Profile';
import CatagoriesDisplayer from './components/catagoriesDisplayer/CatagoriesDisplayer';
import RegistrationForm from './components/registrationForm/RegistrationForm'
import Productdetailpage from './components/catagoriesDisplayer/productDetailPage';
import ModuleName from './conectivityAssets/modalBoxes/ModalBoxLogin.jsx'



function App() {

  // dataStrcture
  let gig = {
    gigOwnerName: 'SellerName',
    gigOwnerTier: 'top seller',
    gigImages: [],
    gigTitle: 'i will do something like that NFT',
    gigRate: 4,
    gigStartPrice: 1200,
    gigSubCatagory: 'companyDesign',
    gigLikedBy: [],
    gigDescription: 'discription of offer',
    deliveryDays: 5,
    orders: [],
  } 
   let gig2 = {
    gigOwnerName: 'SellerName',
    gigOwnerTier: 'top seller',
    gigImages: [],
    gigTitle: 'i will do something like that Word Press',
    gigRate: 4,
    gigStartPrice: 1200,
    gigSubCatagory: 'companyDesign',
    gigLikedBy: [],
    gigDescription: 'discription of offer design',
    deliveryDays: 5,
    orders: [],
  }

  let products = [
    ['Digital Marketing', [gig, gig, gig]],
    ['Graphics & Design', [gig, gig, gig2]],
    ['Writing & Translation', [gig, gig, gig]],
    ['Video & Animation', [gig2, gig, gig]],
    ['Music & Audio', [gig, gig, gig]],
    ['Programming & Tech', [gig2, gig, gig]],
    ['Business', [gig, gig, gig]],
    ['Lifestyle', [gig, gig, gig]],
    ['Trending', [gig, gig, gig]],
  ]

  // stateSection
  const [openLogin, setopenLogin] = useState(false)
  const [openSignUp, setopenSignUp] = useState(false)
  const [allProducts, setallProducts] = useState(products)
  const [allGigs, setallGigs] = useState(false)
  const [diplayProduct, setdiplayProduct] = useState(false)
  const [singleProductDetail, setsingleProductDetail] = useState(false)


  let allGigsArrayExtractor = []
  allProducts.forEach((mainCat) => {
    mainCat.forEach((subCat) => typeof (subCat) != typeof ("") ? allGigsArrayExtractor = [...allGigsArrayExtractor, ...subCat] : null)
  })




  // filter function
  const filterDataSet = (catagory, key = '') => {
    switch (catagory) {
      // main catagory filtration
      case 'main':
        allProducts.filter((singleCatagory, indx) => {
          if (singleCatagory[0] === key) {
            setdiplayProduct(allProducts[indx][1])
          }
        })
        break;
      // main catagory filtration
      case 'sub':
        // console.log(key);
        const filteredSubCatagoryArray = allGigsArrayExtractor.filter((gig) => ((gig.gigTitle).toLowerCase()).includes(key.toLowerCase()) || ((gig.gigDescription).toLowerCase()).includes(key.toLowerCase()) ? true : false)
         setdiplayProduct(filteredSubCatagoryArray)
        console.log(filteredSubCatagoryArray);
        break;
      // none case
    }
    // setdiplayProduct(toFilterDataSet)
  }



  return (
    <div>
      <Provider store={Store}>

        <BrowserRouter>
          <Login openLogin={openLogin} setopenLogin={setopenLogin} />
          <SignUp openSignUp={openSignUp} setopenSignUp={setopenSignUp} />
          <Box maxWidth={'xl'} margin='auto' mt={4} >
            <Routes>

              <Route exact path='/' element={
                <>
                  <Header
                    openLogin={openLogin}
                    setopenLogin={setopenLogin}
                    openSignUp={openSignUp}
                    setopenSignUp={setopenSignUp}
                  />
                  <Home filterDataSet={filterDataSet} />
                  <Footer />
                </>
              } />

              <Route exact path='/becomeSeller' element={
                <>
                  <Header
                    openLogin={openLogin}
                    setopenLogin={setopenLogin}
                    openSignUp={openSignUp}
                    setopenSignUp={setopenSignUp}
                  />
                  <BecomeSeller />
                  <Footer />
                </>
              } />

              <Route exact path='/catDisplayer' element={
                <>
                  <Header
                    openLogin={openLogin}
                    setopenLogin={setopenLogin}
                    openSignUp={openSignUp}
                    setopenSignUp={setopenSignUp}
                  />
                  <CatagoriesDisplayer diplayProduct={diplayProduct} setsingleProductDetail={setsingleProductDetail} />

                  <Footer />
                </>
              } />

              <Route exact path='/registration' element={
                <>
                  <Header
                    openLogin={openLogin}
                    setopenLogin={setopenLogin}
                    openSignUp={openSignUp}
                    setopenSignUp={setopenSignUp}
                  />
                  <RegistrationForm />
                  <Footer />
                </>
              } />

              <Route exact path='/detail' element={
                <>
                  <Header
                    openLogin={openLogin}
                    setopenLogin={setopenLogin}
                    openSignUp={openSignUp}
                    setopenSignUp={setopenSignUp}
                  />
                  <Productdetailpage {...singleProductDetail} />
                  <Footer />
                </>
              } />


              <Route exact path='/dashbord' element={<Dashbord test={'testing jugarr'} />} >
                <Route exact path='home' element={<DefaultHome />} />
                <Route exact path='profile' element={<Profile />} />
                <Route exact path='billing' element={<Billing />} />
              </Route>



            </Routes>
          </Box>
        </BrowserRouter>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          pauseOnHover
        />
      </Provider>
    </div>
  );
}

export default App;
