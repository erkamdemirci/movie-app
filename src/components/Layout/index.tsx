import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

interface Props {
  setCurrentLocale: any;
}

const Layout = ({ setCurrentLocale }: Props) => {
  return (
    <div>
      <NavBar setCurrentLocale={setCurrentLocale} />
      <Outlet />
    </div>
  );
};

export default Layout;
