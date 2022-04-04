// Generated with util/create-component.js
import React from "react";

import { SkeletonComponentProps } from "./SkeletonComponent.types";

import "./SkeletonComponent.scss";

const SkeletonComponent: React.FC<SkeletonComponentProps> = ({ foo }) => (
    <div data-testid="SkeletonComponent" className="foo-bar">{foo}</div>
);

export default SkeletonComponent;

