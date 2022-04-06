// Generated with util/create-component.js
import React from 'react';

import './Button.scss';

import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ isLoading }) => (
	<div data-testid="Button" className="foo-bar">
		{isLoading ? '' : 'Button'}
	</div>
);

export default Button;
