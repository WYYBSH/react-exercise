import React, { Component } from 'react'
import PropTypes from 'prop-types'

//class名字要大写
class TestCom extends Component {
    constructor(props) {
        super()
    }
    static PropTypes ={
        comment: PropTypes.object
    }
    render() {
        console.log()
        return (
            <div className="TestCom">
                <h1>i am a Component ! {this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default TestCom