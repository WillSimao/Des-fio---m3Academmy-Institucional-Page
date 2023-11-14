
import { useRef } from 'react';

import styles from './Component.module.scss';

import UserAccount from '../UserAccount/UseAccount';
import CloseMobile from '../../assets/images/CloseMobile.svg';
import useOnClickOutside from './UseClickOutSide';
interface MenuComponentProps {
    closeMenu: () => void;
}

const MenuComponent = ({closeMenu}: MenuComponentProps) => {

    const mobileRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(mobileRef, closeMenu)

    return (
        <div className={styles['container-components']}>
            <div ref={mobileRef} className={styles['container-components__wrapper']}>
                <div className={styles['container-components__wrapper__logon']}>
                    <UserAccount/>
                    <button onClick={closeMenu} type='button'><img src={CloseMobile} alt="Fecha Menu"/></button>
                </div>
                <ul className={styles['container-components__wrapper__ul']}>
                    <li className={styles['container-components__wrapper__ul__li']}> 
                        <a href="/">Cursos</a>
                    </li>
                    <li className={styles['container-components__wrapper__ul__li']}>
                        <a href="/">Saiba Mais</a>
                    </li>
                    <li className={styles['container-components__wrapper__ul__li']}>
                        <a href="/">Institucionais</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuComponent;