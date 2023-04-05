import React from 'react'

interface IProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addMessage: () => void
}

const input:React.FC<IProps> = ({todo, setTodo, addMessage}) => {
  return (
    <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="todo here" />
        <button onClick={addMessage}>Add</button>
    </div>
  )
}

export default input