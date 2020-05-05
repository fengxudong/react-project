import React, {Component} from 'react';
import style from "../../views/home/home.module.css";

export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //console.log(this.props.showList)
        return (
            <div className={style.recommendMain}  ref={e => (this.scroll = e)}>
                {/*每一个*/}
                {
                    this.props.showList.map((v,i)=>(
                        <div key={i} className={style.recommendItem}>
                            <div>
                                <span>{v.city_name}</span>
                                <img src={v.pic}/>
                            </div>
                            <div className={style.recommendBottom}>
                                {/*主办*/}
                                <div className={style.recommendTitle}>
                                    <div>
                                        <img src={v.method_icon} alt=""/>
                                    </div>
                                    <h3>{v.name}</h3>
                                </div>
                                {/*<p><span>{v.start_show_time} - {v.end_show_time}  </span></p>*/}
                                <p><span>{v.show_time_top}  </span></p>
                                <p>
                                    <span>￥{v.min_price}</span>
                                    <span> 起</span>
                                </p>
                                <p>
                                    {
                                        v.support_desc.map((item,i)=>(
                                           <React.Fragment key={i}>
                                               <span>{item}</span>
                                           </React.Fragment>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
    onScrollHandle(e){
        console.log(e)
        const { clientHeight, scrollHeight, scrollTop } = e.target;
        // const { clientHeight, scrollHeight, scrollTop } = this.scroll;
        const isBottom = scrollTop + clientHeight + 20 > scrollHeight;
        console.log(scrollTop, clientHeight, scrollHeight, isBottom,2222);
    }
    componentDidMount() {
        if (this.scroll) {
            console.log(1111, this.scroll);
            this.scroll.addEventListener("touchmove", this.onScrollHandle.bind(this));
        }
    }
}