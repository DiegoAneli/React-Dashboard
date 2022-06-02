import "./App.css";
import { Routes, Route,} from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Login from "./components/login";
//import ProtectedRoutes from "./ProtectedRoutes";

//DA SISTEMARE LE PAGINE IN PRIVATE PRE LOGIN E VISIBILI POST LOGIN

require("es6-promise").polyfill();
require("isomorphic-fetch");


function App() {

  return (
    <div className="App">

    <Navbar />
    <Routes>
    
        <Route exact path="/" element={<Login />}/>
        
          <Route path="/tabella" element={<Home />} />
          <Route path="/report" element={<Dashboard />} />
        
    </Routes>
    </div>
  );
}
export default App;