import React, {Component} from 'react';
import ShowHeader from "../../compontents/ShowHeader";
import MyHeader from "../../compontents/MyHeader";
import style from "../../assets/style/sass/showsLibrary.module.scss";
export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.title = "演出日历"
    }

    render() {
        return (
           // <ShowHeader {...this.props} title={this.title}></ShowHeader>
           //
            <div className={"show_library"}>
                <header className={style.head_nav}>
                    {/*演出*/}
                    <MyHeader  title={this.title}></MyHeader>
                    {/*导航*/}
                </header>
                <div >

                </div>
                <div className={"main"}>
                   <div>
                       111
                   </div>
                </div>
            </div>
           //  <div>
           //      日历
           //  </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
    }
}