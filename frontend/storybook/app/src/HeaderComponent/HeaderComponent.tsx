// Generated with util/create-component.js
import React from 'react';

import './HeaderComponent.scss';

import { HeaderComponentProps } from './HeaderComponent.types';

const HeaderComponent: React.FC<HeaderComponentProps> = ({ foo }) => (
	<div data-testid="HeaderComponent" className="foo-bar">
		{foo}
	</div>
);

export default HeaderComponent;
