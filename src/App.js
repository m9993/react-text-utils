import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
      <>
      <Navbar/>
      <div className="container my-3 text-light">
        <Home/>
      </div>
      </>
  );
}

export default App;
