import './App.css';
import Theme from "./Theme";
import Header from "./Header";
import JoinNow from "./JoinNow";

function App() {
  return (
    <div style={Theme.globalStyle}>
      <Header />
      <JoinNow />
    </div>
  );
}

export default App;