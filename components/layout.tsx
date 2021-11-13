import Head from 'next/head';
import { Fragment } from 'react';
import NavbarComponent from './Navbar';
import { useRouter } from 'next/router';
interface Props {
  children: React.ReactNode;
  title?: String;
}
const UnPublicHeader: string[] = [];
// const UnPublicHeader = ['/about'];

const Layout = ({ children, title = 'Next App' }: Props) => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      {!UnPublicHeader?.includes(router.pathname) && <NavbarComponent />}

      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
