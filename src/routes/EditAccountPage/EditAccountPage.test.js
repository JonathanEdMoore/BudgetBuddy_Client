import React from 'react'
import ReactDOM from 'react-dom'
import EditAccountPage from './EditAccountPage'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('EditAccountPage smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><EditAccountPage /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('EditAccountPage snapshot test', () => {
  const wrapper = shallow(<EditAccountPage />)
  expect(toJson(wrapper)).toMatchSnapshot()
})