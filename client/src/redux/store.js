import {applyMiddleware,  legacy_createStore as createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(thunk)));
    //applyMiddleware(thunk));


export default store;