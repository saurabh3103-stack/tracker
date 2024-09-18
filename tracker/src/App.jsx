import { useState } from 'react';
import '../public/css/main.min.css';
import '../public/vendor/overlay-scroll/OverlayScrollbars.min.css';
import '../public/vendor/toastify/toastify.css';
import '../public/fonts/icomoon/style.css';
import './App.css'
// import '../public/js/jquery.min.js';
// import '../public/js/bootstrap.bundle.min.js';
// import '../public/vendor/overlay-scroll/jquery.overlayScrollbars.min.js';
// import '../public/vendor/overlay-scroll/custom-scrollbar.js';
// import '../public/vendor/toastify/toastify.js';
// import '../public/vendor/toastify/custom.js';
// import '../public/vendor/apex/apexcharts.min.js';
// import '../public/vendor/apex/custom/home/incomeData.js';
// import '../public/vendor/apex/custom/home/usersData.js';
// import '../public/vendor/apex/custom/home/ordersData.js';
// import '../public/vendor/apex/custom/home/conversionData.js';
// import '../public/vendor/apex/custom/home/paymentsData.js';
// import '../public/vendor/apex/custom/home/sparklineData.js';
// import '../public/vendor/rating/raty.js';
// import '../public/vendor/rating/raty-custom.js';
// import '../public/js/custom.js';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Adduser from './Component/Adduser';




function App() {
  const [count, setCount] = useState(0)

  return (
    <> <BrowserRouter>
    <div class="page-wrapper">
      <div class="main-container">
      <Sidebar/>
        <div class="app-container">
        <Navbar/> 
          <Routes>
            <Route path='/Dashboard' element={<Dashboard></Dashboard>}>
            </Route>
            <Route path='/Adduser' element={<Adduser></Adduser>}>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
