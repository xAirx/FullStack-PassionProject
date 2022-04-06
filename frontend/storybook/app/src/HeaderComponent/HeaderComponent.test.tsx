// Generated with util/create-component.js
import { render } from '@testing-library/react';
import React from 'react';

import HeaderComponent from './HeaderComponent';
import { HeaderComponentProps } from './HeaderComponent.types';
describe('Test Component', () => {
	let props: HeaderComponentProps;
	beforeEach(() => {
		props = {
			foo: 'bar',
		};
	});
	const renderComponent = () => render(<HeaderComponent {...props} />);
	it('should render foo text correctly', () => {
		props.foo = 'test';
		const { getByTestId } = renderComponent();
		const component = getByTestId('HeaderComponent');
		expect(component).toHaveTextContent('test');
	});
});
