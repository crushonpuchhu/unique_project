import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Statistics from './pages/statics/Statistics';
import Overview from './pages/overview/Overview';
import Dashboadrd from './pages/dashboadrd/Dashboadrd';
import Analytics from './pages/analytics/Analytics';

function App() {

  return (
    <div className="App">

      <Navbar />

      <div id='rout-section-123'>

        <Routes>

          <Route path="/Statistics" element={<Statistics/>} />
          <Route path="/" element={<Overview/>} />
          <Route path="/Overview" element={<Overview/>} />
          <Route path="/Dashboadrd" element={<Dashboadrd/>} />
          <Route path="/Analytics" element={<Analytics />} />

        </Routes>

      </div>


      <div id='footer-123'>
        <p>ORION DATA VISUALISATION</p>
        <p>2023</p>
      </div>


    </div>
  );

}

export default App;
