import React, {Component} from 'react';

export default class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>404,您找的页面不存在</div>
        )
    }
}