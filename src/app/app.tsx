import React, { useState } from "react";
import { Button, ErrorBlock, ConfigProvider } from "antd-mobile";
import enUS from "antd-mobile/es/locales/en-US";
import { TricountPage } from "../pages/tricount/index";

// add omponents to the global scope

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <ConfigProvider locale={enUS}>
        <ErrorBlock status="disconnected" />
        <TricountPage />
        <h1>Hello, World!</h1>
        <p>Count: {count}</p>
        <Button color="primary" fill="solid" onClick={handleClick}>
          Click me!
        </Button>
      </ConfigProvider>
    </div>
  );
};
