import "./App.css";
import Header from "./components/Header";
import Theme from "./resources/theme/Theme";
import JoinNow from "./screens/Form";

function App() {
  return (
    <div style={Theme.globalStyle}>
      {/* <Header /> */}

      <JoinNow />
      {/* <Form /> */}
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
