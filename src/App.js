import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasicExample from "./card";
import Parent1 from "./card1-parent";
import Parent2 from "./card2-parent";
import Parent3 from "./card3-parent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<BasicExample />} />
            <Route path="dentist" element={<Parent1 />} />
            <Route path="gynac" element={<Parent2 />} />
            <Route path="diet" element={<Parent3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
