import React from 'react'
import ReactDOM from 'react-dom'
import DeleteForm from './DeleteForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('DeleteForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DeleteForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('DeleteForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<DeleteForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})