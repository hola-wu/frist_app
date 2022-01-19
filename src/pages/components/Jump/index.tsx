import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

export class Jump extends React.Component<any, any> {
    ticTacToe = () => {
        this.props.history.push('/TicTacToe');
    }

    home = () => {
        this.props.history.push('/');
    }

    goodsShow = () => {
        this.props.history.push('/GoodsShow');
    }

    render() {
        return (
            <div className={classNames(styles['jumpContainer'], 'jumpContainer')}>
                <button onClick={this.ticTacToe}>
                    <div className={styles.ticTacToe}></div>
                    <div>TicTacToe</div>
                </button>
                <button onClick={this.home}>
                    <div className={styles.home}></div>
                    <div>Home</div>
                </button>
                <button onClick={this.goodsShow}>
                    <div className={styles.goodsShow}></div>
                    <div>GoodsShow</div>
                </button>
            </div>
        );
    }
}