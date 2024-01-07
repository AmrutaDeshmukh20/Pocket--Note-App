import React from 'react';
import styles from './Note.module.css';

export default function Note(props) {
  return (
    <div className={styles.container}>
      <div className={styles.note_box}>{props.note}</div>
      <div className={styles.time_box}>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.bullet}>•</p>
        <p className={styles.time}>{props.time}</p>
      </div>
    </div>
  );
}



