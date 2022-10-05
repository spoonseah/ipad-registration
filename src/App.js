import './App.css';
import Theme from "./Theme";
import Header from "./Layouts/Header/Header";
import Help from "./Help";

import JoinNow from "./JoinNow";
import Otp from "./Otp";
import Form from "./Form";
import Welcome from "./Welcome";


function App() {
  return (
    <div style={Theme.globalStyle}>
      <Header />

      <JoinNow />
      {/* <Otp /> */}
      {/* <Form /> */}
      {/* <Welcome /> */}
    </div>
  );
}

export default App;