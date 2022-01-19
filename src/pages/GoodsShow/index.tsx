import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { Jump } from '../components/Jump';


export class GoodsShow extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            // hidden: true,
        }
    }

    // handleClick(hidden) {
    //     this.setState({hidden: !hidden})
    //     return hidden;
    // }

    handleClick(click) {
        this.setState({click: !click})
        return click;
    }

    // download = url => {
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', url);
    //     document.body.appendChild(link);
    //     link.click();
    //     link.remove();
    //     console.log(link)
    // }
    
    imgDiv
    loadingImg(imgDiv) {
        // JSON.parse(）去掉URL的字符串引号
        const load = JSON.parse(imgDiv.style.backgroundImage.replace('url(','').replace(')',''));
        console.log(load);
        fetch(load, {
            method: 'get',
            mode: 'cors',
          })
            .then((response) => response.blob())
            .then((data) => {
                // 创建一个blob对象
              const downloadUrl = window.URL.createObjectURL(new Blob([data]));
            //   创建一个a标签，进行下载之后再把a标签移除，href 和 download除后缀外内容要一致
              const link = document.createElement('a');
              link.href = downloadUrl;
              link.setAttribute('download', downloadUrl + `${load}`);
              document.body.appendChild(link);
              link.click();
              link.remove();
            //   console.log(link)
            });
        // this.download(`${window.location.origin}${load}`)
    }

    render() {
        return (
            <div className={styles.container}>
                {/* <div className={classNames(styles.hidden, this.state.hidden ? styles.hidden : styles.big)}></div> */}
                <div className={styles.imgShow}>
                    <div ref={(ref)=>{this.imgDiv = ref}} className={classNames(styles.img, this.state.click ? styles.bigImg : styles.img)} style={{backgroundImage: `url(${require('./winner.svg').default})`}} onClick={() => this.handleClick(this.state.click)}></div>
                </div>
                <button className={styles.loading} onClick={() => this.loadingImg(this.imgDiv)}>
                    <div className={styles.loadingImg}></div>
                    <div className={styles.loadingFont}>下载</div>
                </button>
                <div className={styles.jump}><Jump history={this.props.history} /></div>
            </div>
        );
    }
}
