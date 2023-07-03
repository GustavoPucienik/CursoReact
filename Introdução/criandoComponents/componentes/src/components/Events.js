

const Events = () => {
   const handleMyEvent = () => {
      console.log("yea");
   }
   return(
      <div>
         <div>
            <div>
               <button onClick={handleMyEvent}>Click here</button>
            </div>
         </div>
      </div>
   )
}

export default Events;