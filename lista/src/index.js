import React from 'react';
import ReactDOM from 'react-dom';

class UsuariosContainer extends React.Component {
  constructor(){
    super();
    this.state = {
     usuarios: [],
     inputNome: "",
     inputEmail: ""
    };

    this.addUsuario = (ev) => {
      ev.preventDefault();
      const usuarios = this.state.usuarios.slice();
      usuarios.push(this.state.inputNome);
      this.setState({
        usuarios: usuarios,
        inputNome: ""
      });
      usuarios.push(this.state.inputEmail);
      this.setState({
        usuarios: usuarios,
        inputEmail: ""
      });
    };
  
    this.onChange = (ev) => {
      ev.preventDefault();
      const state = Object.assign({}, this.state);
      state[ev.target.name] = ev.target.value;
      this.setState(state);
    }
  }

  render(){
    return (
      <UsuariosView
        usuarios={this.state.usuarios}
        inputNome={this.state.inputNome}
        inputEmail={this.state.inputEmail}
        onChange={this.onChange}
        addUsuario={this.addUsuario}
      />
    );
  }
}

const UsuariosView = (props) => (
  <div>
  <h1>Lista de Usuarios</h1>
  <p>Nome:
  <input name = "inputNome" value={props.inputNome} onChange={props.onChange} />
  </p>
  <p>Email:
  <input name = "inputEmail" value={props.inputEmail} onChange={props.onChange} />
  </p>
  <button onClick={props.addUsuario}> Salvar </button>
    {
     props.usuarios.map((usuarios,index) => <li key={index}>{usuarios}</li>)
    }
  </div>
);

ReactDOM.render(
  <UsuariosContainer />,
  document.getElementById('root')
);