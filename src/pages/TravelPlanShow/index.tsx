import React from "react";
import styles from './index.module.scss';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast } from 'antd-mobile';

export class TravelPlanShow extends React.Component {
    copyDiv
    copy(copyDiv) {
        // console.log(copyDiv.innerText);
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', copyDiv.innerText);
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            // alert('旅行计划复制成功');
            Toast.show('旅行计划复制成功');
        }
        document.body.removeChild(input);
    }
    render() {
        return (
            <div className={styles.container}>
                <div style={{color: 'rgb(5, 132, 163)'}}>旅行计划：</div>
                <div className={styles.plan} ref={(ref)=>{this.copyDiv = ref}}>aaa</div>
                <button onClick={() => this.copy(this.copyDiv)}>复制</button>
            </div>
        );
    }
}
