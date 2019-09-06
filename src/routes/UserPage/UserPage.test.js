import React from 'react'
import ReactDOM from 'react-dom'
import UserPage from './UserPage'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('UserPage smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><UserPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('UserPage snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<UserPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})