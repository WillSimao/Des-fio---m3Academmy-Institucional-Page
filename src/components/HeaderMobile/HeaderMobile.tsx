import styles from './HeaderMobile.module.scss';

import MenuMobile from '../MenuMobile/MenuMobile';

import InputSearch from '../InputSearch/InputSearch';
import logoM31280  from '../../assets/images/logo-m3academy.svg';
import CartHeader from '../../assets/images/cart-header.svg';

const HeaderMobile = () => {
    return ( 
        <header className={styles['headerMobile']}>
            <div className={styles['headerMobile__logo-cart']}>
                <MenuMobile/>
                <picture className={styles['headerMobile__logo']}>
                    <img src={logoM31280} alt="Logo m3Academy" />
                </picture>
                <ul className={styles['headerMobile__ul']}>
                    <li>
                        <a href="/">
                            <img src={CartHeader} alt="Carrinho de Compras" />
                        </a>
                    </li>
                </ul>
            </div>
            <InputSearch/>
        </header>
    )
}

export default HeaderMobile