import React from "react";

import { Text } from "@cinemataztic/cine-ui";

const App = () => {

  const test = "string";

  const testFunction = (test: string) => {
  }

  return (
    <div className="h-screen min-h-full px-4 overflow-y-auto bg-primary">
      <Text color="primary" className="py-8">
        Hello, World!
      </Text>
      <div className="h-auto p-5 text-white bg-secondary rounded-xl">
        <Text color="default">Let's get started.</Text>
      </div>
    </div>
  );
};

export default App;
