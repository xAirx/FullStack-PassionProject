import express from 'express'
import promClient from 'prom-client'

import { collectMetrics } from './data-fetcher'

promClient.collectDefaultMetrics()
/* eslint no-console: 0 */
console.log(
  `Hello folks. We will setup a process that hits an api every 5 minutes, and update prometheus metrics.`
)

setInterval(
  () => {
    collectMetrics()
  },
  5 * 60 * 1000
)

collectMetrics()

/* eslint no-console: 0 */
const metricServer = express()
metricServer.get('/metrics', (req, res) => {
  console.log('Scraped')
  res.send(promClient.register.metrics())
})

/* eslint no-console: 0 */
metricServer.listen(9991, () =>
  console.log(`🚨 Prometheus listening on port 9991 /metrics`)
)
