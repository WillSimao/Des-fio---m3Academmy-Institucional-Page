import styles from './FooterLinksMobile.module.scss';

import FooterLinksAccordion from './FooterLinksAccordion';
import SocialMedia from '../SocialMedia/SocialMedia';


const FooterLinksMobile = () => {

    const text = [
        {
            title: 'Institucional',
            subTitle: <ul>
                <li>
                    <a href="/">Quem Somos</a>
                </li>
                <li>
                    <a href="/">Política de Privacidade</a>
                </li>
                <li>
                    <a href="/">Segurança</a>
                </li>
                <li>
                    <a href="/">Seja um Revendedor</a>
                </li>
            </ul>
        },
    {
        title: 'Dúvidas',
        subTitle: <ul>
            <li>
                <a href="/">Entrega</a>
            </li>
            <li>
                <a href="/">Pagamento</a>
            </li>
            <li>
                <a href="/">Troca e Devoluções</a>
            </li>
            <li>
                <a href="/">Dúvidas Frequentes</a>
            </li>
        </ul>
    },
    {
        title: 'Fale Conosco',
        subTitle: <ul>
                    <b>Atendimento Ao Consumidor</b>
                    <li>
                        <a href="(11) 4159 9504">(11) 4159 9504</a>
                    </li>
                    <b>Atendmento Online</b>
                    <li>
                        <a href="(11) 99433-8825">(11) 99433-8825</a>
                    </li>
                </ul>
    },
    ]

    return (
        <>
            <div className={styles['container']}>
                {text.map(({title, subTitle}) => (
                    <FooterLinksAccordion title={title} content={subTitle}/>
                ))}
                <SocialMedia/>
            </div>
        </>
    )
}


export default FooterLinksMobile;