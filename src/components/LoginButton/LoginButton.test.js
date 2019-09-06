import React from 'react'
import ReactDOM from 'react-dom'
import LoginButton from './LoginButton'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('LoginButton smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><LoginButton /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('LoginButton snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<LoginButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})