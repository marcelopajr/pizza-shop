import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters</span>
          <Input placeholder="Client name" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identifier</TableHead>
                <TableHead className="w-[180px]">Done/Completed</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="w-[140px]">Total order amount</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Order details</span>
                    </Button>
                  </TableCell>
                  <TableCell className="font-mono text-xs font-medium">
                    duh21u3ha8h
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    15 minutes ago
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                      <span className="font-medium text-muted-foreground">
                        Pending
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">Marcelo Almeida</TableCell>
                  <TableCell className="font-medium">$ 50.00</TableCell>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <ArrowRight className="mr-2 h-3 w-3" />
                      Approve
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="xs">
                      <X className="mr-2 h-3 w-3" />
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
