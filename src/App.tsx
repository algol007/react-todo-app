import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(["Hello", "World"]);
  const [activity, setActivity] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const addActivity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([activity, ...todos]);
    setActivity("");
  };

  const removeActivity = (selected: string) => {
    const newTodos = todos.filter((todos) => todos !== selected);
    setTodos(newTodos);
  };

  const doneActivity = (selected: string) => {
    console.log(selected);
    const selectedTodo = todos.find((todos) => todos === selected);
    document
      .querySelector(`.todo-${selectedTodo}`)
      ?.classList.toggle("line-through");
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen dark:bg-gray-800 dark:text-white">
        <div className="mb-12 bg-green-500">
          <div className="container mx-auto py-4 px-4 flex justify-between">
            <div className="text-sm mr-2">Dark Mode</div>
            <label className="switch">
              <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto text-center flex flex-col px-4">
          <h1 className="mb-8 text-3xl font-bold">Todo App</h1>
          <form className="mb-12" onSubmit={addActivity}>
            <input
              type="text"
              className="border py-2 px-4 w-full text-black"
              placeholder="What's your plan?"
              onChange={(e) => setActivity(e.target.value)}
              value={activity}
            />
          </form>
          <h3 className="mb-6">Your Plans :</h3>
          <ul>
            {todos &&
              todos.map((todo, idx) => (
                <li
                  className="border mb-4 py-2 pl-4 pr-2 flex justify-between items-center"
                  key={idx}
                >
                  <div className={`todo-${todo}`}>{todo}</div>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => doneActivity(todo)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => removeActivity(todo)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
