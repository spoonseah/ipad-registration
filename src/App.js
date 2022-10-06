import "./App.css";
import Header from "./components/Header";
import Theme from "./resources/theme/Theme";

import JoinNow from "./screens/JoinNow";
import Otp from "./screens/Otp";
import Form from "./screens/Form";
import Welcome from "./screens/Welcome";

function App() {
  return (
    <div style={Theme.globalStyle}>
      <Header />

      {/* <JoinNow /> */}
      {/* <Otp /> */}
      <Form />
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
