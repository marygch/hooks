import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Row, Col, Slider } from 'antd';

// Default configurations
const style = { minHeight: "50px", background: "gray", color: "white", padding: "10px" };
const sizes = Object.assign({}, [200, 245, 252, 280, 242, 255]);
const rColors = Object.assign({}, [74, 28, 252, 16, 242, 255]);
const gColors = Object.assign({}, [28, 166, 186, 170, 48, 255]);
const bColors = Object.assign({}, [128, 65, 3, 181, 19, 255]);
const marks = {};

for (let i = 0; i < 6; i++) {
  marks[i] = `(${rColors[i]},${gColors[i]},${bColors[i]})`;
};

// auxiliar for getting a random color
const newDate = () => {
  return Math.floor(Math.random() * 255)
};


const UsingHooks = () => {
  const [mainColorKey, setMainColorKey] = useState(0);
  const [sizekey, setSizekey] = useState(0);
  const [leftColor, setLeftColor] = useState("blue");

  const mainColor = useMemo(
    () => {
      return `rgb(${rColors[mainColorKey]},${gColors[mainColorKey]},${bColors[mainColorKey]})`;
    },
    [mainColorKey]);

  const midColor = `rgb(${newDate()},${newDate()},${newDate()})`;

  const rigthColor = useMemo(
    () => {
      return `rgb(${newDate()},${newDate()},${newDate()})`;
    },
    [sizekey]);

  const changeLeftColor = useCallback(
    () => {
      setLeftColor(
        `rgb(${newDate()},${newDate()},${newDate()})`
      );
    },
    [mainColorKey]);

  useEffect(changeLeftColor, [mainColorKey]);

  return (
    <>
      <span>Update parent color</span>
      <div style={{ width: '50%', padding: "20px" }}>
        <Slider
          min={0}
          max={Object.keys({ ...rColors }).length - 1}
          value={mainColorKey}
          onChange={(e) => {
            setMainColorKey(e);
          }}
          marks={marks}
          tipFormatter={value => rColors[value]}
        />
      </div>
      <span>Update parent size</span>
      <div style={{ width: '50%', padding: "20px" }}>
        <Slider
          min={0}
          max={Object.keys({ ...sizes }).length - 1}
          value={sizekey}
          onChange={(e) => {
            setSizekey(e);
          }}
          marks={sizes}
          tipFormatter={value => sizes[value]}
        />
      </div>

      <Row justify="center">
        <Col style={{ maxWidth: sizes[sizekey], background: mainColor, color: "white", padding: "10px" }} span={18}>
          <div>{mainColor}</div>
          <div>Size: {sizes[sizekey]}</div>
        </Col>
      </Row>
      <Row gutter={[5, 5]}>
        <Col span={8} style={{ padding: "10px" }}>
          Use useCallback = {leftColor}
          <Row justify="center" gutter={[10, 10]}>
            <Col style={{ ...style, background: leftColor }} span={24} />
            <Col style={{ ...style, background: leftColor }} span={24} />
          </Row>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          Use any = {midColor}
          <Row justify="center" gutter={[10, 10]}>
            <Col style={{ ...style, background: midColor }} span={24} />
            <Col style={{ ...style, background: midColor }} span={24} />
          </Row>
        </Col>
        <Col span={8} style={{ padding: "10px" }}>
          Use useMemo = {rigthColor}
          <Row justify="center" gutter={[10, 10]}>
            <Col style={{ ...style, background: rigthColor }} span={24} />
            <Col style={{ ...style, background: rigthColor }} span={24} />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default UsingHooks;
