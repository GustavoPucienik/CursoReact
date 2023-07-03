   const TemplateExpression = () => {
      const name = "Gustavo";
      const data = {
         age: 31,
         job: "Programmer"
      }

      return (
         <div>
            <h1>Hi {name}</h1>
            <p>You are {data.job}</p>
         </div>
      )
}

export default TemplateExpression;