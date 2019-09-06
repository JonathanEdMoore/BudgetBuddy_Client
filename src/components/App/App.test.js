import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('App smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('App snapshot test', () => {
  it('renders the UI as expected',() => {
    const wrapper = shallow(<BrowserRouter><App /></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

