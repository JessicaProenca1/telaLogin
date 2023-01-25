import { descricaoSalva, valorSalvo } from '../actions/actionSalvar';

// função reducer faz o mesmo trabalho que o setstate. O reducer modifica o state.

const INITIAL_STATE_Description = {
  descricaoSalva: '',
  valorSalvo: '',  
};
// por que o state inicial no navegador está como undefined? Quando aplico a action ele aparece normal (começou isso após o combineReducers)
const salvarReducer = (state = INITIAL_STATE_Description, action) => {
  switch (action.type) {
    case descricaoSalva:
      return {
        ...state,
        descricaoSalva: action.payload,
      };
      case valorSalvo:
        return {
          ...state,
          valorSalvo: action.payload,
        };
    default:
      return state;
  }
}

export default salvarReducer;