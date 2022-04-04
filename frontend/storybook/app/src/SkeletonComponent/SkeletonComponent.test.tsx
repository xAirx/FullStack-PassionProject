// Generated with util/create-component.js
import { render } from '@testing-library/react';
import React from 'react';

import SkeletonComponent from './SkeletonComponent';
import { SkeletonComponentProps } from './SkeletonComponent.types';
describe('Test Component', () => {
	let props: SkeletonComponentProps;
	beforeEach(() => {
		props = {
			foo: 'bar',
		};
	});
	const renderComponent = () => render(<SkeletonComponent {...props} />);
	it('should render foo text correctly', () => {
		props.foo = 'test';
		const { getByTestId } = renderComponent();
		const component = getByTestId('SkeletonComponent');
		expect(component).toHaveTextContent('test');
	});
});
