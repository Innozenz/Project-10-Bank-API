import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkLoggedInUser} from "./redux/authThunks";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Au chargement de l'application, vérifiez si l'utilisateur est déjà connecté
        dispatch(checkLoggedInUser());
    }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LoginForm/>
    </div>
  );
}

export default App;
