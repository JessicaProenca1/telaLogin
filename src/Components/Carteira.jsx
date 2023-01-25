import React, { Component } from 'react'
import { connect } from 'react-redux';
import { descricaoCreator, valorCreator } from '../redux/actions/actionDespesas';
import { salvarCreatorDescription, salvarCreatorValor } from '../redux/actions/actionSalvar';

class Carteira extends Component {
  salvarDescricao = (event) => {
    const { descricao, dispatch } = this.props;
    dispatch(salvarCreatorDescription(descricao))
  }

  salvarValor = (event) => {
    const { valor, dispatch } = this.props;
    dispatch(salvarCreatorValor(valor))
  }

  salvar = (event) => {
    event.preventDefault();
    this.salvarDescricao();
    this.salvarValor();
  }

  mudaDescricao = (event) => {
    const { value } = event.target;
    const { dispatch } = this.props;
    dispatch(descricaoCreator(value))
  }

  mudaValor = (event) => {
    const { value } = event.target;
    const { dispatch } = this.props;
    const valorFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
    // linha acima para transformar o numero escrito em formado moeda R$ 0.000,00
    dispatch(valorCreator(valorFormatado))
  }

  render() {
    const { descricaoSalva, valorSalvo } = this.props
    // para aparecer a data de hoje como default no input
    const date = new Date();
    const dateNew = date.setDate(date.getDate());
    const defaultValue = new Date(dateNew).toISOString().split("T")[0];
    // para aparecer a data de hoje como default no input

    return (
      <div>
        <form>
          <input type="date" defaultValue={defaultValue} />
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" onChange={this.mudaValor} placeholder='Digite o valor' />
            <select name="valor" size="Number_of_options">
              <option> List item 1 </option>
              <option> List item 2 </option>
              <option> List item 3 </option>
              <option> List item N </option>
            </select>
          </label>
          <label htmlFor="pg">
            Forma de Pagamento
            <select name="pg" size="Number_of_options">
              <option> Dinheiro </option>
              <option> Débito </option>
              <option> Crédito</option>
              <option> Pix</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Forma de Pagamento
            <select name="categoria" size="Number_of_category">
              <option> Alimentação </option>
              <option> Lazer </option>
              <option> Transporte</option>
              <option> Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Valor
            <input type="text" name="descricao" onChange={this.mudaDescricao} placeholder='Digite a descrição da despesa' />
          </label>
          <button onClick={this.salvar}>Salvar Despesa</button>
        </form>
        <section>
          <h2>Tabela de Despesas</h2>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Pagamento</th>
                <th>Moeda</th>
                <th>Câmbio</th>
                <th>Valor Convertido</th>
                <th>Moeda de Conversão</th>
                <th>Tag</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>{descricaoSalva}</td>
                <td>{valorSalvo}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  descricao: state.despesasReducer.descricao,
  valor: state.despesasReducer.valor,
  descricaoSalva: state.salvarReducer.descricaoSalva,
  valorSalvo: state.salvarReducer.valorSalvo,

});

export default connect(mapStateToProps)(Carteira);