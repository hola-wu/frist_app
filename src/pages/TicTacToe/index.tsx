import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { Jump } from '../components/Jump';


class Square extends React.Component<any, any> {
    render() {
        return (
            <button className={styles.square} onClick={() => this.props.onClick()}>{this.props.value}</button>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if((squares[a]) && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
            return squares[a];
        }
    }
    return null;
}

function sum(squares) {
    let count = 0;
    for(let i = 0; i < squares.length; i++) {
        if(squares[i] !== null) {
            count ++;
        } 
    }
    return count;
}

class Board extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ squares: squares, xIsNext: !this.state.xIsNext })
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
        );
    }

    reset = () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        })
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        const fill = sum(this.state.squares);
        let status;
        if(winner) {
            status = 'Winner:' + winner;
        }else if(fill === 9) {
            status = 'Both Fail'
        }else {
            status = 'Next Player:' + (this.state.xIsNext ? 'X' : 'O')
        }
        return (
            <div>
                <div className={classNames(styles.status, winner ? styles.winnerStatus : (fill === 9 ? styles.fillstatus : styles.status))}>
                    {status}
                    <span></span>
                </div>
                <div className={styles['board-row']}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={styles['board-row']}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={styles['board-row']}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <button className={styles.reset} onClick={this.reset}>重新开始</button>
            </div>
        );
    }
}

export class TicTacToe extends React.Component<any, any> {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles['board']}><Board /></div>
                <div className={styles['jump']}><Jump history={this.props.history}/></div>
            </div>
        );
    }
} 
