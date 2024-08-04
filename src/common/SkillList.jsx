import React from 'react';
import styles from './SkillList.module.css';

const SkillList = ({ src, skill, icon }) => {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt="Check Mark" className={styles.checkMark} />
      {icon && <img src={icon} alt={`${skill} icon`} className={styles.skillIcon} />}
      <span>{skill}</span>
    </div>
  );
};

export default SkillList;
