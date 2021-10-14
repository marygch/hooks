import React, { Component } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Row, Col } from 'antd';
import UsingHooks from "./UsingHooksView";
import { code, code2 } from "./code";

const style = { paddingBottom: '50px' };

class LearningView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div style={{ paddingBottom: "50px" }}> Ussing hooks</div>
          <UsingHooks />
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}> Ussing hooks code</div>
          <CopyBlock
            language="jsx"
            text={code}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
          <div style={style}> Memo select</div>
          <CopyBlock
            language="jsx"
            text={code2}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </Col>
      </Row>
    );
  }
}

export default LearningView;
