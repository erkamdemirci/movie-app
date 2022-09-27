import LanguageToggler from '../NavBar';

interface Props {
  children: React.ReactNode;
  setCurrentLocale: any;
}

const Layout = ({ children, setCurrentLocale }: Props) => {
  return (
    <div>
      <LanguageToggler setCurrentLocale={setCurrentLocale} />
      {children}
    </div>
  );
};

export default Layout;
