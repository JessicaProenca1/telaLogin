import { descricao, valor } from '../actions/actionDespesas';

// função reducer faz o mesmo trabalho que o setstate. O reducer modifica o state.

const INITIAL_STATE = {
  descricao: '',
  valor: '',
};
// por que o state inicial no navegador está como undefined? Quando aplico a action ele aparece normal (começou isso após o combineReducers)
const despesasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case descricao:
      return {
        ...state,
        descricao: action.payload,
      };
    case valor:
      return {
        ...state,
        valor: action.payload,
      };
    default:
      return state;
  }
}

export default despesasReducer;