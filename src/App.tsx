
import './App.css'
import { useState, ChangeEvent } from "react";
import { Task } from './interfaces';
import { Todo } from './components/todo';

export default function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task name"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <div className='task'>
          <button onClick={addTask}>Add Task</button>

        </div>
      </div>
      <table className="todoList">
        <thead>
          <tr>
            <th>
              Task title
            </th>
            <th>
              days to deadline
            </th>
            <th>
              Delete task
            </th>
          </tr>
        </thead>


        {todoList.map((task: Task, key: number) => {
          return <Todo key={key} task={task} completeTask={completeTask} />;
        })}

      </table>
    </div>
  )
}


