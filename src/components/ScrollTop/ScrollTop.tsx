import styles from './ScrollTop.module.scss';

import seta from '../../assets/images/seta.svg';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};


const ScrollTop = () => {
    return (
        <button className={styles['button']} onClick={scrollToTop}><img src={seta} alt="Seta top" /></button>
    )
}


export default ScrollTop;