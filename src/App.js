import Header from "./components/Header";
import { BoardContextProvider } from "./context/BoardContext";
// import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <BoardContextProvider>
        <Header />
        <Layout />
    </BoardContextProvider>
  );
}

export default App;
