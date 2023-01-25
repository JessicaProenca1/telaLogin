export const descricao = 'descricao';
export const valor = 'valor';

export const descricaoCreator = (descricao) => ({ 
  type: 'descricao',
  payload: descricao,  
});

export const valorCreator = (valor) => ({ 
  type: 'valor',
  payload: valor,  
});
