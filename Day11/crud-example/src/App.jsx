import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Shared/Layout";
import AddFruit from "./Pages/AddFruit";
import AllFruits from "./Pages/AllFruits";
import UpdateFruit from "./Pages/UpdateFruit";
 
function App() {
  return (
    <Layout>
      <br></br>
      <Router>
      <Routes>
        <Route path="/"exact  Component={AllFruits}></Route>
        <Route path="/add-fruit" exact Component={AddFruit}></Route>
        <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>

      </Routes>
      </Router>
    </Layout>
  );
}
export default App;