import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('LandingPage smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('LandingPage snapshot test', () => {
  const wrapper = shallow(<LandingPage />)
  expect(toJson(wrapper)).toMatchSnapshot()
})