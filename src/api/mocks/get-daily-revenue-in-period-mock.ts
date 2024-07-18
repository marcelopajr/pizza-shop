import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '12/07/2024', receipt: 2000 },
    { date: '13/07/2024', receipt: 800 },
    { date: '14/07/2024', receipt: 8000 },
    { date: '15/07/2024', receipt: 540 },
    { date: '16/07/2024', receipt: 400 },
    { date: '17/07/2024', receipt: 700 },
    { date: '18/07/2024', receipt: 1000 },
  ])
})
