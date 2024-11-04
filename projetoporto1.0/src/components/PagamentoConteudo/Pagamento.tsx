import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pagamento.module.css";

export default function Pagamento() {
    const [metodoPagamento, setMetodoPagamento] = useState<string>("");
    const [parcelas, setParcelas] = useState<number>(1);
    const [numeroCartao, setNumeroCartao] = useState<string>("");
    const [vencimento, setVencimento] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");
    const [nomeTitular, setNomeTitular] = useState<string>("");
    const [cpfTitular, setCpfTitular] = useState<string>("");
    const navigate = useNavigate();

    const handlePagamento = () => {
        if (metodoPagamento === "credito" || metodoPagamento === "debito") {
            if (!numeroCartao || !vencimento || !cvv || !nomeTitular || !cpfTitular) {
                alert("Por favor, preencha todos os dados do cartão.");
                return;
            }
        }
        alert("Pagamento realizado com sucesso!");
        navigate("/"); 
    };

    return (
        <section className={styles.pagamento}>
            <h1>Pagamento</h1>

            <div className={styles.formGroup}>
                <label>Método de Pagamento:</label>
                <select
                    value={metodoPagamento}
                    onChange={(e) => setMetodoPagamento(e.target.value)}
                    className={styles.selectMetodo}
                >
                    <option value="">Selecione o método de pagamento</option>
                    <option value="pix">Pix</option>
                    <option value="debito">Cartão de Débito</option>
                    <option value="credito">Cartão de Crédito</option>
                </select>
            </div>

            {(metodoPagamento === "credito" || metodoPagamento === "debito") && (
                <div className={styles.cartaoInfo}>
                    <div className={styles.cartaoColuna}>
                        <label>Número do Cartão:</label>
                        <input
                            type="text"
                            value={numeroCartao}
                            onChange={(e) => setNumeroCartao(e.target.value)}
                            placeholder="Número do cartão"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.cartaoColuna}>
                        <label>Vencimento:</label>
                        <input
                            type="month"
                            value={vencimento}
                            onChange={(e) => setVencimento(e.target.value)}
                            placeholder="MM/AA"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.cartaoColuna}>
                        <label>CVV:</label>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="CVV"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.cartaoColuna}>
                        <label>Nome do Titular:</label>
                        <input
                            type="text"
                            value={nomeTitular}
                            onChange={(e) => setNomeTitular(e.target.value)}
                            placeholder="Nome do titular"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.cartaoColuna}>
                        <label>CPF do Titular:</label>
                        <input
                            type="text"
                            value={cpfTitular}
                            onChange={(e) => setCpfTitular(e.target.value)}
                            placeholder="CPF do titular"
                            className={styles.input}
                        />
                    </div>
                </div>
            )}

            {metodoPagamento === "credito" && (
                <div className={styles.formGroup}>
                    <label>Parcelamento:</label>
                    <select
                        value={parcelas}
                        onChange={(e) => setParcelas(parseInt(e.target.value))}
                        className={styles.selectParcelas}
                    >
                        {[...Array(12)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}x
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <button onClick={handlePagamento} className={styles.pagamentoButton}>
                Confirmar Pagamento
            </button>
        </section>
    );
}