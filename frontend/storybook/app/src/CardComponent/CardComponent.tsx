// Generated with util/create-component.js
import React from "react";

import { CardComponentProps } from "./CardComponent.types";

import "./CardComponent.scss";

const CardComponent: React.FC<CardComponentProps> = ({ foo }) => (
    <div data-testid="CardComponent" className="foo-bar">{foo}</div>
);

export default CardComponent;

