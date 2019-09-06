import React from 'react'
import ReactDOM from 'react-dom'
import DeleteAccount from './DeleteAccount'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('DeleteAccount smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><DeleteAccount /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('DeleteAccount snapshot test', () => {
  const wrapper = shallow(<DeleteAccount />)
  expect(toJson(wrapper)).toMatchSnapshot()
})