// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
//npm install --save-dev enzyme
import Enzyme from 'enzyme';
//https://github.com/wojtekmaj/enzyme-adapter-react-17
import Adapter  from '@wojtekmaj/enzyme-adapter-react-17';
//https://www.npmjs.com/package/enzyme-to-json
import {createSerializer} from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
