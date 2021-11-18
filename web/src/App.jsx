import React from "react"
import BatingScreen from "./Components/BatingScreen";
import Form from "./Screen/Form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>

      <Routes>
        <Route  path="/" element={ <BatingScreen />}>
       
        </Route>
        <Route path="/adminpanel" element={<Form />}>
          
        </Route>
        </Routes>


    {/* <BatingScreen /> */}
    {/* <Form /> */}
    </div>
  );
}

export default App;
