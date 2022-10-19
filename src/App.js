import "./App.css";
import Theme from "./resources/theme/Theme";

import Welcome from "./screens/Welcome";
import JoinNow from "./screens/JoinNow";
import Otp from "./screens/Otp";
import RegistrationForm from "./screens/RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <div style={Theme.globalStyle}>
      {/* <Header /> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<JoinNow />}></Route>
          <Route exact path="/Welcome" element={<Welcome />}></Route>
          <Route exact path="/OTP" element={<Otp />}></Route>
          <Route
            exact
            path="/RegistrationForm"
            element={<RegistrationForm />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
