

const Events = () => {
   const handleMyEvent = (e) => {
      console.log(e)
      console.log("yea");
   }


   const renderSomethinng = (x) => {
      if (x) {
         return <h1>Rendenizando isso!</h1>
      }else{
         return <h1>Também posso rendenizar isso aqui!@</h1>
      }
   }


   return(
      <div>
         <div>
            <div>
               <button onClick={handleMyEvent}>Click here</button>
            </div>
            <div>
               <button onClick={() => console.log("yea here to")}>Click here to</button><br />
               <button onClick={() => {
                  if(true){
                     console.log("Isso não deveria existir")
                  }
               }} >btn</button>
            </div>
            {renderSomethinng(true)}
            {renderSomethinng(false)}
         </div>
      </div>
   )
}

export default Events;