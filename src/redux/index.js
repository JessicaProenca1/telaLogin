import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import telaLogin from './reducers/telaLogin';

const store = createStore(telaLogin, composeWithDevTools(applyMiddleware(thunk)));

export default store;