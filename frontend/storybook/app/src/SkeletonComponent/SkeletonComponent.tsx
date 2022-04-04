// Generated with util/create-component.js
import React from 'react';

import './SkeletonComponent.scss';

import { SkeletonComponentProps } from './SkeletonComponent.types';

const SkeletonComponent: React.FC<SkeletonComponentProps> = ({ foo }) => (
	<div data-testid="SkeletonComponent" className="foo-bar">
		{foo}
	</div>
);

export default SkeletonComponent;
