import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginCreatorSenha, loginCreatorEmail } from '../redux/actions/actionBotao';


class Header extends Component {
  validaEmail = (event) => {
    const { value } = event.target;
    const { dispatch } = this.props;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(value)) {
      dispatch(loginCreatorEmail());
    }   
  }

  validaSenha = (event) => {
    const { value } = event.target;
    const { dispatch } = this.props;
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
    if(regexSenha.test(value)) {
      dispatch(loginCreatorSenha());
    }    
  }
 
  render() {
    const { email, senha } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">
          <input type="email" id="email-input" onChange={this.validaEmail} placeholder="Digite um email válido"></input>          
        </label>
        <label htmlFor="senha-input">
          <input type="password" id="senha-input" onChange={this.validaSenha} placeholder="Digite a sua senha"></input>          
        </label>
        <p>A senha deve ter no mínimo 8 caracteres, sendo no mínimo 1 letra</p>
        <button type="submit" id="btn" disabled={(senha === true && email === true) ? null : 'disabled' }>Entrar</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  senha: state.senha,
});

export default connect(mapStateToProps)(Header);
