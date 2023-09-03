import "./App.css";
import { Steps } from "./components/Steps/Steps";

function App() {
  return (
    <Steps steps={["step 1", "step 2", "step 3", "the very very long text"]} />
  );
}

export default App;
