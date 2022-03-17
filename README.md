# **Introduction to project architecture**

## **Incidents Portal MonoRepo**

Modern web based applications consist of multiple services. For example, a backend API and a frontend client. In larger projects, where scaling becomes an issue, the services can also be split into multiple microservices. The question arises, how to organize the source code in such a project. One solution is a monorepo, i. e. one repository for all the source code in the project.  

&nbsp;
&nbsp;
&nbsp; 

# **Architecture explanation**

## **A simple Architecture visualization:**

![Architechture](https://user-images.githubusercontent.com/22436080/158710642-2d7eef90-8c5a-49cf-b923-5321ba67dc32.png)

&nbsp;
&nbsp;
&nbsp; 

## **Docker compose**

We have decided to run Prometheus along with Alert manager, CineExporter, and our Incidents Management System in Docker to allow for easy deployment using Docker Compose.

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

- Incidents-server - to be implemented
- Incidents-portal - to be implemented
- CineExporter - currently a default version of a node-exporter for prometheus
- Prometheus
- AlertManager  

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp; 

### **Oauth2 + Proxy (Reverse NGINX proxy)**

https://carlosbecker.com/posts/prometheus-authentication-with-oauth2_proxy/

The general idea is quite simple:

By default, Nginx HTTP server listens for incoming connection and binds on port 80, which represents the standard web port. all things but nginx listen on 127.0.0.1 only;

#### **nginx listens on 80 and proxy_forwards to oauth2_proxy and the other services:**

      - /prometheus forwards to prometheus;
      - /incidentsportal forwards to Incidents portal frontend;
      - /alertmanager forwards to alertmanager;
      - /cineexporter forwards to cineexporter

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

## CineExporter (Node exporter)

**Node Exporter**, like Alertmanager is optional because Prometheus will run fine without it. 

Node Exporter exposes hardware and kernel related metrics on local and remote hosts. If installed on remote Server A, Prometheus server (using **prometheus.yml**) can be configured to scrape metrics via URL, e.g., **http://<serverA-ip>:9100/metrics**.

- ports: – “9100:9100” in the docker file is only required If you wish to curl or access **http://localhost:9100/** 

- Later when the nginx reverse proxy is implemented:

- We will be able to access cineexporterin a browser via URL cineexporter**.example.com** because of the nginx-proxy. 

- The docker file will contain: expose: with – VIRTUAL_PORT=**9100** for[ the nginx-proxy](https://techsch.com/tutorials/multiple-websites-jwilder-nginx-proxy-letsencrypt).
   
#####Code example:
   
              `\#ports:`
               `\#- "**9100**:**9100**"`
               `environment:`
               `\- VIRTUAL_HOST=prometheus.example.com`
               `\- VIRTUAL_PORT=**9100**`

  

This project is going to act as an express server which utilizes the promClient to connect to prometheus, the idea here is to collect metrics from the cine-cloud of which contains different endpoints with data from various machines throughout the world. (up to 700 machines).


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

*These examples are based on mock data for now which exists within the Cine Exporter ( see the section about the Cine Exporter above)*

Examples:

- *Also check the alerts in both the Alert Manager and Prometheus Alerts just to understand how they flow through the system.*

- Example: High load test alert - docker run --rm -it busybox sh -c "while true; do :; done"

- Let this run for a few minutes and you will notice the load alert appear.

 

##### Example config for alert manager utilizing slack


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

## Incidents management system 

### **Introduction** 

- The incidents management system is an express server utilizing different endpoints, meant for being the backbone of the CinePortal (See below).
- A mongo DB is connected to this specific docker instance, also dockerized 
- Data is seeded via a webhook from AlertManager, of which based on rules will send payloads containing information needed for the CinePortal microfrontends to handle based on forexample region, such as denmark, finland, germany etc.
- The idea of the cine portal is to visualize tickets based on the flow from all of the above services.
      
### Considerations of an aggretation layer - BFF (GraphQL)
- Since we are working with over 700 machines, internationally, a lot of data is to be expected.
- Most of the data is meant to be filtered heavily in our Incidents management system. combining data from our cineExporter, scraping the cine-cloud services but also various other metrics.
- An idea would be to work with graphql or simple express depending on the situation.
- Utilizing the nature of graphQL  BFF we are able to make simple queries and handle the data filtering in a simple and easy way.

&nbsp;
&nbsp;
&nbsp;

### **Specs**

Track incidents: open, inprogress, closed Notify by e-mail when a new incident is opened Provide endpoints (or event listeners) allowing other services to open and close incidents Provide endpoints allowing a cloud-based UI to visualise the tickets

&nbsp;
&nbsp;
&nbsp;
  
### **Objectives:**

- Provide a better overview with alerts of problems on our web-based admin platform.
- This is handled front-end only for now. It should be tracked server side as well, so the right people can be alerted fast. Right now we have to wait for someone to log into cloud and notice the errors.
- Track incidents: when a machine goes into a failed state (e.g. wrong resolution or game download errors) the starttime of this incident state should be noted.
- Notify as fast as possible: someone should be notified about this incident, so they have a better chance of fixing it before next show.

&nbsp;
&nbsp;
&nbsp;
  
Examples

- A power outage turns off all equipment in the cinema - including the cinemataztic box. The cinema forgets to turn on cinemataztic box again. Result: the game fails to start at the next show, resulting in black screen for the guests.
- Stop the node_exporter container and you should notice shortly the alert arrive in the incidents Portal as well as an email to the configured email.
- The machine is disconnected from the projector, and upon connecting again it fails to set the correct image resolution on the video output. Result: The game doesn’t look right when shown to the audience (perhaps cropped or only covering 1/2 of the screen).
- We regularly push new games to the units in the cinema halls. The units usually just downloads these automatically. However, sometimes this goes wrong e.g. due to bad internet connection in the cinema or capacity issues on our severs. Result: The game is not shown to the cinema audience.

###### **To read more see the original repo here:**

###### [**https://github.com/cinemataztic/incidents**](https://github.com/cinemataztic/incidents)

  
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## **Incidents management system
      
### Prerequisites & Setup**

### **MongoDB**

- Endpoints are provided allowing a cloud-based UI (See "incident-portal" further down) to visualise the tickets via MongoDB
- Mongo DB is part of the stack and runs in a docker container.
- Mongodb is used to store information regarding ongoing incidents with players which are triggered on the field.
- Mongodb stores the following information with regards to an incident such as the following, a. Ticket ID b. Creation Date c. Updated Date d. Cinema ID e. Cinema Name f. Screen ID g. Screen Name h. Error ID i. Error Description
- A detailed overview of the model used to specify the above mentioned information can be found under server/models
- Responded information is used to populate information for incident email-notification and management.

### **Mongo Seed**

 Runs in a docker container and seeds our mongoDB when we start the stack up.

### **Send Grid**

- A SendGrid API key is needed.
- SendGrid is used as a platform to transport information about the incident to the concerned person(s) via email.
- Basic usage pertains to installation of the SendGrid package using npm install nodemailer-sendgrid-transport.

### **Nodemailer**

- Used nodemailer to send emails.

- Basic usage pertains to installation of the nodemailer package using npm install nodemailer.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## IncidentPortal (Ticket management system)

The idea here is to visualize tickets based on the flow from all of the above services.

Since we are working with over 700 machines, internationally, a lot of data is to be expected.

As most of the data shaping the incidents as a whole is meant to be filtered heavily in our Incidents management system.

This means that we can have the frontend as dumb as possible and as performant when it comes to doing get calls
      
&nbsp;
&nbsp;
&nbsp;

### A microfrontend for each region supported by a BFF aggregation layer (GraphQL)
 
Thoughts and considerations are in discussion of a microfrontend approach, each hitting an express endpoint in our incident management system (explained above)
      
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
&nbsp;
&nbsp;
  
## Future development: CI/CD with gitlab

https://www.padok.fr/en/blog/ci-cd-monorepo-node-gitlab

https://faun.pub/full-ci-cd-with-docker-github-actions-digitalocean-droplets-container-registry-db2938db8246
