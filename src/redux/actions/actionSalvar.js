export const descricaoSalva = 'descricaoSalva';
export const valorSalvo = 'valorSalvo';

export const salvarCreatorDescription = (descricaoSalva) => ({
  type: 'descricaoSalva',
  payload: descricaoSalva,
});

export const salvarCreatorValor = (valorSalvo) => ({
  type: 'valorSalvo',
  payload: valorSalvo,
});