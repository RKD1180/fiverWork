import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componnent/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<><h2>Page Not found 404!</h2></>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
