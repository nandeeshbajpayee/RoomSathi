// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import PopularCities from './components/PopularCities';
import Go from './components/Go';
import ResultPage from './components/ResultPage';
import UsersProfile from './components/UsersProfile';
import AddRoom from './components/AddRoom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Nav />
              <HeroSection />
              <PopularCities />
              <Footer />
            </>
          } />
          <Route path='/login' element={
            <>
              <Login />
            </>
          } />
          <Route path='/profile' element={
            <>
              <Nav />
              <Go />
              <Footer />
            </>
          } />
          <Route path='/result' element={
            <>
              <Nav />
              <ResultPage />
              <Footer />
            </>
          } />
          <Route path='/Userprofile' element={
            <>
              <UsersProfile />
            </>
          } />
          <Route path='/addroom' element={
            <AddRoom />
          } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
