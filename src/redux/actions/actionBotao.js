export const senha = 'senha';
export const email = 'email';


export const loginCreatorSenha = (senha) => ({ 
  type: 'senha',
  senha,  
});

export const loginCreatorEmail = (email) => ({ 
  type: 'email',
  email,  
});
