import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" reed= "Havanese"/>
      <Pet name="Bird" animal="pepper" reed= "coctail"/>
      <Pet name="Cat" animal="doink" reed= "mixed"/>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);
