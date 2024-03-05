import { useEffect, useState } from "react";
import Register from "./pages/Register";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://deployment-3w1h.onrender.com")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1>{message}</h1>
      <Register />
    </div>
  );
}

export default App;
