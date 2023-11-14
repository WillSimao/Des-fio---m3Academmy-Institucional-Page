import styles from './MenuMobile.module.scss';
import { useState } from 'react';

import MenuComponent from './ComponentMobile';

import OpenMobile from '../../assets/images/OpenMobile.svg';

const MenuMobile = () => {

    const  [IsOpen, setIsOpen] = useState(false);

   const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
     
    return (
        <div className={styles['container-modal']}>
            <button onClick={openModal}></button>
            {IsOpen ? <MenuComponent closeMenu={closeModal} />: <img onClick={openModal} src={OpenMobile} alt="Abre Menu" />}
        </div>
    )
}

export default MenuMobile;  