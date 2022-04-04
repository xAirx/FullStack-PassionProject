// Generated with util/create-component.js
import React from 'react';

import './CardComponent.scss';

import { CardComponentProps } from './CardComponent.types';

const CardComponent: React.FC<CardComponentProps> = ({ foo }) => (
	<div data-testid="CardComponent" className="foo-bar">
		{foo}
	</div>
);

export default CardComponent;
