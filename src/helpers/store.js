import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from '../client/reducers'
import setAuthToken from "../client/utils/setAuthToken";

export default () => {
    const store = createStore(reducers, {},applyMiddleware(thunk));


    return store;
}

