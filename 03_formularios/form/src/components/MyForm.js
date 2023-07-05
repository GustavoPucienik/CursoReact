import  "./MyForm.css";
import React from 'react';
import {useState} from "react";

const MyForm = ({user}) => {
      // 6 - controlled inputs
   //Gerenciamento de dados
   const [name, setName] = useState(user ? user.name : "");
   const [email, setEmail] = useState(user ? user.email : "");

   const [bio, setBio] = useState(user ? user.bio : "");

   const [role, setRole] = useState(user ? user.role :"");

   const handleName = (e) => {
      setName(e.target.value);
   }
   //console.log(name);
   //console.log(email);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Enviando o formulario!");
      console.log(`name: ${name}`);
      console.log(`email: ${email}`);
      console.log(`bio: ${bio}`);
      console.log(`role: ${role}`);

      // 7 - limpar formulario
      setName("");
      setEmail("");
      setBio("");
      setRole("")

   };

  return (
    <div>
    {/* 5 - envio de formulario */}
      {/* 1 - Criação de formulario */}
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome." onChange={handleName} value={name}/>
         </div>
         {/* 2 - label envolvendo input */}
         <label htmlFor="">
            <span>Email</span>
            {/* 4 - Simplificação de manipulação*/}
            <input type="email" name="email" placeholder="Digite o seu email." onChange={ 
               (e) => setEmail(e.target.value) } value={email} />
         </label>
         {/* 8 - Textarea */}
         <label>
            <span>Bio:</span>
            <textarea name="bio" cols="30" rows="10" placeholder="Descrição do usuário"
             onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
         </label>
         {/* 9 - Select */}
         <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
               <option value="user">Usuario</option>
               <option value="editor">Editor</option>
               <option value="admin">Administrador</option>
            </select>
         </label>
         <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm