import React, { Component } from 'react'
import logo from './logo.svg'
import TestCom from './components/testCom'
import './App.css'

const names = ['wyy', 'wyf', 'wyh']
const arr = [
  <h1>hi~</h1>,
  <h2>nice to meet you</h2>
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <TestCom name="mom">
          <h1>props.children</h1>
        </TestCom>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            First React
          </a>
        </header>
        {/* 遇到HTML标签就用HTML规则解析，遇到代码块就用JS语法来解析 */}
        <div>
          {
            names.map(function (name) {
              return <div>hello,{name}!</div>
            })
          }
        </div>
        {/* 如果变量是一个数组就会展开这个数组的所有成员 */}
        <div>
          {arr}
        </div>
      </div>
    )
  }
}

export default App
