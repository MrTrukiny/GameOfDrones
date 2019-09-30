import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GameStarter from "./GameStarter/GameStarter";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});


describe("<Game />", () => {
  let wrapper;
  
  it("should find <GameStarter /> component", () => {
    const wrapper = shallow(<Provider store={store}><GameStarter /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should renders <GameStarter /> component', () => {
    const wrapper = shallow(<Provider store={store}><GameStarter /></Provider>);
    expect(wrapper.find(GameStarter)).toHaveLength(1);
  });
});
