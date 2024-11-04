import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import AlinhamentoBalanceamento from "./components/AlinhamentoBalanceamento/AlinhamentoBalanceamento"
import Cadastrar from './components/Cadastrar/Cadastrar'
import ConfirmacaoAgendamento from './components/ConfirmacaoAgendamento/ConfirmacaoAgendamento'
import DiscosPastilhasFreios from "./components/DiscosPastilhasFreios/DiscosPastilhasFreios"
import Embreagem from "./components/Embreagem/Embreagem"
import FiltrosVelas from "./components/FiltrosVelas/FiltrosVelas"
import Login from './components/Login/Login'
import Pagamento from './components/PagamentoConteudo/Pagamento'
import Autores from './routes/Autores'
import ChatBot from './routes/ChatBot'
import Inicio from './routes/Inicio'
import PertoDeVoce from './routes/PertoDeVoce'
import Veiculo from './routes/Veiculo'

const routes = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Inicio /> },
      { path: "/autores", element: <Autores /> },
      { path: "/chatbot", element: <ChatBot /> },
      { path: "/veiculo", element: <Veiculo /> },
      { path: "/pagamento", element: <Pagamento /> },
      { path: "/pertodevoce", element: <PertoDeVoce /> },
      { path: "/problemas/alinhamento", element: <AlinhamentoBalanceamento /> },
      { path: "/problemas/freios", element: <DiscosPastilhasFreios /> },
      { path: "/problemas/embreagem", element: <Embreagem /> },
      { path: "/problemas/filtros-velas", element: <FiltrosVelas /> },
      { path: "/cadastrar", element: <Cadastrar /> },
      { path: "/login", element: <Login /> },
      { path: "/confirmacao-agendamento", element: <ConfirmacaoAgendamento /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)