import styles from './Footer.module.scss';

import ScrollTop from '../ScrollTop/ScrollTop';
import Whatsap from '../Whatsapp/WhatsApp';


import MasterCard from '../../assets/images/MasterCard.png';
import VisaCard from '../../assets/images/VisaCard.png';
import AmericaCard from '../../assets/images/AmericaEx.png';
import EloCard from '../../assets/images/EloCard.png';
import HiperCard from '../../assets/images/HiperCard.png';
import PayPal from '../../assets/images/PayPal.png';
import Boleto from '../../assets/images/Boleto.png';
import VtexPci from '../../assets/images/vtex-pci.png';
import Vtex from '../../assets/images/vtex.svg';
import M3 from '../../assets/images/M3.svg';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__container']}>
            <div className={styles['footer__container__text']}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor</p>
            </div>
            <picture className={styles['footer__container__payments']}>
                <img src={MasterCard} alt="Badeira Master" />
                <img src={VisaCard} alt="Bandeira Visa"/>
                <img src={AmericaCard} alt="Badeira America Express" />
                <img src={EloCard} alt="Bandeira Elo" />
                <img src={HiperCard} alt="Bandeira HiperCard" />
                <img src={PayPal} alt="PayPal" />
                <img className={styles['footer__container__payments__boleto']} src={Boleto} alt="Boleto" />
                <div className={styles['footer__container__payments__row']}></div>
                <img className={styles['footer__container__payments__div__vtex']} src={VtexPci} alt="Vtex" />
            </picture>
            <div className={styles['footer__container__text2']}>
                <p>Powered by</p>
                <img src={Vtex} alt="Vtex" />
                <p>Developed by</p>
                <img src={M3} alt="Logo M3" />
            </div>
            </div>
            <div className={styles['footer__contact']}>
            <Whatsap/>
            <ScrollTop/>
            </div>
        </footer>
    )
}


export default Footer;