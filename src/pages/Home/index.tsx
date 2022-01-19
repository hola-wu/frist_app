import React from 'react';
import styles from './index.module.scss';


export class Home extends React.Component<any, any> {
    ticTacToe = () =>{
        this.props.history.push('/TicTacToe');
    }
    goodsShow = () => {
        this.props.history.push('/GoodsShow');
    }
    travel = () => {
        this.props.history.push('/Travel');
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>欢迎进入</h2>
                    <h3>请选择你要进入的程序</h3>
                </div>
                <div className={styles.choose}>
                    <button onClick={this.ticTacToe}>
                        TicTacToe
                    </button>
                    <button onClick={this.goodsShow}>
                        GoodsShow
                    </button>
                    <button onClick={this.travel}>
                        travel
                    </button>
                </div>
            </div>
        );
    }
}