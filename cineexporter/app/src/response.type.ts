export type CovidAllResponse = {
  updated: number
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  todayRecovered: number
  active: number
  critical: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  population: number
  oneCasePerPeople: number
  oneDeathPerPeople: number
  oneTestPerPeople: number
  activePerOneMillion: number
  recoveredPerOneMillion: number
  criticalPerOneMillion: number
  affectedCountries: number
}

export type CovidStateResponse = {
  state: string
  updated: number
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  active: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  population: number
}

export type CovidStatesResponse = CovidStateResponse[]

export type CovidCountryResponse = {
  updated: number
  country: string
  countryInfo: {
    _id: number
    iso2: string
    iso3: string
    lat: number
    long: number
    flag: string
  }
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  todayRecovered: number
  active: number
  critical: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  population: number
  continent: number
  oneCasePerPeople: number
  oneDeathPerPeople: number
  oneTestPerPeople: number
  activePerOneMillion: number
  recoveredPerOneMillion: number
  criticalPerOneMillion: number
}

export type CovidCountryResponses = CovidCountryResponse[]
