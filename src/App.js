import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Invest from './components/Invest';
import Wallet from './components/Wallet';
import Support from './components/Support';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>

        <Routes>
          <Route exact index path='/' element={<Home />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/invest' element={<Invest />}> </Route>
          <Route path='/wallet' element={<Wallet />}></Route>
          <Route path='/support' element={<Support />}></Route>
        </Routes>
      </BrowserRouter>






    </>
  );
}

export default App;
