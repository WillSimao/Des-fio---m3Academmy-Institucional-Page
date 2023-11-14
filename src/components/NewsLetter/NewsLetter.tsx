import styles from './NewsLetter.module.scss';

const NewsLetter = () => {

    return (
        <div className={styles['containerNewsLetter']}>
            <div className={styles['containerNewsLetter__wrapper']}>
                <h1>Assine nossa Newsletter</h1>
                <div className={styles['containerNewsLetter__wrapper__input-button']}>
                    <input type="text" placeholder='E-mail'/>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
