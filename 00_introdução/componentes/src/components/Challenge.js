
const Challenge = () => {
   const a = 15;
   const b = 7;
  return (
    <div>
    <p>A soma de <b>{a}</b> mais <b>{b}</b> é de</p>
    <button onClick={() => console.log(a + b)}>Click to discovery</button>
    </div>
  )
}

export default Challenge;