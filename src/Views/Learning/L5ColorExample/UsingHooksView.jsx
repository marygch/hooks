import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Row, Col, Slider } from 'antd';

const rColors = {};
const gColors = {};
const bColors = {};
const marks = {};

[74, 28, 252, 16, 242, 255].forEach((value, i) => {
  rColors[i] = value;
});
[28, 166, 186, 170, 48, 255].forEach((value, i) => {
  gColors[i] = value;
});
[128, 65, 3, 181, 19, 255].forEach((value, i) => {
  bColors[i] = value;
});

for (let i = 0; i < 6; i++) {
  marks[i] = `(${rColors[i]},${gColors[i]},${bColors[i]})`;
};

const style = { minHeight: "50px", background: "gray", color: "white", padding: "10px" };

const newDate = () => {
  return Math.floor(Math.random() * 255)
};

const UsingHooks = () => {
  const [rColorKey, setRColorKey] = useState(0);
  const [sizekey, setSizekey] = useState(0);
  const [childColor, setChildColor] = useState("blue");

  const mainColor = useMemo(
    () => {
      return `rgb(${rColors[rColorKey]},${gColors[rColorKey]},${bColors[rColorKey]})`;
    },
    [rColorKey]);

  const rigthColor = useMemo(
    () => {
      return `rgb(${newDate()},${newDate()},${newDate()})`;
    },
    [sizekey]);

  const changeMyColor = useCallback(() => {
    setChildColor(
      `rgb(${newDate()},${newDate()},${newDate()})`
    );
  }, [rColorKey]);

  useEffect(changeMyColor, [rColorKey]);

  return (
    <>
      <span>Update parent color</span>
      <div style={{ width: '50%', padding: "20px" }}>
        <Slider
          min={0}
          max={Object.keys({ ...rColors }).length - 1}
          value={rColorKey}
          onChange={(e) => {
            setRColorKey(e);
          }}
          marks={marks}
          tipFormatter={value => rColors[value]}
        />
      </div>
      <span>Update parent size</span>
      <div style={{ width: '50%', padding: "20px" }}>
        <Slider
          min={0}
          max={Object.keys({ ...rColors }).length - 1}
          value={sizekey}
          onChange={(e) => {
            setSizekey(e);
          }}
          marks={rColors}
          tipFormatter={value => rColors[value]}
        />
      </div>

      <Row justify="center">
        <Col style={{ minHeight: rColors[sizekey], background: mainColor, color: "white", padding: "10px" }} span={12}>
          <div>{mainColor}</div>
          <div>Size: {rColors[sizekey]}</div>
        </Col>
      </Row>
      <Row gutter={[5, 5]}>
        <Col span={12} style={{ padding: "10px" }}>
          Use useCallback = {childColor}
          <Row justify="center" gutter={[10, 10]}>
            <Col style={{ ...style, background: childColor }} span={24} />
            <Col style={{ ...style, background: childColor }} span={24} />
          </Row>
        </Col>
        <Col span={12} style={{ padding: "10px" }}>
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
