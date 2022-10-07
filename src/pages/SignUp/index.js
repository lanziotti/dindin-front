import './styles.css';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function SignUp() {

  return (
    <div className='container-sign-up'>
      <img src={Logo} alt="Logo" className='logo' />

      <div className='content-sign-up'>
        <form>
          <h2>Cadastre-se</h2>

          <div className='container-inputs'>
            <label htmlFor='name'>Nome</label>
            <input type="text" name="name" />
          </div>

          <div className='container-inputs'>
            <label htmlFor='email'>E-mail</label>
            <input type="text" name="email" />
          </div>

          <div className='container-inputs'>
            <label htmlFor='password'>Senha</label>
            <input type="password" name="password" />
          </div>

          <div className='container-inputs'>
            <label htmlFor='confirm-password'>Confirmação de senha</label>
            <input type="password" name="confirm-password" />
          </div>

          <button className='btn-purple btn-big'>
            Cadastrar
          </button>

          <Link to="/">Já tem cadastro? Clique aqui!</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
