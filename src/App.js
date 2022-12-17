import "./App.css";
import Router from "./shared/Router";
import AlertModal from "./components/AlertModal/AlertModal";
import { useSelector } from "react-redux";

function App() {
  const { open } = useSelector((state) => state?.centerModal?.centerModal);

  return (
    <div className="App">
      <h1>여기는 앱이야</h1>
      {open && <AlertModal />}
      <Router />
    </div>
  );
}

export default App;
