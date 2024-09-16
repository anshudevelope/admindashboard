import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Dashboard from './Pages/Dashboard/Index';
import Header from './Components/Header/Index';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Dashboard/>}/>
        <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
