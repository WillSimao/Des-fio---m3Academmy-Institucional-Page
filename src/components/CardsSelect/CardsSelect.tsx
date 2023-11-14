import styles from './CardsSelect.module.scss';
import { useState } from 'react';

import Sobre from '../Cards/Sobre';
import FormaDePagamento from '../Cards/FormaDePagamento';
import Entrega from '../Cards/Entrega';
import Troca from '../Cards/Troca';
import Seguranca from '../Cards/Seguranca';
import ContactForm from '../ContactForm/ContactForm';

const buttonToRender = [
   {
      label : 'Sobre',
      id : 0,
   },
   {
      label : 'Forma de Pagamento',
      id : 1, 
   },
   {
      label : 'Entrega',
      id : 2,
   },
   {
      label : 'Troca e Devolução',
      id : 3,
   },
   {
      label : 'Segurança e Privacidade',
      id : 4,
   },
   {
      label : 'Contato',
      id : 5,
   }
]

   const CardSelect = () => {

   const [render, setRender] = useState ("Sobre");
   
   const button = () => {
      return buttonToRender.map((
         button
      ) => (
         <button key={button.id} onClick={()=>setRender(button.label)} className={`${styles['container__wrapper__button__wrapper__component']} ${render === button.label ? styles['active'] : null }`}>{button.label}</button>
       ) )
   }
    return (
      <div className={styles['container']}>
            <h1 className={styles['container__h1']}>institucional</h1>
            <div className={styles['container__wrapper']}>
               <div className={styles['container__wrapper__button']} >
                  <div className={styles['container__wrapper__button__wrapper']}>
                     {button()}
                  </div>
               </div>
   
            <div className={styles['container__wrapper__cards']}>
               {render === "Sobre" && <Sobre/>}
               {render === "Forma de Pagamento" && <FormaDePagamento/>}
               {render === "Entrega" && <Entrega/>}
               {render === "Troca e Devolução" && <Troca/>}
               {render === "Segurança e Privacidade" && <Seguranca/>}
               {render === "Contato" && <ContactForm/>}
            </div>
         </div>
      </div>
 )}
 
 export default CardSelect;
 