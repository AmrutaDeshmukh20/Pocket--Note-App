import React from 'react';
import Group from '../Group/Group';
import styles from './GroupBox.module.css';

export default function GroupBox(props) {
    return (
        <div className={styles.container}>
            <div className={styles.app_name}>
                <h2>Pocket Notes</h2>
                <button className={styles.group_cross_btn} onClick={props.toggleGroup}>x</button>
            </div>
            <button
                className={`${styles.group_add_btn} ${styles.circularButton}`}
                onClick={() => props.setShowAddGroup(!props.showAddGroup)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
            <div className={styles.group_box}>
                {props.groups &&
                    props.groups.map((group) => {
                        return (
                            <Group
                                key={group.id}
                                {...group}
                                clickOnGroup={props.clickOnGroup}
                                activeGroup={props.activeGroup}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
