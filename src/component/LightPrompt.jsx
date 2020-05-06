import React, { Component } from 'react'
import '../assets/style/lightPrompt.css'

export default class LightPrompt extends Component {
    render() {
        return (
            <div>
                <div id="lightprompt">{this.props.state}</div>
            </div>
        )
    }
}
