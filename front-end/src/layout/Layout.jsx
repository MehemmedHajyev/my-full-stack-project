import Footer from "./footer/Footer"
import PropTypes from 'prop-types';
import Header from "./header/Header"

const Layout = (props) => {
  return (
<>
<Header />
    {props.children}
    <Footer />
</>  )
}









Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default Layout