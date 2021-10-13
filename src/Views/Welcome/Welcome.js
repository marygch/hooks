import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Footer, Sider: AntdSider, Content } = Layout;

const Welcome = () => {
  return (
    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <div className="prism-code language-sh codeBlock_19pQ">
          <b>Creado con:</b>
          <div className="token-line">
            <span className="token plain">npx create-react-app my-app</span>
          </div>
          <div className="token-line">
            <span className="token plain">cd my-app</span>
          </div>
          <div className="token-line">
            <span className="token plain">npm start</span>
          </div>
        </div>
        <br />
        <br />
        <div class="prism-code language-sh codeBlock_19pQ">
          <b>Usando:</b>
          <div class="token-line">
            <span class="token plain">React routes</span>
          </div>
          <div class="token-line">
            <span class="token plain">Styled components</span>
          </div>
          <div class="token-line">
            <span class="token plain">axios (remove) </span>
          </div>
        </div>
        <br />
        <div class="prism-code language-sh codeBlock_19pQ">
          <b>Publicado:</b>
          <div class="token-line">
            <span class="token plain">git init</span>
          </div>
          <div class="token-line">
            <span class="token plain">Crear repositorio en git</span>
          </div>
          <div class="token-line">
            <span class="token plain">npm build</span>
          </div>
          <div class="token-line">
            <span class="token plain">renombrar build por docs</span>
          </div>
          <div class="token-line">
            <span class="token plain">git commit -sm "firs commit"</span>
          </div>
          <div class="token-line">
            <span class="token plain">git push origin master</span>
          </div>
          <div class="token-line">
            <span class="token plain">
              en git/configuraciones/pages/selecciona docs/
            </span>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Welcome;
