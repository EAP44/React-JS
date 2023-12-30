import Reducer from "../Config/reducer";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import CrudRedux from "./CrudRedux";

function ReduxCrud() {
  return (
    <>
      <Provider store={legacy_createStore(Reducer)}>
        <CrudRedux/>
      </Provider>
    </>
  );
}

export default ReduxCrud;