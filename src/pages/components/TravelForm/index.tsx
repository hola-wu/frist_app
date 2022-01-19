import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';


export class TravelForm extends React.Component<any, any> {
    render() {
        return (
            <form className={classNames(styles['travelForm'], 'trabelForm')} >
                <label>
                    名字:
                    <input type="text" name="name" autoComplete="off"/>
                </label>
                <label>
                    电话:
                    <input type="number" name="elephone" autoComplete="off" />
                </label>
                <label>
                    出发地:
                    <input type="text" name="departure" autoComplete="off" />
                </label>
                <label>
                    旅行时间:
                    <input type="text" name="time" autoComplete="off" />
                </label>
                <label>
                    旅行人数:
                    <input type="number" name="count" autoComplete="off" />
                </label>
                <label>
                    老人人数:
                    <input type="number" name="old" autoComplete="off" />
                </label>
                <label>
                    孩子人数:
                    <input type="number" name="children" autoComplete="off" />
                </label>
                <label className={styles.city}>
                    旅行城市:
                    <textarea name="time" autoComplete="off" />
                </label>
                <label className={styles.scenicSpots}>
                    必玩景区:
                    <textarea name="mustScenicSpots" autoComplete="off" />
                </label>
                <label className={styles.remarks}>
                    备注:
                    <textarea name="remarks" autoComplete="off" />
                </label>
                {/* <label>
                    <input className={styles.submitbutton} type="submit" value="提交" />
                </label> */}
            </form>
        );
    }
}