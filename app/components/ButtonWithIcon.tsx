import React from 'react';
import styles from './ButtonWithIcon.module.css';

interface ButtonWithIconProps {
  text: string;
  iconUrl?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}


const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ text, iconUrl, onClick, href, target }) => {
  const content = (
    <>
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon"
        />
      )}
      {text}
    </>
  );

  return (
    <div>
      {href ? (
        <a className={styles.linkButton} href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {content}
        </a>
      ) : (
        <button className={styles.linkButton} onClick={onClick}>
          {content}
        </button>
      )}
    </div>
  );
};

export default ButtonWithIcon;
