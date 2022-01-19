import React from 'react';
import styles from './index.module.scss';

export class Travel extends React.Component<any, any> {
    traveler = () =>{
        this.props.history.push('/Traveler');
    }
    travelManager = () => {
        this.props.history.push('/TravelManager');
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>欢迎进入</h2>
                    <h3>请选择你要进入的页面</h3>
                </div>
                <div className={styles.choose}>
                    <button onClick={this.traveler}>
                        Traveler
                    </button>
                    <button onClick={this.travelManager}>
                        TravelManager
                    </button>
                </div>
            </div>
        );
    }
}