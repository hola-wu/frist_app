import React from "react";
import styles from './index.module.scss';
import { TravelForm } from '../Traveler';

export class TravelManager extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <TravelForm />
                <div className={styles.plan}>
                    <div>旅行计划：</div>
                    <div></div>
                    <button>提交</button>
                </div>
            </div>
        );
    }
}
