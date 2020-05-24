import CustomHead from './customHead';
import Header from './header';
import Footer from './footer';

import { PageLayout } from '../styles/globalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <CustomHead />
      <PageLayout>
        <Header />
        <main>{children}</main>
        <Footer />
      </PageLayout>
    </>
  );
};

export default Layout;