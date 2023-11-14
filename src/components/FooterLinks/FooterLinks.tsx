import styles from './FooterLinks.module.scss';

import SocialMedia from '../SocialMedia/SocialMedia';
import ScrollTop from '../ScrollTop/ScrollTop';
import Whatsap from '../Whatsapp/WhatsApp';

const FooterLinks = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['container__wrapper-links']}>
                <ul className={styles['container__wrapper-links__ul']}>
                    <h1>Institucional</h1>
                    <li>
                        <a href="/">
                            Quem Somos
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Política de Privacidade
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Segurança
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Seja um Revedendedor
                        </a>
                    </li>
                </ul>
                <ul className={styles['container__wrapper-links__ul']}>
                    <h1>Dúvidas</h1>
                    <li>
                        <a href="/">
                            Entrega
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Pagamento
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Troca de Devoluções
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Dúvidas Frequentes
                        </a>
                    </li>
                </ul>
                <ul className={styles['container__wrapper-links__ul']}>
                    <h1>Fale conosco</h1>
                    <b>Atendimento Ao Consumidor</b>
                    <li>
                        <a href="(11) 4159 9504">(11) 4159 9504</a>
                    </li>
                    <b>Atendimento Online</b>
                    <li>
                        <a href="(11) 99433-8825">(11) 99433-8825</a>
                    </li>
                </ul>
            </div>
            <SocialMedia/>
            <div className={styles['container__contact']}>
                <Whatsap/>
                <ScrollTop/>
            </div>

        </div>
    )
}

export default FooterLinks;