import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";

import Home from "./pages/Home";
import Diet from "./pages/Diet";
import Exercise from "./pages/Exercise";
import Routine from "./pages/Routine";

function App() {

  return (
    <div className="App" data-testid = "App">
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/Diet" element={<Diet/>} />
          <Route path="/Exercise" element={<Exercise/>} />
          <Route path="/Routine" element={<Routine/>} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;