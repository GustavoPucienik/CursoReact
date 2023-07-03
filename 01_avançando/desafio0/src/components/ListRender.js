import { useState } from "react";

const ListRender = () => {
   const [list] = useState(["Gustavo", "Pedro", "Maria", "Lorena"]);

   const [users, setUsers] = useState([
      {id: 1, name: "Gustavo", age: 21},
      {id: 2, name: "Lorena", age: 17},
      {id: 3, name: "Mateus", age: 20}
   ])

   const deleteRamdom = () => {
      const ramdomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUser) => {
         console.log(users)
         return prevUser.filter((user) => ramdomNumber !== user.id)

      })
   }

  return (
    <div>
      <ul>
         {list.map((item, i) => (
            <li key={i}>{item}</li>
         ))}
      </ul>
      <h1>Users</h1>
      <ul>
         {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
         ))}
      </ul>
      <button onClick={deleteRamdom}>Delete ramdom user</button>
    </div>
  )
}

export default ListRender