import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AppsPage from './pages/AppsPage.js';
import AppDetailPage from './pages/AppDetailPage.js';
import GamePage from './pages/GamePage.js';
import DiceRollersPage from './pages/DiceRollersPage.js';
import ButtonsPage from './pages/ButtonsPage.js';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCampsites } from './features/campsites/campsitesSlice.js';
// import { fetchPartners } from './features/partners/partnersSlice.js';
// import { fetchPromotions } from './features/promotions/promotionsSlice.js';
// import { fetchComments } from './features/comments/commentsSlice.js';

function App() {
    
    return (
      <div className="App">

        <Header />

        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/games' element={<GamePage />} />  
            <Route path='/games/simplebuttons' element={<ButtonsPage />} />   
            <Route path='/games/dicerollers' element={<DiceRollersPage />} />               
          <Route path='apps' element={<AppsPage />} />
          <Route path='apps/:appId' element={<AppDetailPage />} />
        </Routes>

        <Footer />

      </div>
    );
}

export default App;

// const dispatch = useDispatch();
    
//     useEffect( ()=>{
//       dispatch(fetchCampsites());
//       dispatch(fetchPartners());
//       dispatch(fetchPromotions());
//       dispatch(fetchComments());
//     }, [dispatch] );

