import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { UserOutlined, DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AdminTabel from './adminTabel';

const {  Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="#">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="#">Users</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
        <AdminTabel />
      
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin Panel ©2024 Created by YourName</Footer>

      </Layout>
    </Layout>
  );
};


AdminLayout.propTypes ={
    children:PropTypes.node
}

export default AdminLayout;
