import "./GameOver.css";

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game over</h1>
      <button onClick={retry}>Resetar</button>
    </div>
  )
}

export default GameOver;