import { Navbar } from "./Components/Navbar/Navbar";
import { Education } from "./Pages/Education";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar></Navbar>
        <Home></Home>
        <Skills></Skills>
        <Education></Education>
        <p>Vengehub</p>
      </div>
    </>
  );
}

export default App;
