import styles from './BreadCrumb.module.scss';

import Home from '../../assets/images/home.svg';
import ArrowRight from '../../assets/images/arrowRight.svg';

const BreadCrumb = () => {
  
    return (
        <div className={styles['container-breadCrumb']}>
            <img className={styles['container-breadCrumb__house']} src={Home} alt="Home" />
            <img className={styles['container-breadCrumb__seta']} src={ArrowRight} alt="Seta BreadCrumb" />
            <p>institucional</p>
        </div>
    )
}


export default BreadCrumb;