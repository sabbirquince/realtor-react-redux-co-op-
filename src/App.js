import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Navigation from "./Components/Shared/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Homepage />
    </div>
  );
}

export default App;
