import React from "react";
import styles from './index.module.scss';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast } from 'antd-mobile';


export class TravelForm extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            elephone: '',
            departure: '',
            time: '',
            count: '',
            old: '',
            children: '',
            city: '',
            mustScenicSpots: '',
            remarks: '',
        };
    }

    render() {
        return (
            <div className={styles.form}>
                <div style={{fontSize: '16px', color: 'red'}}>注：所有涉及人数部分只填写数字</div>
                <div className={styles.inputForm}>
                    <div>
                        <span>*</span>
                        姓名：
                        <input type="text" autoComplete="off" value={this.state.name}  onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div>
                        <span>*</span>
                        电话:
                        <input type="number" autoComplete="off" value={this.state.elephone}  onChange={(e) => this.setState({elephone: e.target.value})} />
                    </div>
                    <div>
                        <span>*</span>
                        出发地:
                        <input type="text" autoComplete="off" value={this.state.departure}  onChange={(e) => this.setState({departure: e.target.value})} />
                    </div>
                    <div>
                        <span>*</span>
                        旅行时间:
                        <input type="text" autoComplete="off" value={this.state.time}  onChange={(e) => this.setState({time: e.target.value})} />
                    </div>
                    <div>
                        <span>*</span>
                        旅行人数:
                        <input type="number" autoComplete="off" value={this.state.count}  onChange={(e) => this.setState({count: e.target.value})} />
                    </div>
                    <div>
                        <span>*</span>
                        老人人数:
                        <input type="number" autoComplete="off" value={this.state.old}  onChange={(e) => this.setState({old: e.target.value})} />
                    </div>
                    <div>
                        <span>*</span>
                        孩子人数:
                        <input type="number" autoComplete="off" value={this.state.children}  onChange={(e) => this.setState({children: e.target.value})} />
                    </div>
                </div>
                <div className={styles.textareaFrom}>
                    <span>*</span>
                    旅行城市:
                    <textarea autoComplete="off" value={this.state.city}  onChange={(e) => this.setState({city: e.target.value})} />
                    <span>*</span>
                    必玩景区:
                    <textarea autoComplete="off" value={this.state.mustScenicSpots}  onChange={(e) => this.setState({mustScenicSpots: e.target.value})} />
                    备注:
                    <textarea className={styles.remarks} autoComplete="off" value={this.state.remarks}  onChange={(e) => this.setState({remarks: e.target.value})} />
                </div>
            </div>
        );
    }
}

export class Traveler extends React.Component<any, any> {

    find = () => {
        this.props.history.push('/TravelPlanShow')
    }

    informaion
    submit(informaion) {
        console.log(informaion)
        if(this.informaion.state.name === '' || this.informaion.state.elephone === '' || this.informaion.state.departure === '' || this.informaion.state.time === '' || this.informaion.state.count === '' || this.informaion.state.old === '' || this.informaion.state.children === '' || this.informaion.state.city === '' || this.informaion.state.mustScenicSpots === '') {
            Toast.show('请填写全部必选项!');
        } else {
            Toast.show('提交成功!');
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <TravelForm ref={(ref) => {this.informaion = ref}} />
                <div className={styles.choose}>
                    <button onClick={this.find}>查询</button>
                    <button onClick={() => this.submit(this.informaion)}>提交</button>
                </div>
                {/* <div className={styles.plan}>
                    <div>旅行计划：</div>
                    <div className={styles.planShow}></div>
                </div> */}
            </div>
        );
    }
}
