import counterReducer from "./reducer";
import ConnectedCounter from "./counter";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

function Redux() {
  return (
    <div className="App">
      <Provider store={legacy_createStore(counterReducer)}>
        <ConnectedCounter />
      </Provider>
    </div>
  );
}

export default Redux;