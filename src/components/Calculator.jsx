import React from "react";
import Button from "./Button";

export default function Calculator() {
  const buttonsBottomLeft = [
    "0",
    "00",
    ".",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const buttonsBottomRight = ["+", "-", "*", "/", "=", "MU", "%", ">"];
  const buttonsMiddle = ["M+", "M-", "MRC", "GT", "CE"];
  const buttonsTop = ["ON/AC"];

  function getButtons(buttons) {
    return buttons.map((button, key) => <Button key={key} title={button} />);
  }

  return (
    <>
      <div id="calculator">
        <div id="screen"></div>
        <div id="buttons">
          <div id="top">{getButtons(buttonsTop)}</div>
          <div id="middle">{getButtons(buttonsMiddle)}</div>
          <div id="bottom">
            <div id="bottom-left">{getButtons(buttonsBottomLeft)}</div>
            <div id="bottom-right">{getButtons(buttonsBottomRight)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
