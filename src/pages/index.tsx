import React, { useState } from 'react'

const IndexPage = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [listTodos, setListTodos] = useState<Array<string>>([])
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const addTodo = () => {
    const newList = [...listTodos, inputValue]
    setListTodos(newList)
  }

  const deleteTodo = (i: number) => (e: any) => {
    const newList = [...listTodos]
    delete newList[i]
    setListTodos(!newList[0] ? [] : newList)
  }

  return (
    <>
      inputState:
      <input name="first Input" onChange={onChangeInput} value={inputValue} />
      <button onClick={addTodo} name="button">
        Click me
      </button>
      <ul>
        {listTodos.map((todo: string, i: number) => (
          <div key={i}>
            <li>{todo}</li>
            <button name="delete" onClick={deleteTodo(i)}>
              Delete me!
            </button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default IndexPage
