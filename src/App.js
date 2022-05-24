import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChartPage from "./ChartPage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/chartPage" element={ <ChartPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;