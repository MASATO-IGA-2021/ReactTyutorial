import { useState } from "react";
import './StateTodo.css';

let maxId = 0;
export default function StateTodo() {
  //入力値(title), ToDoリスト(todo)をStateで管理
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  const [desc, setDesc] = useState(true);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleTodo = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title: title,
        created: new Date(),
        isDone: false,
      }
    ]);
    console.log(todo);
  };
  const handleDone = (e) => {
    setTodo(todo.map(item =>{
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        };
      }else{
        return item;
      }
    })
  )
  }
  const handleRemove = (e) => {
    setTodo(todo.filter(item => (
      item.id !== Number(e.target.dataset.id)
    )))
  }
  const handleSort = () => {
    setDesc(!desc);
    if (desc) {
      setTodo(todo.sort((item1, item2) => (item1.created - item2.created)))
    } else {
      setTodo(todo.sort((item1, item2) => (item2.created - item1.created)))
    }
  }

  return (
    <div>
      <label>やること：
        <input type="text" name="title" value={title} onChange={handleTitle} />
      </label>
      <button type="button" onClick={handleTodo}>追加</button>
      <button type="button" onClick={handleSort} >ソート{desc? '↓': '↑'}</button>
      <ul>
        {todo.map(item => (
          <li key={item.id} className={item.isDone ? 'done': ''}>
            {item.title}
            <button type='button' onClick={handleDone} data-id={item.id}>完了</button>
            <button type='button' onClick={handleRemove} data-id={item.id}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
