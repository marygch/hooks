const code = `
const UsingHooks = () => {
    // code ---
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
  
`;

export { code };