import React from 'react'
import ReactDOM from 'react-dom'
import MainHeader from './MainHeader'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('MainHeader smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><MainHeader /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('MainHeader snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<MainHeader />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})