import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from './LoginPage'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


describe('LoginPage smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><LoginPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('LoginPage snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<LoginPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})