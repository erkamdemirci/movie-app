import { LOCALES } from '../../i18n/locales';
import * as S from './styles';

interface Props {
  setCurrentLocale: any;
}

const NavBar = ({ setCurrentLocale }: Props) => {
  return (
    <S.NavBarContainer>
      <a href="/" className="logo">
        MovieDB
      </a>
      <div className="actions">
        <button
          onClick={() => {
            setCurrentLocale(LOCALES.ENGLISH);
          }}
        >
          <span>πΊπΈ</span>
        </button>
        <button
          onClick={() => {
            setCurrentLocale(LOCALES.TURKISH);
          }}
        >
          <span>πΉπ·</span>
        </button>
      </div>
    </S.NavBarContainer>
  );
};

export default NavBar;
