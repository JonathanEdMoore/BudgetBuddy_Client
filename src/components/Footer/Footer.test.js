import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Footer smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Footer /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Footer snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
