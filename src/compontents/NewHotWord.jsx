import React, {Component} from 'react';
import style from "../assets/style/sass/search.module.scss";

export default class newHotWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyWord : JSON.parse(localStorage.historyWord) ||  []
        };
    }

    render() {
        return (
            <div className={style.default_wrap}>
                {/*历史搜索*/}
                {
                    this.state.historyWord.length>0?(<section className={`${style.history_search} ${style.defaule}`}>
                        <h3 className={style.title}>
                            <span className={style.left}>历史搜索</span>
                            <img src="https://m.juooo.com/static/img/clear.e4a5ee4.png" alt="" className={style.icon} onClick={()=>{
                                localStorage.historyWord = JSON.stringify([]);
                                this.setState({
                                    historyWord : JSON.parse(localStorage.historyWord)
                                })
                            }}/>
                        </h3>
                        <ul className={style.list}>
                            {
                                this.state.historyWord.map((v,i)=>{
                                    return (
                                        <li key={i} onClick={()=>{
                                            this.props.getValue(v);
                                            this.props.changeValue(true);
                                        }}>{v}</li>
                                    )
                                })
                            }
                            {/*<li>冰雪奇缘</li>*/}
                        </ul>
                    </section>):null
                }

                {/*热门搜索*/}
                <section className={`${style.hot_search} ${style.defaule}`}>
                    <h3 className={style.title}>
                        <span className={style.left}>热门搜索</span>
                    </h3>
                    <ul className={style.list}>
                        {
                            this.props.newHotWord.map((v,i)=>{
                                return (
                                    <li key={i} onClick={()=>{
                                        this.props.search.value = v.word;
                                        this.props.getValue(v.word);
                                        this.props.changeValue(true);
                                        if (localStorage.historyWord){
                                            let newArr = JSON.parse(localStorage.historyWord);
                                           let info = newArr.find(item=>item ===v.word);
                                           if (info){
                                           }else{
                                               newArr.push(v.word);
                                           }
                                           localStorage.historyWord = JSON.stringify(newArr);
                                        }
                                    }}>{v.word}</li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        )
    }
    componentDidMount() {
       if(!localStorage.historyWord){
           localStorage.historyWord =JSON.stringify([])
       }
    }
}