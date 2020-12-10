import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from './redux/Store'
function App() {
  return (
    <Provider store ={store} >
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
