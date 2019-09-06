import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './LoginForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('LoginForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoginForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('LoginForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<LoginForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})