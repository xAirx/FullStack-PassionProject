### Storybook component library

- [x] Storybook published as an npm package - with framework of choice (or custom build for infinite posibillities.
- [x] Rollup
- [x] SCSS
- [x] TypeScript
- [x] Storybook to help you create and show off your components
- [x] Jest and React Testing Library enabling testing of the components

#### Usage

#### Storybook export

Serve the story-book-static files in the dir, on github pages etc.

#### Generating new components

Creating a "new component template"

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

Remember to add the component to the index.ts export for exporting the component.

### Publish via NPM

Make sure npm login is run.
update name field in package.json to reflect npm package in private or public repo.

run

```
npm publish
```

### Installing library into other projects

```
yarn add mpw-storybook
```

### Usage

```TSX
import React from "react";
import { TestComponent } from "xairx-component-library";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent theme="primary" />
  </div>
);

export default App;
```

### Rollup-plugin-copy - SASS variable exports

Will export scss files from the storybook into the build folder.
Allowing for use in the project via the storybook library

```Sass
  @import '~xairx-component-library/build/typography';

  .example-container {
      @include heading;

      color: $white;
  }
```

#### Storybook & Unit-tests (Low level)

    - Jest, and React-testing-library. Simple tests that focuses on testing the contracts between the back end and front end layers. Where as solid component testing is abstracted away into the Storybook setup.
      &nbsp;

#### Unit-tests (High Level)

##### Example:

    - Think mocking API responses, checking for loading and error states.

    - Testing a modal is opened or closed as a result of a POST being successful or reverse.

&nbsp;
&nbsp;
