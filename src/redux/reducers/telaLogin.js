import { senha, email } from '../actions/actionBotao.js';

// função reducer faz o mesmo trabalho que o setstate. O reducer modifica o state.

const INITIAL_STATE = {
  senha: false,
  email: false,
};

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
      }
    default:
      return state;
  }
}

export default telaLogin;