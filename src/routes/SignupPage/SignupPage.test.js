import React from 'react'
import ReactDOM from 'react-dom'
import SignupPage from './SignupPage'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('SignupPage smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SignupPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SignupPage snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<SignupPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})