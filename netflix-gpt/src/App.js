import "./App.css";
import Body from "./components/Body";
import AppStore from "./utils/ReduxStore";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={AppStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;
