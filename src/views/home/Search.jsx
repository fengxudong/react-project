import React, {Component} from 'react';
import style from "../../assets/style/sass/search.module.scss";
import {connect} from "react-redux";
import changeNewHotCreator from "../../store/actionCreator/home/newHotWord";
import showListCreator from "../../store/actionCreator/home/showList";
import NewHotWord from "../../components/home/NewHotWord";
import ShowList from "../../components/home/ShowList";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasValue:false
        }
        this.search = null;
    }

    render() {
        return (
            <div className={style.search}>
                {/*头部*/}
                <header className={style.head}>
                    <div className={style.search_ipt}>
                        {/*<span className={style.search_ico}>搜索</span>*/}
                        <span className="iconfont icon-sousuo"></span>
                        <input type={"text"} ref={el=>this.search = el}
                               onInput={()=>{
                                   this.props.getShowList({
                                       keywords: this.search.value
                                   });
                                   this.setState({
                                       hasValue:true
                                   })
                               }}
                               placeholder={"搜索热门演出"}
                               className={style.text}/>
                        {/*<span className={style.cancel_ico}>×</span>*/}
                        <img src={"https://m.juooo.com/static/img/cancel.4cc4580.png"} onClick={()=>{
                            this.search.value = "";
                            this.setState({
                                hasValue:false
                            })
                        }} alt="" className={style.cancel_ico}/>
                    </div>
                    <span className={style.cancel} onClick={()=>{
                        this.props.history.push("/");
                    }}>取消</span>
                </header>

                <section className={style.main} style={this.state.hasValue?{background: '#f5f5f5'}:{background:'#fefefe'}}>
                    {
                    this.state.hasValue? <ShowList {...this.props} ></ShowList>: <NewHotWord {...this.props} search={this.search} getValue={this.getValue} changeValue={this.changeValue.bind(this)}></NewHotWord>
                    }

                    {/*<NewHotWord {...this.props} search={this.search} getValue={this.getValue} changeValue={this.changeValue.bind(this)}></NewHotWord>*/}
                </section>
            </div>
        )
    }
    getValue(vale){
        this.getShowList({
            keywords:vale
        })
    }

    changeValue(bol){
        this.setState({
            hasValue:bol
        });
    }
    componentDidMount() {
        this.props.getNewHotWord.call(this);
        if(!localStorage.historyWord){
            localStorage.historyWord =JSON.stringify([])
        }
    }
}
function mapStateToProps({search,showList}) {
    return {
        newHotWord:search.newHotWord,
        showList:showList.showList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getNewHotWord(){
            dispatch(changeNewHotCreator.getNewHotWord())
        },
        getShowList(data){
            dispatch(showListCreator.getShowList(data));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
