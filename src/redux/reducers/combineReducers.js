import { combineReducers } from 'redux';
import telaLogin from './telaLogin';  
import despesasReducer from './despesasReducer';
import salvarReducer from './salvarReducer';


const rootReducer = combineReducers({ telaLogin, despesasReducer, salvarReducer });

export default rootReducer;