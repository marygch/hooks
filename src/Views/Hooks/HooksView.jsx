import React, { Component } from "react";
import { Layout, Breadcrumb } from 'antd';
import L1ClassVsHook from "../Learning/L1ClassVsHook";
import L2ClassVsHook from "../Learning/L2ClassVsHook";
import L3CustomHook from "../Learning/L3CustomHook";
import L4HooksImproves from '../Learning/L4HooksImproves';
import L5ColorExample from '../Learning/L5ColorExample';

import { Sider } from '../../Components/Core';

const { Content } = Layout;


class HooksView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      learningSelected: "l1"
    }
  }
  setLearning = (e) => {
    this.setState({ learningSelected: e.key });
  }

  render() {
    const { learningSelected } = this.state;
    return (
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <Layout className="ant-layout ant-layout-has-sider site-layout-background" style={{ padding: '24px 0' }}>
          <Sider handleClick={this.setLearning} />
          <Content style={{ padding: '0 24px', minHeight: 280, flexDirection: "row" }}>
            {{
              l1: <L1ClassVsHook />,
              l2: <L2ClassVsHook />,
              l3: <L3CustomHook />,      
              l4: <L4HooksImproves />,     
              l5: <L5ColorExample />,              
            }[learningSelected]
            }
          </Content>
        </Layout>
      </>
    );
  }
}

export default HooksView;
