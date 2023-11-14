import styles from './SocialMedia.module.scss';

import Facebook from '../../assets/images/Facebook.svg';
import Instagram from '../../assets/images/Instagram.svg';
import Twitter from '../../assets/images/Twitter.svg';
import YouTube from '../../assets/images/YouTube.svg';
import Linkedin from '../../assets/images/Linkedin.svg';


const SocialMedia = () => {
    return (
        <div className={styles['container']}>
            <picture className={styles['container__picture']}>
                <a href="https://www.facebook.com/digitalm3/">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/m3.ecommerce/">
                    <img src={Instagram} alt="Instagram" />
                </a>
                <a href="/">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.youtube.com/channel/UCW4o86gZG_ceA8CmHltXeXA">
                    <img src={YouTube} alt="YouTube" />
                </a>
                <a href="https://www.linkedin.com/company/m3ecommerce/">
                    <img src={Linkedin} alt="Linkedin" />
                </a>
            </picture>
            <a href="https://m3ecommerce.com/?fbclid=IwAR1SREycWbHp_D_sDmn0vPIy6qYdZaVtMwb0oR27Gpi-RLODn2qf6DnGTKI">
                www.loremipsum.com
            </a>
        </div>
    )
}


export default SocialMedia;