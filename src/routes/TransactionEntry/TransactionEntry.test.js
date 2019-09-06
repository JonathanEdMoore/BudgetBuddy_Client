import React from 'react'
import ReactDOM from 'react-dom'
import TransactionEntry from './TransactionEntry'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('TransactionEntry smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><TransactionEntry /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('TransactionEntry snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<TransactionEntry />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})