import { Gauge } from 'prom-client'

export const covid_cases_total = new Gauge({
  name: 'covid_cases_total',
  help: 'Total number of covid cases; type = [world, us_states, country]',
  labelNames: ['type', 'name'],
})

export const covid_active_total = new Gauge({
  name: 'covid_active_total',
  help:
    'Total number of covid active cases; type = [world, us_states, country]',
  labelNames: ['type', 'name'],
})

export const covid_recovered_total = new Gauge({
  name: 'covid_recovered_total',
  help:
    'Total number of covid recovered cases; type = [world, us_states, country]',
  labelNames: ['type', 'name'],
})

export const covid_deaths_total = new Gauge({
  name: 'covid_deaths_total',
  help: 'Total number of covid deaths; type = [world, us_states, country]',
  labelNames: ['type', 'name'],
})

export const covid_tests_total = new Gauge({
  name: 'covid_tests_total',
  help: 'Total number of covid tests; type = [world, us_states, country]',
  labelNames: ['type', 'name'],
})

export const covid_population_total = new Gauge({
  name: 'covid_population_total',
  help:
    'Population number, useful for calculating cases per million ; type = [world, us_states, country]',
  labelNames: ['type', 'name'],
})
