import React, { useContext } from 'react';

import { AppContext } from '../App';

const Context = () => {

   const details = useContext(AppContext);

  return (
    <>
         <h1>Context.tsx</h1>
         {details && (
            <div>
               <h2>Linguagem: {details.language}</h2>
               <h3>Framework: {details.framework}</h3>
               <h4>Projects: {details.projects}</h4>
            </div>
         )}
         <hr />
    </>
  )
}

export default Context