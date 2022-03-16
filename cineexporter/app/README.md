<h1 align="center">
  covid_exporter
</h1>

`covid_exporter` is a TS-Node-based [Prometheus `exporter`][prometheus] providing
real-time updates on the spread of COVID-19 in the world. It fetches its data from 
https://disease.sh/ every 5 minutes, and provide metrics for the following:

* covid_cases_total{type, name}
* covid_active_total{type, name}
* covid_recovered_total{type, name}
* covid_deaths_total{type, name}
* covid_tests_total{type, name}

Where type can be `[world, us_state, country]`

Inspired by: https://github.com/jessestuart/covid_exporter

And builds on the excellent data-wrangling and responsibly-socially-distanced
collaboration that's gone into the [disease.sh api][api] project.

### Cool. What can I build with it?

* Setup a prometheus to scrape this exporter
* Setup a Grafana instance to show this data
Grafana is a great tool for visualizing data.

Now you can save yourself a click to look at World-meter and even send 
slack alarms when the numbers are crossing certain thresholds.

[api]: https://github.com/disease-sh/api
[grafana]: https://grafana.com
[prometheus]: https://prometheus.io/docs/instrumenting/exporters/
