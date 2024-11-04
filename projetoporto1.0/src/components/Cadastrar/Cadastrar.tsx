import { useState } from "react";
import styles from "./Cadastrar.module.css";

export default function Cadastrar() {
    const [nome, setNome] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");

    const buscarCep = async () => {
        if (cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                if (data.erro) {
                    alert("CEP inválido");
                } else {
                    setRua(data.logradouro);
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                }
            } catch {
                alert("Erro ao buscar o CEP.");
            }
        }
    };

    const handleCadastro = () => {
        if (!nome || !dataNascimento || !cpf || !telefone || !email || !senha || !cep || !rua || !bairro || !cidade || !numero) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const usuario = {
            nome,
            dataNascimento,
            cpf,
            telefone,
            email,
            senha,
            endereco: { cep, rua, bairro, cidade, numero, complemento },
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Cadastro realizado com sucesso!");
    };

    return (
        <section className={styles.cadastro}>
            <h1>Cadastro de Usuário</h1>
            <div className={styles.formContainer}>
                <div className={styles.formSection}>
                    <div className={styles.formGroup}>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Data de Nascimento</label>
                        <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>CPF</label>
                        <input type="text" maxLength={11} value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Telefone</label>
                        <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Digite seu telefone" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Senha</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />
                    </div>
                </div>

                <div className={styles.formSection}>
                    <div className={styles.formGroup}>
                        <label>CEP</label>
                        <input type="text" maxLength={8} value={cep} onChange={(e) => setCep(e.target.value)} onBlur={buscarCep} placeholder="Digite seu CEP" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Rua</label>
                        <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} readOnly />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Bairro</label>
                        <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} readOnly />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Cidade</label>
                        <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} readOnly />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Número</label>
                        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="Número da residência" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Complemento (opcional)</label>
                        <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="Complemento" />
                    </div>
                </div>
            </div>
            <button className={styles.cadastroButton} onClick={handleCadastro}>Cadastrar</button>
        </section>
    );
}
