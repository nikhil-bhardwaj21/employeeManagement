import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LeftNavigationRouter from "./components/LeftNavigationRouter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* if no user is loggedin then render Login component else render naviagation */}
      <BrowserRouter>
        <LeftNavigationRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
