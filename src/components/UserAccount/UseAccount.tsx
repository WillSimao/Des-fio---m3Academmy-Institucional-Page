import styles from './UserAccount.module.scss';

import CartHeader from '../../assets/images/cart-header.svg';

const UserAccount = () => {
    return (
        <div className={styles['wrapper-userAccount']}>
            <ul className={styles['wrapper-userAccount__ul']} >
                <li className={styles['wrapper-userAccount__ul__li-entrar']}>
                    <a href="/">entrar</a>
                </li>
                <li className={styles['wrapper-userAccount__ul__li-cart']}>
                    <a href="/">
                    <img src={CartHeader} alt="Carrinho de Compras"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default UserAccount;