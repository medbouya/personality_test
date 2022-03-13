import { shallow } from 'enzyme';
import App from './App';
import Home from './components/Home'


it('renders without crashing', () => {
  shallow(<App />);
});

test('renders start button', () => {
  const wrapper = shallow(<Home />);
  const startFormButtonText = "Start the test";
  expect(wrapper.contains(startFormButtonText)).toEqual(true)


});
