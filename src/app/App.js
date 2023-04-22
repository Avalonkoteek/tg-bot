import React from "react";
import "./App.css";
import { useTelegram } from "../shared/hooks/use-telegram";

function App() {
  const { tg, user, onClose, onToggleButton } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, [tg]);

  console.log(user);

  // add string on next line with tg user name from tg object

  return (
    <div className="App">
      {user?.username}
      <button onClick={onClose}>Close</button>
      <button onClick={onToggleButton}>Toggle Button</button>
    </div>
  );
}

export default App;
