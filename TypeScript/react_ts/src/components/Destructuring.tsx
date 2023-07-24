import React from 'react'

interface Props {
   title: string,
   content: string,
   commentsQty: number,
   tags: string[],
   category: Category
}

export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P  = "Python"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
      <h1>Destructuring</h1>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentarios: {commentsQty}</p>
      <div>
         {tags.map(tag => (
            <span>#{tag}</span>
         ))}
        <h3>Categoria: {category}</h3>
      </div>
    <hr />
    </div>
  )
}

export default Destructuring