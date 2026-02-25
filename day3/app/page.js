'use client';
import { useState } from 'react';
import './page.css';

export default function Page() {
  // Level 1
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [showMsg, setShowMsg] = useState(false);
  const [color, setColor] = useState('red');
  const [likes, setLikes] = useState(0);

  // Level 2
  const [text, setText] = useState('');
  const [age, setAge] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(0);

  // Level 3
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [qty, setQty] = useState(0);
  const [dark, setDark] = useState(false);
  const [quizResult, setQuizResult] = useState('');
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div className={dark ? "container dark" : "container"}>
      <h1>React Practice Dashboard</h1>

      <div className="grid">

        <div className="card">
          <h3>Name Display</h3>
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
          <p>Hello, {name}</p>
        </div>

        <div className="card">
          <h3>Click Counter</h3>
          <button onClick={()=>setCount(count+1)}>Click</button>
          <p>{count}</p>
        </div>

        <div className="card">
          <h3>Show / Hide</h3>
          <button onClick={()=>setShowMsg(!showMsg)}>Toggle</button>
          {showMsg && <p>Welcome Participants!</p>}
        </div>

        <div className="card">
          <h3>Background Toggle</h3>
          <div className="color-box" style={{background: color}} />
          <button onClick={()=>setColor(color==='red'?'yellow':'red')}>
            Change Color
          </button>
        </div>

        <div className="card">
          <h3>Like Button</h3>
          <button onClick={()=>setLikes(likes+1)}>❤️</button>
          <p>{likes} Likes</p>
        </div>

        <div className="card">
          <h3>Character Counter</h3>
          <textarea onChange={(e)=>setText(e.target.value)} />
          <p>{text.length} characters</p>
        </div>

        <div className="card">
          <h3>Age Checker</h3>
          <input type="number" onChange={(e)=>setAge(e.target.value)} />
          {age && <p>{age>=18?'Adult':'Minor'}</p>}
        </div>

        <div className="card">
          <h3>Password Toggle</h3>
          <input type={showPassword?'text':'password'} />
          <button onClick={()=>setShowPassword(!showPassword)}>
            {showPassword?'Hide':'Show'}
          </button>
        </div>

        <div className="card">
          <h3>ON / OFF</h3>
          <button onClick={()=>setStatus(!status)}>Toggle</button>
          <p>{status?'ON':'OFF'}</p>
        </div>

        <div className="card">
          <h3>Reset Counter</h3>
          <div className="btn-group">
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>setCounter(counter-1)}>-</button>
            <button onClick={()=>setCounter(0)}>Reset</button>
          </div>
          <p>{counter}</p>
        </div>

        <div className="card">
          <h3>To-Do List</h3>
          <input value={task} onChange={(e)=>setTask(e.target.value)} />
          <button onClick={addTask}>Add</button>
          <ul>
            {tasks.map((t,i)=><li key={i}>{t}</li>)}
          </ul>
        </div>

        <div className="card">
          <h3>Cart Quantity</h3>
          <button onClick={()=>setQty(qty+1)}>+</button>
          <p>Quantity: {qty}</p>
        </div>

        <div className="card">
          <h3>Theme Toggle</h3>
          <button onClick={()=>setDark(!dark)}>
            {dark?'Light Mode':'Dark Mode'}
          </button>
        </div>

        <div className="card">
          <h3>Simple Quiz</h3>
          <p>React is a ___ ?</p>
          <button onClick={()=>setQuizResult('Wrong')}>Database</button>
          <button onClick={()=>setQuizResult('Correct')}>Library</button>
          <p>{quizResult}</p>
        </div>

        <div className="card">
          <h3>Multiple Counters</h3>
          <button onClick={()=>setC1(c1+1)}>Counter 1</button>
          <p>{c1}</p>
          <button onClick={()=>setC2(c2+1)}>Counter 2</button>
          <p>{c2}</p>
          <button onClick={()=>setC3(c3+1)}>Counter 3</button>
          <p>{c3}</p>
        </div>

      </div>
    </div>
  );
}