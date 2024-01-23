import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import Product from "./components/Product";
import DashBoard from "./components/DashBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>
  )
}

export default App

