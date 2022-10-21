import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import HowToUse from './components/how-to-use/how-to-use';
import SiegeData from './components/siege-datas/siege-data';
import Logo from "./assets/images/logotest.png";
import Home from './components/home/home';

function App() {
	return (
		<div className="App">
			<div className="Logo">
				<img src={Logo} alt="Logo.jpg" />
			</div>
			<div className="Header">
				<NavBar />
			</div>
			<div className="Body">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/how-to-use" element={<HowToUse />} />
					<Route path="/siege-datas" element={<SiegeData />} />
					<Route path="*" element={<Navigate to="/home" />} />
				</Routes>
			</div>
			<div className="Footer">
				<p>SWSD 2022 @</p>
			</div>
		</div>
	);
}

export default App;
