import styles from './Header.module.scss'; 

import InputSearch from '../InputSearch/InputSearch';
import UserAccount from '../UserAccount/UseAccount';
import logoM31280  from '../../assets/images/logo-m3academy.svg';
import logoM32500  from '../../assets/images/logo-m3academy2500.svg';    

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['header__wrapper-top']}>
                <picture className={styles['header__wrapper-top__picture']}>
                    <a  className={styles['header__wrapper-top__picture__img1280']} href="https://lp.digitalm3.com.br/m3-academy-universidade-corporativa">
                        <img className={styles['header__wrapper-top__picture__logo']} src={logoM31280} alt="Logo m3academy" />
                    </a>
                    <a className={styles['header__wrapper-top__picture__img2500']} href="https://lp.digitalm3.com.br/m3-academy-universidade-corporativa">
                        <img className={styles['header__wrapper-top__picture__logo']} src={logoM32500} alt="Logo m3academy" />
                    </a>
                </picture>      
                <InputSearch/>
                <UserAccount/>
            </div>
            <div className={styles['header__wrapper-botom']}>
                <ul className={styles['header__wrapper-botom__ul']}>
                    <li className={styles['header__wrapper-botom__ul__li']}>
                            <a href="/">cursos</a>
                    </li>
                    <li className={styles['header__wrapper-botom__ul__li']}>
                            <a href="/">saiba mais</a>
                    </li>
                    <li className={styles['header__wrapper-botom__ul__li']}>
                            <a href="/">institucionais</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header