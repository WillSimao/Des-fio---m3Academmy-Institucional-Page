import styles from './WhatsApp.module.scss';


import WhatsapLogo from '../../assets/images/whatsap.svg';

const WhatsApp = () => {
    return (
        <a className={styles['img']} href="/"><img src={WhatsapLogo} alt="Whatsap" /></a>
    )
}

export default WhatsApp;