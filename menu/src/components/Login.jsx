import './Login.css';
import { TextInputMask } from 'react-native-masked-text';
import { useState } from 'react';

const Login = () => {
    const [cell, setCell] = useState('');

  return (
    <div className='container'>
        <div className='box-login'>

        
        <div className='wrap-welcome'>
           <span className='bem-vindo'> <p>  Bem-vindo, </p> Que bom ver você! </span> 
        </div>
        
        <div className='wrap-login'>
            <form className="login-form"> 
            <div className='input-name'> 
            <span className='span-dados'> Nome Completo </span>
            <input className='name' type="text" placeholder='Insira seu nome' required="true"/>
            </div>

            <div className='input-cpf'>
            <span className='span-dados'> CPF </span>
            <TextInputMask style={StyleSheet.input} type={'cpf'} value={cpf} onChangeText={text => setCpf(text)}/>
            <input className='cpf' type="number" placeholder='000.000.000-00' required="true" />
            </div>

            <div className='lembrar-me'> 
            <input className='remember-me' type="checkbox" /> <span className='remember'> Lembre de mim </span>
            <div className='wrap-login-btn'> </div>
            <button className='login-btn'> Entrar </button>
            </div>
            </form>
            </div>
        </div>
            
    </div>
  )
}

export default Login