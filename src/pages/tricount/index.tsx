import React from "react";
import { Collapse } from "antd-mobile";

export const TricountPage = () => {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Collapse.Panel key="1" title="aaaaaaaaaa">
        asdasdasdasd
      </Collapse.Panel>
      <Collapse.Panel key="2" title="bbbbbbbbb">
        sdfsdfsdfsdf
      </Collapse.Panel>
      <Collapse.Panel key="3" title="cccccc">
        asdasdasdasdads
      </Collapse.Panel>
    </Collapse>
  );
};
