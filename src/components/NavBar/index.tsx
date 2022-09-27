import { LOCALES } from '../../i18n/locales';
import * as S from './styles';

interface Props {
  setCurrentLocale: any;
}

const NavBar = ({ setCurrentLocale }: Props) => {
  return (
    <S.NavBarContainer>
      <div className="logo">MovieDB</div>
      <div className="actions">
        <button
          onClick={() => {
            setCurrentLocale(LOCALES.ENGLISH);
          }}
        >
          <span>🇺🇸</span>
        </button>
        <button
          onClick={() => {
            setCurrentLocale(LOCALES.TURKISH);
          }}
        >
          <span>🇹🇷</span>
        </button>
      </div>
    </S.NavBarContainer>
  );
};

export default NavBar;
