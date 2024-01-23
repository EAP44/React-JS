import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import Browser from "./Browser";
import Reducer from "../Config/Reducer";

function MyApp (){
    return(
        <Provider store={legacy_createStore(Reducer)}>
            <Browser/>
        </Provider>
    );
};
export default MyApp;