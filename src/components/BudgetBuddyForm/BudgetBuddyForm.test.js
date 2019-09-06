import React from 'react'
import ReactDOM from 'react-dom'
import BudgetBuddyForm from './BudgetBuddyForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


describe('BudgetBuddyForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BudgetBuddyForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('BudgetBuddyForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<BudgetBuddyForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})