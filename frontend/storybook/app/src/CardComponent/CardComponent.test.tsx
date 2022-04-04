// Generated with util/create-component.js
  import React from "react";
  import { render } from "@testing-library/react";
  import CardComponent from "./CardComponent";
  import { CardComponentProps } from "./CardComponent.types";
  describe("Test Component", () => {
    let props: CardComponentProps;
    beforeEach(() => {
      props = {
        foo: "bar"
      };
    });
    const renderComponent = () => render(<CardComponent {...props} />);
    it("should render foo text correctly", () => {
      props.foo = "test";
      const { getByTestId } = renderComponent();
      const component = getByTestId("CardComponent");
      expect(component).toHaveTextContent("test");
    });
  });
  