import { Layout, Menu } from 'antd';
import paths from 'common/paths';
import { Logo } from 'Elements/Navbar';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Flex } from 'UIKit/grid';
const { Header, Content } = Layout;

class PageLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({
      collapsed
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <Flex>
              <Logo />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {paths.map((path, i) => {
                  if (path.route) {
                    return (
                      <Menu.Item key={i}>
                        <Link to={path.route}>{path.name}</Link>
                      </Menu.Item>
                    );
                  }
                })}
              </Menu>
            </Flex>
          </Header>
          <Content style={{ padding: '0 50px', margin: '24px 0' }}>
            {/* breadcrumb */}
            <Layout
              style={{
                padding: '24px 0',
                background: '#fff'
              }}
            >
              <Switch>
                {paths.map((path, i) => (
                  <Route
                    key={i}
                    path={path.route}
                    exact={path.exact}
                    component={path.content}
                  />
                ))}
              </Switch>
            </Layout>
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default PageLayout;
