
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Single from './Single'; 

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Route>
    <Routes path='' element={<Home></Home>}> </Routes>
      <Routes path='ResturentView/:id' element={<Single ></Single>}></Routes>
    </Route>
      <Footer></Footer>
    </div>
  );
}

export default App;
