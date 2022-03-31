import {
  CovidAllResponse,
  CovidCountryResponses,
  CovidStatesResponse,
} from './response.type'
import Axios from 'axios'
import {
  covid_active_total,
  covid_cases_total,
  covid_deaths_total,
  covid_population_total,
  covid_recovered_total,
  covid_tests_total,
} from './metrics'

export async function fetchCovidAll(): Promise<CovidAllResponse | undefined> {
  const result = await Axios({
    url: 'https://disease.sh/v3/covid-19/all',
  })
  if (result.status === 200) {
    return result.data as CovidAllResponse
  } else {
    return undefined
  }
}

export async function fetchCovidStates(): Promise<
  CovidStatesResponse | undefined
> {
  const result = await Axios({
    url: 'https://disease.sh/v3/covid-19/states',
  })
  if (result.status === 200) {
    return result.data as CovidStatesResponse
  } else {
    return undefined
  }
}

export async function fetchCovidCountries(): Promise<
  CovidCountryResponses | undefined
> {
  const result = await Axios({
    url: 'https://disease.sh/v3/covid-19/countries',
  })
  if (result.status === 200) {
    return result.data as CovidCountryResponses
  } else {
    return undefined
  }
}

export async function collectMetrics() {
  const allResponse = await fetchCovidAll()
  const stateResponse = await fetchCovidStates()
  const countryResponse = await fetchCovidCountries()

  if (allResponse) {
    covid_cases_total.labels('world', 'all').set(allResponse.cases)
    covid_active_total.labels('world', 'all').set(allResponse.active)
    covid_recovered_total.labels('world', 'all').set(allResponse.recovered)
    covid_deaths_total.labels('world', 'all').set(allResponse.deaths)
    covid_tests_total.labels('world', 'all').set(allResponse.tests)
    covid_population_total.labels('world', 'all').set(allResponse.population)
  }

  if (stateResponse) {
    stateResponse.forEach((state) => {
      covid_cases_total.labels('us_state', state.state).set(state.cases)
      covid_active_total.labels('us_state', state.state).set(state.active)
      covid_deaths_total.labels('us_state', state.state).set(state.deaths)
      covid_tests_total.labels('us_state', state.state).set(state.tests)
      covid_population_total
        .labels('us_state', state.state)
        .set(state.population)
    })
  }

  if (countryResponse) {
    countryResponse.forEach((country) => {
      covid_cases_total.labels('country', country.country).set(country.cases)
      covid_active_total.labels('country', country.country).set(country.active)
      covid_recovered_total
        .labels('country', country.country)
        .set(country.recovered)
      covid_deaths_total.labels('country', country.country).set(country.deaths)
      covid_tests_total.labels('country', country.country).set(country.tests)
      covid_population_total
        .labels('country', country.country)
        .set(country.population)
    })
  }

  console.log(`Metrics refreshed!`)
}
