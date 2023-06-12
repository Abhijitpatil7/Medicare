
import './App.css';
import AddDisease from './components/disease/AddDisease';
import ShowDisease from './components/disease/ShowDisease';
import Home from './components/home/Home';
import Register from './components/register/Register';
import AddReminder from './components/reminder/AddReminder';
import ShowReminder from './components/reminder/ShowReminder';
import SignIn from './components/signIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<SignIn/>}></Route>
        <Route exact path="/register/" element={<Register/>}></Route>
        <Route exact path="/home/:id" element={<Home/>}></Route>
        <Route exact path="/addreminder/:id" element={<AddReminder/>}></Route>
        <Route exact path="/addissues/:id" element={<AddDisease/>}></Route>
        <Route exact path="/showhealthissues/:id" element={<ShowDisease/>}></Route>
        <Route exact path="/showreminders/:id" element={<ShowReminder/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
