import React from "react";
import { Card, Button } from "antd-mobile";
import { AntOutline, RightOutline } from "antd-mobile-icons";

export const TricountPage = () => {
  return (
    <Card
      title={
        <div style={{ fontWeight: "normal" }}>
          <AntOutline style={{ marginRight: "4px", color: "#1677ff" }} />
          diman tricount
        </div>
      }
      extra={<RightOutline />}
      onBodyClick={() => {
        console.log("body clicked");
      }}
      onHeaderClick={() => {
        console.log("header clicked");
      }}
    >
      description
    </Card>
  );
};
