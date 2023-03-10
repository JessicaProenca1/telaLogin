import { senha, email } from '../actions/actionLogin';

// função reducer faz o mesmo trabalho que o setstate. O reducer modifica o state.

const INITIAL_STATE = {
  senha: false,
  email: false,

};
// por que o state inicial no navegador está como undefined? Quando aplico a action ele aparece normal (começou isso após o combineReducers)

const telaLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case senha:
      return {
        ...state,
        senha: true,
      };
    case email:
      return {
        ...state,
        email: true,
      };
    default:
      return state;
  }
}

export default telaLogin;