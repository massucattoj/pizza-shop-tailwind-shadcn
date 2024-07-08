import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Total revenue (Month)
        </CardTitle>
        <DollarSign className="h4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tighter">
              {(monthRevenue.receipt / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth <= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthRevenue.diffFromLastMonth}%{' '}
                  </span>
                  compared to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthRevenue.diffFromLastMonth}%{' '}
                  </span>
                  compared to last month
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}