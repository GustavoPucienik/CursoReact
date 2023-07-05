import  "./MyForm.css";
import React from 'react'

const MyForm = () => {
  return (
    <div>
      {/* 1 - Criação de formulario */}
      <form action="">
         <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome." id="" />
         </div>
         {/* 2 - label envolvendo input */}
         <label htmlFor="">
            <span>Email</span>
            <input type="email" name="email" placeholder="Digite o seu email." id="" />
         </label>
         <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm