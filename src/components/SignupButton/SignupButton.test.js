import React from 'react'
import ReactDOM from 'react-dom'
import SignupButton from './SignupButton'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('SignupButton smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SignupButton /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SignupButton snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<SignupButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})