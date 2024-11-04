import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [validacaoEmail, setValidacaoEmail] = useState<boolean>(true);
    const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true);
    const [erroLogin, setErroLogin] = useState<boolean>(false);
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validarEmail = (): boolean => {
        const isValid = emailRegex.test(email);
        setValidacaoEmail(isValid);
        return isValid;
    };

    const validarSenha = (): boolean => {
        const isValid = senha.length >= 8;
        setValidacaoSenha(isValid);
        return isValid;
    };

    const handleLogin = () => {
        const emailValido = validarEmail();
        const senhaValida = validarSenha();

        if (emailValido && senhaValida) {
            const usuarioArmazenado = localStorage.getItem("usuario");

            if (usuarioArmazenado) {
                const usuario = JSON.parse(usuarioArmazenado);

                if (usuario.email === email && usuario.senha === senha) {
                    alert("Login realizado com sucesso!");
                    navigate("/veiculo");
                } else {
                    setErroLogin(true);
                }
            } else {
                setErroLogin(true);
            }
        }
    };

    return (
        <section className={styles.login}>
            <h1 className={styles.loginH1}>Login</h1>
            <div className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        className={`${styles.loginInput} ${!validacaoEmail ? styles.errorInput : ''}`}
                        placeholder="Digite seu email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {!validacaoEmail && <p className={styles.msgErro}>Email inválido</p>}
                </div>
                <div className={styles.formGroup}>
                    <label>Senha:</label>
                    <input 
                        type="password" 
                        className={`${styles.loginInput} ${!validacaoSenha ? styles.errorInput : ''}`}
                        placeholder="Digite sua senha" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    {!validacaoSenha && <p className={styles.msgErro}>A senha deve ter pelo menos 8 caracteres</p>}
                </div>
            </div>
            {erroLogin && <p className={styles.msgErro}>Email ou senha incorretos.</p>}
            <button onClick={handleLogin} className={styles.loginButton}>Conectar</button>
        </section>
    );
}
