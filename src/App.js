import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Dashboard from './Pages/Dashboard/Index';
import Header from './Components/Header/Index';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main d-flex'>
        <div className='sidebarwrapper'>
          <Sidebar />
        </div>

        <div className='contentwrapper'>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
