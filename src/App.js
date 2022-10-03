import './App.css';
import Theme from "./Theme";
import Header from "./Header";
import Help from "./Help";

import JoinNow from "./JoinNow";
import Otp from "./Otp";
import Form from "./Form";


function App() {
  return (
    <div style={Theme.globalStyle}>
      <Header />

      {/* Pages */}
      {/* <JoinNow /> */}
      {/* <Otp /> */}
      <Form />
      {/* End Pages */}

      <Help />
    </div>
  );
}

export default App;