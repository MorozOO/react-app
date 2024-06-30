import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TodoList from "../components/todo/Todo-list";
import First from "../components/first/First";
import MagicBall from "../components/MagicBall/MagicBall";
import Home from "../components/HomePage/home";
import Game from "../components/puzzle/Game";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Page Not Found</h1>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path: "todo",
          element: <TodoList />
        },
        {
          path: "first",
          element: <First />
        },
        {
          path: "ball",
          element: <MagicBall />
        },
        {
          path: "puzlle",
          element: <Game />
        },
       

      ]
    }
  
  ]);