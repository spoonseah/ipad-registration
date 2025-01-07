import "./App.css";
import Theme from "./resources/theme/Theme";

import Welcome from "./screens/Welcome";
import JoinNow from "./screens/JoinNow";
import Otp from "./screens/Otp";
import RegistrationForm from "./screens/RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  const getBasename = path => path.substr(0, path.lastIndexOf('/'));
  
  return (
    <div style={Theme.globalStyle}>
      {/* <Header /> */}
      <BrowserRouter basename="/register">
        <Routes>
          <Route exact path="/" element={<JoinNow />}></Route>
          <Route path="/OTP" element={<Otp />}></Route>
          <Route
            path="/RegistrationForm"
            element={<RegistrationForm />}
          ></Route>
          <Route path="/Welcome" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
