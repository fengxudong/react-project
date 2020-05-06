import React, {Component} from 'react';
import style from "../../assets/style/sass/search.module.scss";
import {connect} from "react-redux";
import changeNewHotCreator from "../../store/actionCreator/Home/newHotWord";
import showListCreator from "../../store/actionCreator/Home/showList";
import NewHotWord from "../../compontents/NewHotWord";
import ShowList from "../../compontents/ShowList";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasValue:false
        }
        // this.hasValue = false
        this.search = null;
    }

    render() {
        return (
            <div className={style.search} style={this.props.showList.length<1?{background: '#fefefe'}:{background: ''}}>
                {/*头部*/}
                <header className={style.head}>
                    <div className={style.search_ipt}>
                        <span className={style.search_ico}>搜索</span>
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
                        this.props.history.push("/")
                    }}>取消</span>
                </header>

                <section className={style.main}>
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
        // this.props.getShowList.call(this);
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
