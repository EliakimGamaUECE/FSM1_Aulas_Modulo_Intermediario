import App from './App.jsx'

export default function EnviaDados() {

  let nome = "Eliakim"
  let idade = 34
  let telefone = "864555555"

  return (
    <>
    <App idade={idade} nome={nome} telefone={telefone} />
    </>
  )
}