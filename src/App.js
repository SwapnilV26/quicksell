import { BoardContextProvider } from "./context/BoardContext";
import Home from "./pages/Home";

function App() {
  return (
    <BoardContextProvider>
        <Home />
    </BoardContextProvider>
  );
}

export default App;
