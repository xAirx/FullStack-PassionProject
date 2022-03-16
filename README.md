# Introduction to project architecture 

## Incidents Portal MonoRepo

Modern web based applications consist of multiple services. For example, a backend API and a frontend client. In larger projects, where scaling  becomes an issue, the services can also be split into multiple  microservices. The question arises, how to organize the source code in  such a project. One solution is a monorepo, i. e. one repository for all the source code in the project.

# Architecture explanation

## A simple Architecture visualization:


## Docker compose 

We have decided to run Prometheus along with Alert manager, CineExporter, and our Incidents Management System in Docker to allow for easy deployment using Docker Compose.  

Configuring one or more of the applications to communicate is made easy by Docker networking in bridge mode. 
Since I’m using Docker Compose, we can reach each container via their container name as Docker Compose configures every container to be reachable in the Docker network.

### Running locally & Pre-requisites

Before we get started installing the Prometheus stack. Ensure you install the latest version of docker and docker-compose on your Docker host machine.
Installation & Configuration

### Starting the stack with docker compose up

Clone the project locally to your Docker host.

If you would like to change which targets should be monitored or make configuration changes edit the /prometheus/prometheus.yml file. The targets section is where you define what should be monitored by Prometheus.

The names defined in this file are actually sourced from the service name in the docker-compose file. If you wish to change names of the services you can add the "container_name" parameter in the docker-compose.yml file.

Once configurations are done let's start it up.

`$ docker-compose up -d`

That's it.

### Docker-compose builds:

- Incidents-server - to be implemented
- Incidents-portal - to be implemented
- CineExporter - currently a default version of a node-exporter for prometheus 
- Prometheus
- AlertManager

### Oauth2 + Proxy (Reverse NGINX proxy)

https://carlosbecker.com/posts/prometheus-authentication-with-oauth2_proxy/

The general idea is quite simple:

By default, Nginx HTTP server listens for incoming connection and binds on port 80, which represents the standard web port.
all things but nginx listen on 127.0.0.1 only;

#### nginx listens on 80 and proxy_forwards to oauth2_proxy and the other services:

- /prometheus forwards to prometheus;
- /incidentsportal forwards to Incidents portal frontend;
- /alertmanager forwards to alertmanager;
- /cineexporter forwards to cineexporter

all of the above authenticate using proxy_forward and nginx’s auth_request directive.



## Prometheus Server

### important configuration files in the project

- docker-compose.yml – Launch Prometheus server  to scrape real-time metrics, Alertmanager to handle alerts sent by  client applications and Node Exporter to expose hardware and kernel  related metrics on Prometheus server for self-monitoring.
- prometheus.yml– Configurations for Prometheus server.
- config.yml – Configurations for applications such as Slack, PagerDuty and Email for Alertmanager to route alerts
- alert.rules – What metrics to monitor? How long is the duration before it is considered *DOWN*? What message to send out?



## CineExporter

Node Exporter exposes hardware and  kernel related metrics on local and remote hosts. 

If installed on remote Server A, Prometheus server (using **prometheus.yml**) can be configured to scrape metrics via URL, e.g., **http://<serverA-ip>:9100/metrics**. 

To run Node Exporter on Prometheus server itself, we add the final  third Docker Compose service. 



## Incidents management system 

### Specs

Track incidents: open, inprogress, closed
Notify by e-mail when a new incident is opened
Provide endpoints (or event listeners) allowing other services to open and close incidents
Provide endpoints allowing a cloud-based UI to visualise the tickets

### Objectives:

Provide a better overview with alerts of problems on our web-based admin platform. 

This is handled front-end  only for now. It should be tracked server side as well, so the right people can be alerted fast. Right now we have to wait for someone to log into cloud and notice the errors.

Track incidents: when a machine goes into a failed state (e.g. wrong resolution or game download errors) the starttime of this incident state should be noted.

Notify as fast as possible: someone should be notified about this incident, so they have a better chance of fixing it before next show.

Examples

- A power outage turns off all equipment in the cinema - including the cinemataztic box.
  The cinema forgets to turn on cinemataztic box again. Result: the game fails to start at the next show, resulting in black screen for the guests.
- Stop the node_exporter container and you should notice shortly the alert arrive in the incidents Portal as well as an email to the configured email.
- The machine is disconnected from the projector, and upon connecting again it fails to set the correct image resolution on the video output. Result: The game doesn’t look right when shown to the audience (perhaps cropped or only covering 1/2 of the screen).
- We regularly push new games to the units in the cinema halls. The units usually just downloads these automatically. However, sometimes this goes wrong e.g. due to bad internet connection in the cinema or capacity issues on our severs. Result: The game is not shown to the cinema audience.

###### To read more see the original repo here:

###### https://github.com/cinemataztic/incidents



### Prerequisites & Setup 

### MongoDB

Endpoints are provided allowing a cloud-based UI (See "incident-portal" further down) to visualise the tickets via MongoDB

Mongo DB is part of the stack and runs in a docker container.

Mongodb is used to store information regarding ongoing incidents with players which are triggered on the field.

Mongodb stores the following information with regards to an incident such as the following,
`a. Ticket ID`
`b. Creation Date`
`c. Updated Date`
`d. Cinema ID`
`e. Cinema Name`
`f. Screen ID`
`g. Screen Name`
`h. Error ID`
`i. Error Description`

A detailed overview of the model used to specify the above mentioned information can be found under server/models

Responded information is used to populate information for incident email-notification and management.

### Mongo Seed

​     Runs in a docker container and seeds our mongoDB when we start the stack up.

### Send Grid

- A SendGrid API key is needed.
- SendGrid is used as a platform to transport information about the incident to the concerned person(s) via email.
- Basic usage pertains to installation of the SendGrid package
  using npm install nodemailer-sendgrid-transport.

### Nodemailer

- Used nodemailer to send emails.

- Basic usage pertains to installation of the nodemailer package
  using npm install nodemailer.

  

## Prometheus Alert Manager & Incidents management system configurations

The incidents server is started

Alerting has been added to the stack,  Alerts have been added and are managed via   - prometheus/alert.rules

Incidents Server configuration - alertmanager/config.yml (The webhook for posting to The incidents server.)

- View Prometheus alerts http://<Host IP Address>:9090/alerts
- View Alert Manager http://<Host IP Address>:9093
- View Incidents server: http://********

### Running Test Alerts

These examples are based on mock data for now which exists within the Cine Exporter ( see the section about the Cine Exporter above)

Examples:

Also check the alerts in both the Alert Manager and Prometheus Alerts just to understand how they flow through the system.

- Example: High load test alert - docker run --rm -it busybox sh -c "while true; do :; done"
  Let this run for a few minutes and you will notice the load alert appear.



## IncidentPortal (Ticket management system)



## Troubleshooting

Write more here



## CI/CD with gitlab

https://www.padok.fr/en/blog/ci-cd-monorepo-node-gitlab
https://faun.pub/full-ci-cd-with-docker-github-actions-digitalocean-droplets-container-registry-db2938db8246
