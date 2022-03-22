# **Introduction to project architecture**

## **Passion-Project MonoRepo**

Modern web based applications consist of multiple services. For example, a backend API and a frontend client. In larger projects, where scaling becomes an issue, the services can also be split into multiple microservices. The question arises, how to organize the source code in such a project. One solution is a monorepo, i. e. one repository for all the source code in the project.  

&nbsp;
&nbsp;
&nbsp; 

# **Architecture explanation**

## **A simple Architecture visualization:**

![Fullstack Kubernetes Project(3)](https://user-images.githubusercontent.com/22436080/159190211-ae8e3cf2-eb51-419f-ac7d-ee71ffc08a92.png)

&nbsp;
&nbsp;
&nbsp; 

## docker-compose(dev):

    docker-compose -f docker-compose.dev.yml up --build

##  docker-compose(prod):

    docker-compose -f docker-compose.prod.yml up --build



# React boilerplate (For future projects and easy start-ups


# React boilerplate (For future projects and easy start-ups

## **Contents & Setup:**

##  React BoilerPlate

### Main tools
- [React](https://reactjs.org/docs/getting-started.html) 
- [Typescript](https://www.typescriptlang.org/) 
- [Apollo-link-rest (Graphql)](https://www.apollographql.com/docs/react/api/link/apollo-link-rest/)  A REST endpoint wrapper with GraphQL client on top
- [React query](https://react-query.tanstack.com/) A simple fetchHook is setup for easy usage
- [Recoil](https://recoiljs.org/) For simple state management with a small footprint
- [React Router](https://reactrouter.com/web/guides/quick-start) for routing
- [Tailwind CSS v3](https://tailwindcss.com) with a [basic reset for form styles](https://github.com/tailwindlabs/tailwindcss-forms)
- [PWA](https://github.com/antfu/vite-plugin-pwa) with [17/17 Lighthouse score](https://web.dev/pwa-checklist/).
- [Vite](https://vitejs.dev/guide/) for bundling and codesplitting (goodbye webpack)
- [Absolute Imports](https://github.com/aleclarson/vite-tsconfig-paths) - Avoid ./././

### More Tooling
-   [Husky](https://github.com/typicode/husky) - Git pre hooks
- [Prettier-Standard](https://github.com/sheerun/prettier-standard) for formatting and linting
- [lint-staged](https://github.com/okonet/lint-staged) with precommit task for linting
- [Commitizen](https://github.com/commitizen/cz-cli) intercepting your commits to help you add nice formatted messages
- [Renovate](https://github.com/renovatebot/renovate) for automated dependency updates
- [git-notify](https://github.com/jevakallio/git-notify) for communicating important updates during git pull to your team
- [git-standup](https://github.com/kamranahmedse/git-standup) to recall what you did yesterday
-  Github Actions CI preconfigured for running lint + tests (Barebone (ready for adaptation for many usecases)
- [dependency updates](https://renovatebot.com/), [CodeQL Analysis](https://securitylab.github.com/tools/codeql), running tests and code coverage with [Codecov](https://about.codecov.io/).

## Setup


## Getting started (without docker)

- [ ] `yarn standup` (receive a pretty list of things you did on your last working day)
- [ ] `yarn dev` (standard dev server) -  start a development server with hot reload.
- [ ]  `yarn format` (format and lint the codebase following prettier-standard rules)

- [ ] yarn commit - will run a flow composed of:
-   [Husky](https://github.com/typicode/husky)
-   Linting with: [ESLint](https://eslint.org), [stylelint](https://stylelint.io) & [Prettier](https://prettier.io)
-   [lint-staged](https://github.com/okonet/lint-staged)
-   [Commitizen](https://github.com/commitizen/cz-cli)

	
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp; 


### **Docker images**

-   React docker image 
-   React-native docker image
-   Mongodb docker image
-   Mongo seed docker image
-   Simple-express-api docker image


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


## Future additions:


### Storybook component library
- Storybook published as an npm package - with framework of choice (or custom build for infinite posibillities.



### Storybook & Unit-tests (Low level)

 - Jest, and React-testing-library. Simple tests that focuses on testing the contracts between the back end and front end layers. Where as solid component testing is abstracted away into the Storybook setup.


### Unit-tests (High Level)
##### Example: 

 - Think mocking API responses, checking for loading and error states.
 
 - Testing a modal is opened or closed as a result of a POST being successful or reverse.



	
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
&nbsp;
&nbsp; 

### **Running locally & Pre-requisites**

	Before we get started installing the Prometheus stack. Ensure you install the latest version of docker and docker-compose on your Docker host machine. Installation & Configuration  

&nbsp;
&nbsp;
&nbsp;

### **Docker-compose builds:**

	- NodeExporter - currently a default version of a node-exporter for prometheus
	- Prometheus
	- AlertManager  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp; 

### WIP - **Oauth2 + Proxy (Reverse NGINX proxy)**

	The general idea is quite simple:

	By default, Nginx HTTP server listens for incoming connection and binds on port 80, which represents the standard web port. all things but nginx listen on 127.0.0.1 only;

	all of the above authenticate using proxy_forward and nginx’s auth_request directive.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
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
&nbsp;
&nbsp; 

### Prometheus server and prometheus.yml specificities

	targets: ‘localhost:9090’ tells Prometheus server to collect metrics related to **prometheus monitoring operation** with related query expressions starting with **prometheus_** (e.g. *prometheus_build_info* and *prometheus_engine_queries* etc.) 

	whereas ‘node-exporter:9100’ scrape the Prometheus server for various hardware monitoring metrics of Linux, including temperature, fans, and voltages.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
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
&nbsp;
&nbsp;
&nbsp;
&nbsp;
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
&nbsp;
&nbsp;

#### Alerting has been added to the stack, Alerts have been added and are managed via  - prometheus/alert.rules

	- AlertManager configuration - alertmanager/config.yml

	- View Prometheus alerts http://<Host IP Address>:9090/alerts

	- View Alert Manager http://<Host IP Address>:9093

&nbsp;
&nbsp;
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
&nbsp;
&nbsp;

### AlertManager and custom webhooks.

	A custom webhook is currently in the works, exposing specific alerts to our incidents management system (see below for explanation)

&nbsp;
&nbsp;
&nbsp;
&nbsp;
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
      
## Express, and MongoDB setup
      
### Prerequisites & Setup**

### **MongoDB**

	- Mongo DB is part of the stack and runs in a docker container.
	- Mongodb is used to store information 

### **Mongo Seed**

	 Runs in a docker container and seeds our mongoDB when we start the stack up.

### **Mongo Express**

	 Runs in a docker container and gives a GUI during development phase for quick testing and debugging.

&nbsp;
&nbsp;
&nbsp;

### A microfrontend for each project supported by a BFF aggregation layer (GraphQL)

	Thoughts and considerations are in discussion of a microfrontend approach, each hitting an express endpoint in our system (explained above)

	Utilizing the nature of graphQL  BFF we are able to make simple queries and handle the data filtering in a simple and easy way.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Troubleshooting

	Write more here

&nbsp;
&nbsp;
&nbsp;
&nbsp;

