import { useReducer, useState } from "react";

const HookUseReducer = () => {
   // 1 - useReducer
   const [number, dispatch] = useReducer((state, action) => {
      return Math.random(state);
   })

   // 2 -
   const initialTasks = [
      {id: 1, text: "Fazer alguma coisa"},
      {id: 2, text: "Fazer outra coisa"}
   ];

   const taskReducer = (state, action) => {
         switch (action.type) {
            case "ADD":
               const newTask = {
                  id: Math.random(),
                  text: taskText,
               }
               setTaskText("")

               return [...state, newTask]
         
            case "DELETE":
               return state.filter((task) => task.id !== action.id);

            default:
               return state;
         }
   }

   const [taskText, setTaskText] = useState("");
   const [task, dispatchTasks] = useReducer(taskReducer, initialTasks);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatchTasks({ type: "ADD" });
   }

   const removeTask = (id) => {
      dispatchTasks({type: "DELETE", id:id});
   }

  return (
    <div>
      <h2>useReducer</h2>
      <p>Numero: {number}</p>
      <button onClick={dispatch}>Alterar número!</button>

      <h3>Tarefas: </h3>
      <form onSubmit={handleSubmit} >
         <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
         <input type="submit" value='Enviar'/>
      </form>
      {task.map((task) => (
         <li key={task.id} onDoubleClick={ () => removeTask(task.id)}>{task.text}</li>
      ))}
      <hr />
    </div>
  )
}

export default HookUseReducer