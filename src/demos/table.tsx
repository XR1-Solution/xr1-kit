import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table"

const rows = [
  { service: "atlas-core", status: "running", region: "us-east-1", uptime: "99.9%" },
  { service: "auth-svc", status: "running", region: "us-west-2", uptime: "99.7%" },
  { service: "queue-worker", status: "idle", region: "eu-west-1", uptime: "100%" },
]

export function TableDemo() {
  return (
    <section data-testid="demo-table" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">table</h2>
      <Table>
        <TableCaption>service registry — 3 instances</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>service</TableHead>
            <TableHead>status</TableHead>
            <TableHead>region</TableHead>
            <TableHead>uptime</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.service}>
              <TableCell>{row.service}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.uptime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
