[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/chetanraj/awesome-github-badges)
[![Build status](https://badge.buildkite.com/90ff98db996bb137c5be1bdce666c4b1ce68a25b17af0a6a04.svg?branch=master)](https://buildkite.com/xairx/react-component-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://github.com/tpg/vitamin/actions/workflows/php.yml/badge.svg)](https://github.com/tpg/vitamin/actions/workflows/php.yml)
[![npm version](https://badge.fury.io/js/mpw-storybook.svg)](https://badge.fury.io/js/mpw-storybook)
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

# **Introduction to project architecture** (My personal growth playground (always keep learning)

Embarking on the design of this microservices architecture is driven by a desire to explore the intricacies of modern development stacks. Based on past experiences in larger systems, the goal is to delve into the technologies that make up this architecture, fostering a deep understanding of their individual functionalities and how they synergize to create a robust and scalable ecosystem. This approach diverges from serverless solutions, emphasizing a hands-on learning experience that extends beyond what Firebase alone could offer in terms of scalability.

# **Passion-Project "MonoRepo" **

Modern web based applications consist of multiple services. For example, a backend API and a frontend client. In larger projects, where scaling becomes an issue, the services can also be split into multiple microservices. The question arises, how to organize the source code in such a project. One solution is a monorepo, i. e. one repository for all the source code in the project.

A monorepo, short for monolithic repository, is a version control repository that contains multiple projects. This approach is often used to manage related codebases together, making it easier to share code, dependencies, and coordinate changes across projects.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

# **Architecture explanation**

---

## **A "simple" Architecture mental visualization:**

# Overview of Microservices Architecture

---

## GraphQL API

**Explanation:** The GraphQL API, implemented using the GraphQL-Apollo-Express stack, serves as the interface for efficient data retrieval and manipulation. It ties into various microservices by providing a unified endpoint for communication, fostering seamless interactions between frontend and backend services.

**Why It's Its Own Microservice:** The GraphQL API, while a part of the larger microservices architecture, functions independently to facilitate efficient data retrieval and manipulation. Its autonomy allows seamless communication with other services and clients within the architecture.

## MongoExpress GUI

**Explanation:** The MongoExpress GUI functions independently, providing a graphical interface for managing MongoDB data. Its autonomy simplifies database visualization and interaction, enhancing developer efficiency.

**Why It's Its Own Microservice:** The MongoExpress GUI operates independently, providing a graphical interface for managing MongoDB data. Its autonomy simplifies database visualization and interaction, contributing to the development and maintenance of MongoDB-related microservices.

---

&nbsp;
&nbsp;
&nbsp;

## React Native App and Next.js Site

**Explanation:** Both the React Native App and Next.js Site, while distinct microservices, share a common purpose in offering versatile solutions for web and mobile application development. They tie into the GraphQL API, ensuring a consistent user experience across platforms.

## Storybook

**Explanation:** Storybook serves as a valuable tool for developing and documenting UI components in isolation. While it may not directly tie into other microservices, its impact resonates across the architecture by ensuring a consistent and well-documented user interface.

**Why It's Its Own Microservice:** Storybook serves as a standalone tool for developing and documenting UI components in isolation. Its autonomy facilitates independent development and testing of UI elements, contributing to a modular development approach.

---

&nbsp;
&nbsp;
&nbsp;

## Traefik and Load Balancing

**Explanation:** Traefik functions as the ingress controller, dynamically routing traffic and providing load balancing within the microservices cluster. It ensures efficient distribution of requests among healthy instances, promoting optimal resource utilization across the entire system.

**Why It's Its Own Microservice:** Traefik operates as the ingress controller, handling external requests and dynamically routing traffic within the microservices cluster. Its independence provides load balancing to ensure efficient distribution of requests among healthy instances, enhancing the architecture's scalability.

&nbsp;

## LogNet and Incident Monitoring Systems

**Explanation:** LogNet, connected to Prometheus, collaborates with the Incident Management System by collecting real-time metrics. This integration enhances the incident management approach, ensuring a proactive understanding of the system's behavior and enabling swift resolution of potential issues.

**Why It's Its Own Microservice:** LogNet, connected to Prometheus, operates independently to collect real-time metrics from MongoDB and Express/GraphQL layers. The Incident Management System functions autonomously, centrally managing incidents. Both systems integrate seamlessly with Prometheus for metric collection and Traefik for authentication and forwarding requests.

&nbsp;

### Prometheus Server

**Explanation:** The Prometheus Server stands as the cornerstone, collecting time-series data for monitoring microservices. It forms the foundation for other components to rely on real-time metrics and insights into the performance of the entire system.

**Why It's Its Own Microservice:** The Prometheus Server operates as an independent microservice dedicated to collecting time-series data for monitoring microservices. Its autonomy ensures centralized and efficient data collection, providing critical insights into the health and performance of the system.

&nbsp;

## MongoDB Query Exporter

**Explanation:** The MongoDB Query Exporter adds real-time data to the microservices architecture. Its integration ensures that the microservices have access to up-to-date information, enhancing the dynamic nature of the entire system.

**Why It's Its Own Microservice:** The MongoDB Query Exporter operates as a standalone microservice, fetching real-time data from MongoDB. Its singular purpose ensures an efficient and dedicated connection to MongoDB, offering valuable data for other microservices.

&nbsp;

### NodeExporter

**Explanation:** NodeExporter complements the Prometheus Server by exposing hardware and kernel-related metrics. This collaboration provides a holistic view of system-level performance, crucial for identifying potential bottlenecks and ensuring optimal operation.

**Why It's Its Own Microservice:** NodeExporter stands as a standalone microservice to expose hardware and kernel-related metrics. Its autonomy enables it to efficiently collaborate with Prometheus, offering essential insights into system-level performance.

&nbsp;

### LogNet

**Explanation:** LogNet, acting as an Express server connected to Prometheus, synergizes with the Prometheus Server by gathering metrics from MongoDB and Express/GraphQL layers. This real-time data collection offers a comprehensive understanding of the health and performance of both the database and the application layer.

**Why It's Its Own Microservice:** LogNet functions independently as an Express server, acting as a log client connected to Prometheus. Its singular focus on gathering metrics from MongoDB and Express/GraphQL layers ensures focused and efficient real-time data collection.

&nbsp;

### Prometheus Alert Manager

**Explanation:** The Prometheus Alert Manager collaborates with the Prometheus Server to manage and trigger alerts based on predefined rules. By integrating seamlessly, it enhances the incident management capabilities of the system, ensuring swift responses to potential issues.

**Why It's Its Own Microservice:** The Prometheus Alert Manager operates autonomously, managing and triggering alerts based on predefined rules. Its independence ensures centralized incident management, seamlessly integrating with external tools and systems.

&nbsp;

## Usage of Consul

**Explanation:** Consul, facilitating service discovery and dynamic mapping, ties into the microservices architecture by enhancing scalability. It simplifies communication and orchestrates efficient interactions between microservices, promoting a streamlined and adaptive system.

**Why It's Its Own Microservice:** Consul stands alone as a crucial component for service discovery and dynamic mapping between test servers and web or app projects. Its autonomy enhances scalability within the microservices structure by simplifying communication and orchestrating efficient interactions between microservices.

&nbsp;
&nbsp;
&nbsp;

## Authentication Microservice

---

### Purpose

This microservice is designed to handle user authentication securely for React web apps using Auth0, ensure authorized access to microservice endpoints through OAuth2, and incorporate JWTs for token-based security. The components are carefully selected to address specific security concerns and create a robust authentication and authorization system.

### Components

#### Auth0 Integration

- **Description:** Integrate Auth0 for user authentication in the React web apps.
- **Technology:** Auth0
- **Why:** Auth0 provides a comprehensive and secure identity management solution. Its integration allows for seamless and standardized user authentication in React web apps, enhancing security by leveraging Auth0's robust authentication mechanisms.

#### JWT Generation and Validation

- **Description:** Generate and validate JSON Web Tokens (JWTs) for secure communication between the React web apps and microservices.
- **Technology:** JSON Web Tokens (JWT)
- **Why:** JWTs serve as secure tokens for validating the identity of users and ensuring the integrity of data exchanged between the React web apps and microservices. Their lightweight nature and token-based approach enhance security and efficiency.

#### OAuth2 for Microservices

- **Description:** Implement OAuth2 to secure microservice endpoints.
- **Technology:** OAuth2
- **Why:** OAuth2 is a standardized protocol for authorization, ensuring secure access to microservices. By implementing OAuth2, the microservices can enforce fine-grained access controls, validate access tokens, and facilitate secure communication between different components.

#### User Authorization

- **Description:** Implement role-based access control (RBAC) for authorizing users to access specific resources within the microservices.
- **Technology:** Role-Based Access Control (RBAC)
- **Why:** RBAC ensures that users have the appropriate permissions based on their roles. This component enhances security by controlling access at a granular level, preventing unauthorized actions within the microservices.

#### Security Middleware

- **Description:** Develop middleware for securing microservice routes, ensuring that only authenticated and authorized requests are processed.
- **Technology:** Custom middleware for securing routes
- **Why:** Middleware acts as a gatekeeper, intercepting incoming requests and validating the associated JWTs and OAuth2 tokens. This ensures that only legitimate and authorized requests proceed, enhancing the overall security of the microservices.

#### Token Refresh Mechanism

- **Description:** Implement a token refresh mechanism to maintain secure sessions and prevent unauthorized access.
- **Technology:** Token refresh logic
- **Why:** Token refresh mechanisms enhance user experience by seamlessly renewing tokens without requiring reauthentication. This prevents disruptions in service due to expired tokens while maintaining a high level of security.

#### Considerations

- **AWS Integration**
- **Why:** Integrating with AWS services like IAM adds an additional layer of security by leveraging AWS's robust identity and access management features.
- **Logging and Monitoring**
- **Why:** Comprehensive logging and monitoring ensure that any security-related events, authentication attempts, or authorization failures are tracked, enabling proactive identification and response to potential security threats.

  This authentication microservice is meticulously designed to address security concerns at various levels, providing a reliable and secure foundation for user authentication and microservice access control. Each component plays a crucial role in creating a robust and trustworthy authentication system. Adjustments can be made based on specific requirements and technology stacks.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

# The "monorepo" structure (WORK IN PROGRESS)

---

# Project structure

This is a list of all the packages in the repo and what they are used for.

| Package                              | Description                                        |
| ------------------------------------ | -------------------------------------------------- |
| [Frontend]("./frontend/")            | Next.js boilerplate (uses storybook npm package)   |
| [ReactNative]("./ReactNative/")      | Expo React Native App (uses storybook npm package  |
| [Express]("./backend/**/")           | Express Boilerplate Api Examples                   |
| [Grapqhl]("./backend/Grapqhl/**")    | A Server with GraphQl and Express                  |
| [Storybook]("./frontend/.storybook") | Storybook running in docker (Lives as NPM package) |

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Renovate

---

- [x] [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/) will scan all files in each repository to look for relevant package files. It will also group upgrades from the same monorepo into a single PR to ensure tests pass and PR noise is reduced. Natively supports Lerna and Yarn Workspaces with zero configuration necessary.

  Renovate bumping packages and working together with codeQL, and GitGuardian
  | Renovate | Renovate |
  | :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
  | <img src=https://user-images.githubusercontent.com/22436080/161400772-b5c86a25-5c54-438b-8374-835f9e74538c.png width="500" height="400"/> | <img src=https://user-images.githubusercontent.com/22436080/161400745-5a85b03a-a253-4a54-9826-d87b16b95f50.png width="600" height="300"/> |

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## DeepSource

---

- [x] [Deepsource](https://deepsource.io/) Will scan the project for issues, will scan all commits, and branches and will help with hooking into PR's as well.

      |                                                            DeepSource example                                                             |                                                            DeepSource example                                                             |
      | :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
      | <img src=https://user-images.githubusercontent.com/22436080/161400950-3c48227e-f8b0-4c13-899a-c0e0a958f691.png width="400" height="400"/> | <img src=https://user-images.githubusercontent.com/22436080/161400796-7a196b57-320e-4e49-bd6d-ef4e72e755b9.png width="600" height="300"/> |

  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;

## Codesee

---

- [x] [Codesee](https://www.codesee.io/) Auto-syncing code diagrams to drive collaboration, improve code reviews, reduce onboarding friction, and more. See the map here: https://app.codesee.io/maps/89924030-b41c-11ec-8182-53fb1661bf5c

  Will show which files and where deepsource has reccomended changes and give a DIFF tool to see the exact changes in each component.
  It also comes with a heatmap, which easily can give an overview of where the code is being refactored or developed the most.

      |                                                             CodeSee Example                                                              |                                                              CodeSee Example                                                              |
      | :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
      | <img src=https://user-images.githubusercontent.com/22436080/161400979-1a21703b-9acb-49c6-8d2d-86e94fbf3b90.png width="400" height="300"> | <img src=https://user-images.githubusercontent.com/22436080/161401207-4b1a7fdd-0cfe-470f-99ae-9d5242444cc9.png width="400" height="300"/> |

  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;

## Sentry

---

- [ ] [Sentry](https://sentry.io/welcome) Tracking to performance monitoring, developers can see what actually matters, solve quicker, and learn continuously about their applications - from the frontend to the backend.

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# Getting started locally

---

### Commands

    "dev:frontend": "config for your needs: - yarn --cwd ./packages/frontend run dev ",
    "dev:reactnative": "config for your needs: - yarn --cwd ./packages/reactnative expo start --host tunnel ",
    "dev:express": "config for your needs: - yarn --cwd ./packages/express run dev ",
    "dev:grapqhl": "config for your needs: - yarn --cwd ./packages/grapqhl run dev ",
    "dev:storybook": "config for your needs: - yarn --cwd ./packages/storybook run dev ",
    "hooks:uninstall": "husky uninstall",
    "hooks:install": "husky install",
    "prettier": "prettier \"**/*.{md,css,scss,yaml,yml}\"",
    "fix": "run-s fix:*",
    "fix:code": "yarn lint:code --fix",
    "fix:other": "yarn prettier --write",
    "lint": "run-p --continue-on-error lint:*",
    "lint:code": "eslint --ignore-path .gitignore --ignore-path .prettierignore --ignore-path .eslintignore --ext .ts,.tsx .",
    "lint:other": "yarn prettier --check",
    "lint-staged": "lint-staged",
    "commit": "lint-staged && git-cz",
    "postinstall": "cd ./packages/reactnative && expo-yarn-workspaces postinstall",
    "prebootstrap": "yarn",
    "storybook-component-tests": "yarn --cwd ./packages/frontend/storybook run test",
    	"storybook-build": "yarn --cwd ./packages/frontend/storybook run build",
    	"storybook-run": "yarn --cwd ./packages/frontend/storybook run storybook",
    	"storybook-export": "yarn --cwd ./packages/frontend/storybook run storybook:export"

### yarn commit - will run a flow composed of:

- [x] [Husky](https://github.com/typicode/husky)
- [x] Linting with: [ESLint](https://eslint.org), [stylelint](https://stylelint.io) & [Prettier](https://prettier.io)
- [x] [lint-staged](https://github.com/okonet/lint-staged)
- [x] [Commitizen](https://github.com/commitizen/cz-cli)

---

&nbsp;

## Getting started with docker

&nbsp;
&nbsp;

### NVM usage for cross env node versions

    Install & Update Script
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

---

&nbsp;
&nbsp;

### **Example Docker images**

---

- [x] React App Docker image - can be started with a parameter based on the chosen backend above, to seed the correct starter data.
- [x] Barebones Express-api docker image
- [ ] Graphql docker image
- [x] Mongodb docker image
- [x] Mongo seed docker image - can be started with a parameter based on the chosen backend above, to seed the correct starter data.
- [x] Storybook Docker image

      The express server runs standalone  and connects to the MongoDB
      The GraphQL server runs standalone and connects to the MongoDB

&nbsp;
&nbsp;

### Explaining the environments:

---

### Development environment

    - Hot reloading on code changes

### Production environment

     - Optimized, building static assets and served through a web server or CDN.
     - Here Nginx is used to serve static assets.
     - The Production and development docker configs are as "close" to each other as possible to minimize unforeseen issues once deployed.
     - When the react application is "BUILD", the output is optimized static assets, (html, css and the js file)
     - To serve these files we use Nginx

### docker-compose(dev):

    docker-compose -f docker-compose.dev.yml up -d

### docker-compose(prod):

    docker-compose -f docker-compose.prod.yml up --build

### Setup .env file for docker-compose

    The latest Docker Compose allows you to access environment variables from your compose file. So you can source your environment variables, then run Compose like so:

    ```
    set -a
    source /home/mpw/Github/FullStack-PassionProject/FullStack-React-Docker-Boilerplate/ .env
    docker-compose up -d

    ```

---

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# Service overviews

## Storybook component library as npm package

- [x] Storybook published as an npm package - with framework of choice (or custom build for infinite posibillities.

      ### Publish via NPM (Npm package)
      ---------------------------------------
      Make sure npm login is run.
      update name field in package.json to reflect npm package in private or public repo.

      run

      ```
      npm publish
      ```

      #### Installing library into other projects

      ```
      yarn add mpw-storybook@latest
      ```

      ##### Usage

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
      ---------------------------------------

      ### Rollup & rollup-plugin-copy - SASS variable exports
      ---------------------------------------
      Will export scss files from the storybook into the build folder.
      Allowing for use in the project via the storybook library

      ```Sass
        @import '~xairx-component-library/build/typography';

        .example-container {
            @include heading;

            color: $white;
        }
      ```
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;

- [x] Rollup
- [x] SCSS
- [x] TypeScript
- [x] Storybook to help you create and show off your components
- [x] Jest and React Testing Library enabling testing of the components
- [ ] Reccomended Addons and fancy shiny ones...
- [ ] Add way more components...

### Testing Strategies

&nbsp;
&nbsp;

### Low level unit-testing (isolation in storybook)

      - Jest, and React-testing-library. Simple tests that focuses on testing the contracts between the back end and front end layers. Where as solid component testing is abstracted away into the Storybook setup.
        &nbsp;

### High level, Unit-tests

###### Example:

      - Think mocking API responses, checking for loading and error states.

      - Testing a modal is opened or closed as a result of a POST being successful or reverse.

---

### Storybook export

---

      Serve the story-book-static files in the dir, on github pages etc.
      Generating new components

      Creating a "new component template"

      npm run generate YourComponentName

      This will generate:

      /src
      /YourComponentName
      YourComponentName.tsx
      YourComponentName.stories.tsx
      YourComponentName.test.tsx
      YourComponentName.types.ts
      YourComponentName.scss

      Remember to add the component to the index.ts export for exporting the component.
      Publish via NPM

      Make sure npm login is run. update name field in package.json to reflect npm package in private or public repo.

      run

      npm publish

      Installing library into other projects

      yarn add mpw-storybook@latest

---

### Autogen components - Automatically generating new components

---

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

    ---------------------------------------

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## App Boilerplates
-----------------------------------------------------------------------------
    🚀 Technology Choices:

    📱 React Native: We chose React Native as our development tool for its flexibility and control over native components, making it suitable for complex apps that require custom native functionality. While it requires more setup and configuration compared to Expo, it provides direct access to native APIs, custom native modules, and better performance optimization.

    🚀 React functional components: Functional components are used to build our app for their simplicity and use of hooks.

    📊 Environment variables: We use dotenv to manage environment variables for local development and production-ready builds. This allows us to keep sensitive information, such as API keys and database credentials, separate from the codebase and secure.

    🔍 TypeScript: We opted for TypeScript for its strong typing system, which makes our code more reliable and easier to maintain.

    🔥 React Query: We chose React Query for its ability to handle data fetching and caching, making our app more performant and responsive.

    🧪 Simple unit-testing: We included simple unit testing to ensure the reliability of our code, reducing the chances of unexpected bugs and issues. Snapshot testing captures and verifies rendered component changes, ensuring the app's functionality and reducing the likelihood of bugs. It saves time and improves code quality by automating testing and detecting regressions early on.

    🎨 Material UI: We used the Material UI library for our app's design.

    💻 Why it's good to use: It provides a wide range of pre-built UI components, follows Google's Material Design principles, and has excellent support for customization.

    👍 ESLint, Prettier, and Commitizen: We used ESLint and Prettier for code formatting and style consistency, and Commitizen for commit message consistency. This ensures that the codebase is easy to read and maintain, and commits are descriptive and follow best practices.

    👍 .nvmrc file for specifying the Node version required for a project because different versions of Node may introduce new features, bug fixes, or breaking changes that could affect the functionality of the project. By specifying the required version in the .nvmrc file, all developers working on the project can ensure they are using the same version, which helps to avoid version conflicts or unexpected behavior.

    Additionally, using a script like check_node_version.js can help to ensure that the correct Node version is being used before running any other scripts or starting the project. This can be especially useful in automated build and deployment pipelines where multiple scripts are run in sequence, as it helps to catch any version mismatches early on in the process

    👍 Reactotron for live debugging on endpoints and asyncstorage.

### Scaling Up:

    Our app follows a parent-child component structure, where three simple components interact with each other. As the app scales up, we can use the Context API to share data between components without passing props manually. Alternatively, we can use Redux, which allows us to manage the state of the entire app in one central location.

    State management: As the app grows, it may become challenging to manage the state of the app and ensure that the data flows correctly between different components. One way to address this is to use a state management library such as Redux or MobX to manage the app's state.

    Navigation: As the app grows, it may require more complex navigation between different screens and components. One way to address this is to use a navigation library such as React Native Navigation or React Navigation, which provides a more extensive set of navigation options and customizations.

    Performance: As the app grows, it may become more challenging to maintain performance and ensure that the app runs smoothly. One way to address this is to use performance optimization techniques such as code splitting, lazy loading, and caching to reduce the app's size and improve performance.

    Testing: As the app grows, it may become more challenging to test and ensure that the app works correctly across different platforms and devices. One way to address this is to use a testing framework such as Jest or React Native Testing Library to automate testing and ensure that the app works correctly.

    Code organization: As the app grows, it may become more challenging to organize the code and ensure that it remains maintainable and scalable. One way to address this is to use a modular code structure that separates the app's different components into smaller, reusable modules.

    Overall, scaling up a simple React Native app to a larger app structure requires careful planning, design, and development. By addressing these challenges and adopting best practices, developers can create a scalable and maintainable app that meets the needs of users and stakeholders.

    Extra packages:

    "@react-native-async-storage/async-storage": "^1.17.6",
    "@react-native-community/netinfo": "^5.6.2",
    "react-native-device-info": "9.0.2",

### Deployment and Pipelines

    Use of Appcenter

    When deploying the app, a deployment script can be used to automate the process of building and packaging the app with the correct configuration file. For example, a GitHub CI/CD pipeline can be set up to automatically build and deploy the app when changes are pushed to the code repository.

    In addition to building and packaging the app with the correct configuration file, there are also other important steps that need to be taken before the app can be deployed to app stores such as the App Store Connect and Google Play Store. One of these steps is code signing, which is the process of digitally signing the app with a certificate to verify its authenticity.

    XCode

    For iOS apps, code signing involves using certificates and provisioning profiles provided by Apple's developer program. These certificates and profiles are used to sign the app and authorize it to run on devices. In order to distribute the app through the App Store, the app must be signed with a distribution certificate and provisioning profile.

    Android studio

    Similarly, for Android apps, code signing involves using a signing key to sign the app. This signing key can be generated using Android Studio or the keytool command-line tool. The signed app is then uploaded to the Google Play Console along with other app metadata such as the app name, description, and screenshots.

    Both Apple and Google have strict guidelines and requirements for code signing, and failure to comply with these requirements can result in app rejection or removal from the app stores. It's important to follow these guidelines and properly sign the app before deploying it to the app stores.

    When using a tool like Appcenter for deployment, it's important to ensure that the correct certificates and keys are used for code signing. Appcenter allows for easy integration with Apple's App Store Connect and Google Play Store, simplifying the process of deploying apps to these app stores. By properly signing the app with the correct certificates and keys, developers can ensure that their app is securely and accurately distributed to their users.

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Web Frontend Boilerplates (WIP)

### Main tools

- [ ] Replace webpack with - VITE
- [x] [React](https://reactjs.org/docs/getting-started.html)
- [x] [Next.js](https://nextjs.org/)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [React query](https://react-query.tanstack.com/) A simple fetchHook is setup for easy usage
- [x] [Recoil](https://recoiljs.org/) Examples of using a simple state management with a small footprint
- [x] [Tailwind CSS v3](https://tailwindcss.com) with a [basic reset for form styles](https://github.com/tailwindlabs/tailwindcss-forms)
- [x] [Absolute Imports](https://github.com/aleclarson/vite-tsconfig-paths) - Avoid ./././
- [ ] [Unit-testing](https://testing-library.com/docs/react-testing-library/intro/]Unit-tests) React Testing Library & Jest
- [ ] [E2E-testing with cypress] (https://www.cypress.io/) - E2E testing.
  ***
  &nbsp;
  &nbsp;

### More Tooling

- [x] [Husky](https://github.com/typicode/husky) - Git pre hooks
- [x] [Prettier-Standard](https://github.com/sheerun/prettier-standard) for formatting and linting
- [x] [lint-staged](https://github.com/okonet/lint-staged) with precommit task for linting
- [x] [Commitizen](https://github.com/commitizen/cz-cli) intercepting your commits to help you add nice formatted messages
- [x] [Absolute Imports](https://medium.com/geekculture/making-life-easier-with-absolute-imports-react-in-javascript-and-typescript-bbdab8a8a3a1) - Avoid ./././

## CI/CD - Web project Deploys to Vercel:

- Setting up a deploy script for Vercel.
- Integrating with CircleCI for continuous integration and deployment.
- Implementing a testing step within CircleCI, E2E tests.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Backend Boilerplates (WIP)

### Backend consists of several setups for boilerplate purposes and exploration

---

    The Backends are connected to the mongoDB which needs to be spun up via the docker image.

## Simple Express API

---

- [x] [Typescript](https://www.typescriptlang.org/) For types...
- [x] [Express](https://www.npmjs.com/package/express) For magic.
- [x] [Mongoose](https://www.npmjs.com/package/mongoose) For Schemas.
- [x] Login / register - JWT Auth, Nodemon, Cors, Cross-env

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Simple Graphql-apollo-express setup

---

- [ ] [React query](https://react-query.tanstack.com/) React Query Api controller
- [ ] [Typescript](https://www.typescriptlang.org/)
- [ ] [Graphql-Request](https://www.npmjs.com/package/graphql-request)
- [ ] [GraphQL](https://graphql.org/) for backend magic
- [ ] [GraphQL Generator integration ](https://www.graphql-code-generator.com/) for instant generated types for the backend and frontend
- [ ] [GraphQL-Dataloader](https://github.com/graphql/dataloader) for performance reasons and caching
- [ ] [TypeScript-Graphql](TypeScript-Graphql) - obviously..
- [ ] [Unit-testing](https://blog.testproject.io/2020/06/23/testing-graphql-api/) for future testing
- [ ] [Eslint plugin graphql](https://github.com/apollographql/eslint-plugin-graphql) handy eslint for GraphQL
- [ ] [GraphQl Schema Linter](https://github.com/cjoudrey/graphql-schema-linter) for schema linting

&nbsp;
&nbsp;

## Grapqhl Api Example with JWT Auth and various tools.

---

- [ ] [GraphQL](https://graphql.org/) for backend magic
- [ ] [GraphQL Generator integration ](https://www.graphql-code-generator.com/) for instant generated types for the backend and frontend
- [ ] [GraphQL-Dataloader](https://github.com/graphql/dataloader) for performance reasons and caching
- [ ] [Typescript](https://www.typescriptlang.org/)
- [ ] [TypeScript-Graphql](TypeScript-Graphql) - obviously..
- [ ] [Eslint plugin graphql](https://github.com/apollographql/eslint-plugin-graphql) handy eslint for GraphQL
- [ ] [GraphQl Schema Linter](https://github.com/cjoudrey/graphql-schema-linter) for schema linting
- [ ] Login / register - JWT Auth, Nodemon, Cors, Cross-env

&nbsp;

## ON HOLD - Microservice preperation - Grapqhl example as bff on top of express backend (Todo-App Example expanded)

---

- [ ] [GraphQL](https://graphql.org/) for backend magic
- [ ] [Graphql-Request](https://www.npmjs.com/package/graphql-request)
- [ ] [GraphQL Generator integration ](https://www.graphql-code-generator.com/) for instant generated types for the backend and frontend
- [ ] [GraphQL-Dataloader](https://github.com/graphql/dataloader) for performance reasons and caching
- [ ] [Typescript](https://www.typescriptlang.org/)
- [ ] [TypeScript-Graphql](TypeScript-Graphql) - obviously..
- [ ] [Eslint plugin graphql](https://github.com/apollographql/eslint-plugin-graphql) handy eslint for GraphQL
- [ ] [GraphQl Schema Linter](https://github.com/cjoudrey/graphql-schema-linter) for schema linting

---

&nbsp;
&nbsp;

### ON HOLD - GrapQL Experimenting with federated GraphQL Microservices.

- [ ] [GraphQL](https://graphql.org/) for backend magic
- [ ] [GraphQL Generator integration ](https://www.graphql-code-generator.com/) for instant generated types for the backend and frontend
- [ ] [GraphQL-Dataloader](https://github.com/graphql/dataloader) for performance reasons and caching
- [ ] [Typescript](https://www.typescriptlang.org/)
- [ ] [TypeScript-Graphql](TypeScript-Graphql) - obviously..
- [ ] [Eslint plugin graphql](https://github.com/apollographql/eslint-plugin-graphql) handy eslint for GraphQL
- [ ] [GraphQl Schema Linter](https://github.com/cjoudrey/graphql-schema-linter) for schema linting
- [Apollo Federation](https://www.apollographql.com/docs/federation/) - For Managing GraphQL Schema

&nbsp;
&nbsp;

## Express backend and GraphQL Layer

---

### **Introduction**

    - An express server utilizing different endpoints, meant for being the backbone of the entire stack
    - A mongo DB is connected to this specific docker instance, also dockerized

    ### Considerations of an aggretation layer - BFF (GraphQL)
    - Since we are working with multiple react microservices connected to a single express, internationally, a lot of data is to be expected.
    - Most of the data is meant to be filtered heavily in our express api.
    - An idea would be to work with graphql or simple express depending on the situation.
    - Utilizing the nature of graphQL  BFF we are able to make simple queries and handle the data filtering in a simple and easy way.

                A GraphQL API Gateway needs to handle:

                Lexing of the query
                Parsing
                Normalisation (removing whitespace, duplicate fields, etc.)
                Validation
                Enforcing field level authorisation
                Calculating the complexity of the query
                Enforcing rate limits and quotas
                Printing the query (because we modified and cleaned it)
                Sending the request to the upstream
                Validating that the response conforms to the GraphQL schema
                Returning the response to the client

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
