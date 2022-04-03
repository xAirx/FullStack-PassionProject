# **Introduction to project architecture**

## **Passion-Project "MonoRepo" **

Modern web based applications consist of multiple services. For example, a backend API and a frontend client. In larger projects, where scaling becomes an issue, the services can also be split into multiple microservices. The question arises, how to organize the source code in such a project. One solution is a monorepo, i. e. one repository for all the source code in the project.

&nbsp;

## The "monorepo" structure is managed with

- [x] [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/) will scan all files in each repository to look for relevant package files. It will also group upgrades from the same monorepo into a single PR to ensure tests pass and PR noise is reduced. Natively supports Lerna and Yarn Workspaces with zero configuration necessary.
- [x] [Deepsource.io](https://deepsource.io/) helps you write clean code on every pull-request. Built for engineering teams who move fast and don’t break things.
- [x] [Codesee](https://www.codesee.io/) Auto-syncing code diagrams to drive collaboration, improve code reviews, reduce onboarding friction, and more. See the map here: https://app.codesee.io/maps/90748150-b28d-11ec-bc79-99929b29d669
- [x] [Sentry](https://sentry.io/welcome) Tracking to performance monitoring, developers can see what actually matters, solve quicker, and learn continuously about their applications - from the frontend to the backend.
- [x] [CI/CD - CircleCI & Docker hub -> Heroku](https://itnext.io/continuous-integration-and-deployment-of-docker-images-using-github-actions-7077991bcfde) preconfigured for running lint + tests + Dockerhub

       https://github.com/marketplace/actions/deploy-to-heroku
       https://www.heroku.com/deploy-with-docker
       https://medium.com/nexton/deploying-docker-images-to-heroku-with-circleci-713c764e248d

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Example of Deepsource working together with Codesee:

### DeepSource

       Will scan the project for issues, will scan all commits, and branches and will help with hooking into PR's as well.

|                                                            DeepSource example                                                             |                                                            DeepSource example                                                             |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img src=https://user-images.githubusercontent.com/22436080/161400950-3c48227e-f8b0-4c13-899a-c0e0a958f691.png width="400" height="400"/> | <img src=https://user-images.githubusercontent.com/22436080/161400796-7a196b57-320e-4e49-bd6d-ef4e72e755b9.png width="600" height="300"/> |

### Codesee

       Will show which files and where deepsource has reccomended changes and give a DIFF tool to see the exact changes in each component.
       It also comes with a heatmap, which easily can give an overview of where the code is being refactored or developed the most.

|                                                             CodeSee Example                                                              |                                                              CodeSee Example                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img src=https://user-images.githubusercontent.com/22436080/161400979-1a21703b-9acb-49c6-8d2d-86e94fbf3b90.png width="400" height="300"> | <img src=https://user-images.githubusercontent.com/22436080/161401207-4b1a7fdd-0cfe-470f-99ae-9d5242444cc9.png width="400" height="300"/> |

### Renovate

      Renovate bumping packages and working together with codeQL, and GitGuardian

|                                                                 Renovate                                                                  |                                                                 Renovate                                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img src=https://user-images.githubusercontent.com/22436080/161400772-b5c86a25-5c54-438b-8374-835f9e74538c.png width="500" height="400"/> | <img src=https://user-images.githubusercontent.com/22436080/161400745-5a85b03a-a253-4a54-9826-d87b16b95f50.png width="600" height="300"/> |

&nbsp;
&nbsp;

# **Architecture explanation**

## **A simple Architecture visualization:**

<img src=https://user-images.githubusercontent.com/22436080/159190211-ae8e3cf2-eb51-419f-ac7d-ee71ffc08a92.png width="700" height="400"/>

    The Idea is that I can have several projects, a React Native project, A simple React project, among others, that can be spun up fast and run together with either technology choice in the backend.

&nbsp;
&nbsp;

### Setting up ENV files

    Each of the projects has an ExampleENV.json file.
    This is needed to start the projects


                 #mongo
                 #use admin
                 db.auth("admin", "password")
                 # Show dbs
                 # use db

&nbsp;
&nbsp;

### NVM usage for cross env node versions

    Install & Update Script

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash


    Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

&nbsp;
&nbsp;

## Project structure

This is a list of all the packages in the repo and what they are used for.

| Package                              | Description                                          |
| ------------------------------------ | ---------------------------------------------------- |
| [Frontend]("./frontend/")            | Next.js boilerplate (uses components from storybook) |
| [ReactNative]("./ReactNative/")      | Expo React Native App                                |
| [Express]("./backend/**/")           | Express Boilerplate Api Examples                     |
| [Grapqhl]("./backend/Grapqhl/**")    | A Server with GraphQl and Express                    |
| [Storybook]("./frontend/.storybook") | Storybook running in docker                          |

##### TODO:

    - Future experimentation may happen with VITE, Rollup and other cool tools.

&nbsp;
&nbsp;

# React Next.js (For future projects and easy start-ups)

## **Contents & Setup:**

### Main tools

- [x] [React](https://reactjs.org/docs/getting-started.html)
- [x] [Next.js](https://nextjs.org/)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [React query](https://react-query.tanstack.com/) A simple fetchHook is setup for easy usage
- [x] [Recoil](https://recoiljs.org/) Examples of using a simple state management with a small footprint
- [x] [Tailwind CSS v3](https://tailwindcss.com) with a [basic reset for form styles](https://github.com/tailwindlabs/tailwindcss-forms)
- [x] [Absolute Imports](https://github.com/aleclarson/vite-tsconfig-paths) - Avoid ./././
- [x] [https://testing-library.com/docs/react-testing-library/intro/]Unit-tests & React Testing Library

### Storybook component library

    - Storybook published as an npm package - with framework of choice (or custom build for infinite posibillities.
      &nbsp;

#### Storybook & Unit-tests (Low level)

    - Jest, and React-testing-library. Simple tests that focuses on testing the contracts between the back end and front end layers. Where as solid component testing is abstracted away into the Storybook setup.
      &nbsp;

#### Unit-tests (High Level)

##### Example:

    - Think mocking API responses, checking for loading and error states.

    - Testing a modal is opened or closed as a result of a POST being successful or reverse.

&nbsp;
&nbsp;

### Backend for Next.js Project (Firebase)

- [x] Authentication + OAuth
- [x] Cloud Firestore
- [x] Realtime Database
- [x] Storage

### More Tooling

- [x] [Husky](https://github.com/typicode/husky) - Git pre hooks
- [x] [Prettier-Standard](https://github.com/sheerun/prettier-standard) for formatting and linting
- [x] [lint-staged](https://github.com/okonet/lint-staged) with precommit task for linting
- [x] [Commitizen](https://github.com/commitizen/cz-cli) intercepting your commits to help you add nice formatted messages
- [x] [Absolute Imports](https://medium.com/geekculture/making-life-easier-with-absolute-imports-react-in-javascript-and-typescript-bbdab8a8a3a1) - Avoid ./././

&nbsp;
&nbsp;

## Getting started locally

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

- [x] yarn commit - will run a flow composed of:
- [x] [Husky](https://github.com/typicode/husky)
- [x] Linting with: [ESLint](https://eslint.org), [stylelint](https://stylelint.io) & [Prettier](https://prettier.io)
- [x] [lint-staged](https://github.com/okonet/lint-staged)
- [x] [Commitizen](https://github.com/commitizen/cz-cli)

&nbsp;
&nbsp;

## Getting started with docker

### **Example Docker images**

- [x] React App Docker image - can be started with a parameter based on the chosen backend above, to seed the correct starter data.
- [x] Barebones Express-api docker image
- [ ] Graphql docker image
- [x] Mongodb docker image
- [x] Mongo seed docker image - can be started with a parameter based on the chosen backend above, to seed the correct starter data.

      The express server runs standalone  and connects to the MongoDB
      The GraphQL server runs standalone and connects to the MongoDB

&nbsp;

A ReactJs application containerized for development and production.

    	`Nginx` for serving production build of our ReactJs application.

#### Explaining the environments:

##### Development environment

    - Hot reloading on code changes

##### Production environment

     - Optimized, building static assets and served through a web server or CDN.
     - Here Nginx is used to serve static assets.
     - The Production and development docker configs are as "close" to each other as possible to minimize unforeseen issues once deployed.
     - When the react application is "BUILD", the output is optimized static assets, (html, css and the js file)
     - To serve these files we use Nginx

&nbsp;
&nbsp;

### docker-compose(dev):

    docker-compose -f docker-compose.dev.yml up -d

### docker-compose(prod):

    docker-compose -f docker-compose.prod.yml up --build

### Setup .env file for docker-compose

    The latest Docker Compose allows you to access environment variables from your compose file. So you can source your environment variables, then run Compose like so:

    ```
    set -a
    source /home/mpw/Github/FullStack-PassionProject/FullStack-React-Docker-B

oilerplate/ .env
docker-compose up -d

    ```

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

# Backend Boilerplates (WIP)

### Backend consists of several setups for boilerplate purposes and exploration

    The Backends are connected to the mongoDB which needs to be spun up via the docker image.

### Express API (Todo-App Example)

- [x] [Typescript](https://www.typescriptlang.org/) For types...
- [x] [Express](https://www.npmjs.com/package/express) For magic.
- [x] [Mongoose](https://www.npmjs.com/package/mongoose) For Schemas.
- [x] Login / register - JWT Auth, Nodemon, Cors, Cross-env

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

#### Simple Graphql-apollo-express setup (Todo-App Example)

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

#### Grapqhl Api Example with JWT Auth and various tools.

- [ ] [GraphQL](https://graphql.org/) for backend magic
- [ ] [GraphQL Generator integration ](https://www.graphql-code-generator.com/) for instant generated types for the backend and frontend
- [ ] [GraphQL-Dataloader](https://github.com/graphql/dataloader) for performance reasons and caching
- [ ] [Typescript](https://www.typescriptlang.org/)
- [ ] [TypeScript-Graphql](TypeScript-Graphql) - obviously..
- [ ] [Eslint plugin graphql](https://github.com/apollographql/eslint-plugin-graphql) handy eslint for GraphQL
- [ ] [GraphQl Schema Linter](https://github.com/cjoudrey/graphql-schema-linter) for schema linting
- [ ] Login / register - JWT Auth, Nodemon, Cors, Cross-env

&nbsp;

#### ON HOLD - Microservice preperation - Grapqhl example as bff on top of express backend (Todo-App Example expanded)

- [ ] [GraphQL](https://graphql.org/) for backend magic
- [ ] [Graphql-Request](https://www.npmjs.com/package/graphql-request)
- [ ] [GraphQL Generator integration ](https://www.graphql-code-generator.com/) for instant generated types for the backend and frontend
- [ ] [GraphQL-Dataloader](https://github.com/graphql/dataloader) for performance reasons and caching
- [ ] [Typescript](https://www.typescriptlang.org/)
- [ ] [TypeScript-Graphql](TypeScript-Graphql) - obviously..
- [ ] [Eslint plugin graphql](https://github.com/apollographql/eslint-plugin-graphql) handy eslint for GraphQL
- [ ] [GraphQl Schema Linter](https://github.com/cjoudrey/graphql-schema-linter) for schema linting

&nbsp;
&nbsp;

### GrapQL Experimenting with federated GraphQL Microservices.

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

# (WIP - Work in progress (MVP) - Prometheus & Node Exporter & Grafana setup.

## **Docker compose**

    I have decided to run Prometheus along with Alert manager, NodeExporter, in Docker to allow for easy deployment using Docker Compose.

    Configuring one or more of the applications to communicate is made easy by Docker networking in bridge mode. Since I’m using Docker Compose, we can reach each container via their container name as Docker Compose configures every container to be reachable in the Docker network.

&nbsp;

### **Running locally & Pre-requisites**

    Before we get started installing the Prometheus stack. Ensure you install the latest version of docker and docker-compose on your Docker host machine. Installation & Configuration

&nbsp;

### **Docker-compose builds:**

    - NodeExporter - currently a default version of a node-exporter for prometheus
    - Prometheus
    - AlertManager

&nbsp;

### WIP - **Oauth2 + Proxy (Reverse NGINX proxy)**

    The general idea is quite simple:

    By default, Nginx HTTP server listens for incoming connection and binds on port 80, which represents the standard web port. all things but nginx listen on 127.0.0.1 only;

    all of the above authenticate using proxy_forward and nginx’s auth_request directive.

&nbsp;

## Prometheus Server

    The time series data collected is stored in the **./prometheus** directory.

    We can refer to Prometheus docs on[ storage](https://prometheus.io/docs/prometheus/latest/storage/) to see the on-disk layout of the server’s data directory. The lines –config.file is pretty standard across all web tutorials and –storage.tsdb.retention.time is optional as this determines when to remove old data.

    If not used, the default is 15 days.

    - ports: – “9090:9090” in the docker file is only required If you wish to curl or access http://localhost:**9090**/**
    - Later when he nginx reverse proxy is implemented:
    - We will be able to access Alertmanager in a browser via URL **alertmanager.example.com** because of nginx-proxy.
    - The docker file will contain: expose: with – VIRTUAL_PORT=**9090** for[ the nginx-proxy](https://techsch.com/tutorials/multiple-websites-jwilder-nginx-proxy-letsencrypt).

#####Code example:

            `Example:`
            `\#ports:`
               `\#- "**9090**:**91090900**"`
              `environment:`
               `\- VIRTUAL_HOST=prometheus.example.com`
               `\- VIRTUAL_PORT=**9090**`

&nbsp;

### Prometheus server and prometheus.yml specificities

    targets: ‘localhost:9090’ tells Prometheus server to collect metrics related to **prometheus monitoring operation** with related query expressions starting with **prometheus_** (e.g. *prometheus_build_info* and *prometheus_engine_queries* etc.)

    whereas ‘node-exporter:9100’ scrape the Prometheus server for various hardware monitoring metrics of Linux, including temperature, fans, and voltages.

&nbsp;

## NodeExporter (Node exporter)

    **Node Exporter**, like Alertmanager is optional because Prometheus will run fine without it.

    Node Exporter exposes hardware and kernel related metrics on local and remote hosts. If installed on remote Server A, Prometheus server (using **prometheus.yml**) can be configured to scrape metrics via URL, e.g., **http://<serverA-ip>:9100/metrics**.

    - ports: – “9100:9100” in the docker file is only required If you wish to curl or access **http://localhost:9100/**

    - Later when the nginx reverse proxy is implemented:

    - We will be able to access nodeexporter a browser via URL nodeexporter**.example.com** because of the nginx-proxy.

    - The docker file will contain: expose: with – VIRTUAL_PORT=**9100** for[ the nginx-proxy](https://techsch.com/tutorials/multiple-websites-jwilder-nginx-proxy-letsencrypt).

#####Code example:

              `\#ports:`
               `\#- "**9100**:**9100**"`
               `environment:`
               `\- VIRTUAL_HOST=prometheus.example.com`
               `\- VIRTUAL_PORT=**9100**`

This project is going to act as an express server which utilizes the logClient to connect to prometheus, the idea here is to collect metrics from the mongoDB & of the express / graphQL layer, which contains different endpoints with data.

#####Code example:

         `import express from 'express'`
         `import promClient from 'prom-client'`
         `import { collectMetrics } from './data-fetcher'`
         `promClient.collectDefaultMetrics()`

         `console.log(`
          `Hello folks. We will setup a process that hits an api every 5 minutes, and update prometheus metrics.`
         `)`

         `setInterval(() => {`
          `collectMetrics()`
         `}, 5 * 60 * 1000)`

         `collectMetrics()`

         `const metricServer = express()`

         `metricServer.get('/metrics', (req, res) => {`
          `console.log('Scraped')`
          `res.send(promClient.register.metrics())`
         `})`

         `metricServer.listen(9991, () =>`
          `console.log(🚨 Prometheus listening on port 9991 /metrics)`
         `)`

&nbsp;

## Prometheus Alert Manager

    - In order to use **Alertmanager**, we add it as a Docker service.
    - The data for Alertmanager is stored in the alertmanager directory.
    - Ports: – “9093:9093” in the docker file is only required If you wish to curl or access http://localhost:9093/**
    - Later when the nginx reverse proxy is implemented:
    -  we are able to access Alertmanager in a browser via URL **alertmanager.example.com** because of nginx-proxy.
    - The docker file will contain: expose: with – VIRTUAL_PORT=**9093** for[ the nginx-proxy](https://techsch.com/tutorials/multiple-websites-jwilder-nginx-proxy-letsencrypt).

#####Code example:

         `\#ports:`
            `\#- "9093:9093"`
           `environment:`
            `\- VIRTUAL_HOST=prometheus.example.com`
            `\- VIRTUAL_PORT=9093`

&nbsp;

#### Alerting has been added to the stack, Alerts have been added and are managed via - prometheus/alert.rules

    - AlertManager configuration - alertmanager/config.yml

    - View Prometheus alerts http://<Host IP Address>:9090/alerts

    - View Alert Manager http://<Host IP Address>:9093

&nbsp;

### Running Test Alerts

    *These examples are based on mock data for now which exists within the Node Exporter ( see the section about the Node Exporter above)*

    Examples:

    - *Also check the alerts in both the Alert Manager and Prometheus Alerts just to understand how they flow through the system.*

    - Example: High load test alert - docker run --rm -it busybox sh -c "while true; do :; done"

    - Let this run for a few minutes and you will notice the load alert appear.

##### Example config for alert manager utilizing slack notifications forexample

         `route:`
          `receiver: 'slack_gmail'`

         `receivers:`
          `\- name: 'slack_mxroute'`
           `slack_configs:`
            `\- send_resolved: true`
         ​    `text: "{{ .CommonAnnotations.description }}"`
         ​    `username: 'Prometheus'`
         ​    `channel: '#<channel-name>'`
         ​    `api_url: 'https://hooks.slack.com/services/<webhook-id>'`

           `email_configs:`
            `\- to: hello@gmail.com`
         ​    `from: prometheus_alerts@gmail.com`
         ​    `smarthost: smtp.gmail.com:587`
         ​    `auth_username: prometheus_alerts@gmail.com`
         ​    `auth_password: secret`
         ​    `send_resolved: true`

&nbsp;

### AlertManager and custom webhooks.

    A custom webhook is currently in the works, exposing specific alerts to our incidents management system (see below for explanation)

&nbsp;
