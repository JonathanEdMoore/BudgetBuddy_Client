import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Nav smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Nav snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Nav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})