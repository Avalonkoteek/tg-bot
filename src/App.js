import "./App.css";

const tg = window.Telegram.WebApp;

// add button with onClick component
const button = tg.add({
  type: "button",
  text: "Click me",
  onClick: () => {
    alert("Hello");
  },
});

function App() {
  React.useEffect(() => {
    tg.init();
  }, []);

  const onClose = () => {
    tg.close();
  };

  const onClickHandler = () => {};

  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
