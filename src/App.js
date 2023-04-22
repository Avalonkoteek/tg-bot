import React from "react";
import "./App.css";

// add comment on next line why window do not have Telegram
// window.Telegram = window.Telegram || {};
// window.Telegram.WebApp = window.Telegram.WebApp || {};
// window.Telegram.WebApp.init = window.Telegram.WebApp.init || function () {};
// window.Telegram.WebApp.close = window.Telegram.WebApp.close || function () {};
const tg = window.Telegram.WebApp;
// console.log(window.Telegram.WebApp);

function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
