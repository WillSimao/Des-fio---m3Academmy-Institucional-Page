import styles from './InputSearch.module.scss';

import IconSearch from '../../assets/images/icon-Search.svg';


const InputSearch = () => {
    return (
        <div className={styles['wrapper-iconSearch']}>
            <input className={styles['wrapper-iconSearch__input']} type="text" placeholder="Buscar..."  />
            <img className={styles['wrapper-iconSearch__icon']} src={IconSearch} alt="Icone de pesquisa" />
        </div>
    )
}


export default InputSearch;