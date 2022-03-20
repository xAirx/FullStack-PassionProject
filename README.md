# **Introduction to project architecture**

## **Passion-Project MonoRepo**

Modern web based applications consist of multiple services. For example, a backend API and a frontend client. In larger projects, where scaling becomes an issue, the services can also be split into multiple microservices. The question arises, how to organize the source code in such a project. One solution is a monorepo, i. e. one repository for all the source code in the project.  

&nbsp;
&nbsp;
&nbsp; 

# **Architecture explanation**

## **A simple Architecture visualization:**

![Fullstack Kubernetes Project(1)](https://user-images.githubusercontent.com/22436080/159171067-9ea15bfb-104a-445c-b650-9724a0cbe38d.png)


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

### **Starting the stack with docker compose up**

Clone the project locally to your Docker host.

If you would like to change which targets should be monitored or make configuration changes edit the /prometheus/prometheus.yml file. The targets section is where you define what should be monitored by Prometheus.

The names defined in this file are actually sourced from the service name in the docker-compose file. If you wish to change names of the services you can add the "container_name" parameter in the docker-compose.yml file.

Once configurations are done let's start it up.

`$ docker-compose up -d`

That's it.  

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

Alerting has been added to the stack, Alerts have been added and are managed via  - prometheus/alert.rules

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

