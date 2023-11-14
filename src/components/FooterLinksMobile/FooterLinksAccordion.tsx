import { useState } from "react";

import styles from './FooterLinksAccordion.module.scss';

interface Title {
    title: string,
    content: string,
}

const FooterLinksAccordion = ({ title, content }: Title) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles['container']}>
      <div className={styles['container__title']} onClick={() => setIsActive(!isActive)}>
        <h1>{title}</h1>
        {isActive ? <span>_</span> : <span>+</span>}
      </div>
      {isActive && <>{content}</>}
    </div>
  );
};

export default FooterLinksAccordion;