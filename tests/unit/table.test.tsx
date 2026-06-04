import { render, screen } from "@testing-library/react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table"

test("renders table with header and body cells", () => {
  render(
    <Table>
      <TableCaption>deploy log</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>service</TableHead>
          <TableHead>status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>atlas-core</TableCell>
          <TableCell>running</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  )
  expect(screen.getByText("atlas-core")).toBeInTheDocument()
  expect(screen.getByText("running")).toBeInTheDocument()
  expect(screen.getByText("service")).toBeInTheDocument()
  expect(screen.getByText("deploy log")).toBeInTheDocument()
})

test("table head has font-pixel uppercase class", () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead data-testid="th">name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody />
    </Table>,
  )
  expect(screen.getByTestId("th").className).toContain("font-pixel")
  expect(screen.getByTestId("th").className).toContain("uppercase")
})

test("table row has hover class", () => {
  render(
    <Table>
      <TableBody>
        <TableRow data-testid="tr">
          <TableCell>value</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  )
  expect(screen.getByTestId("tr").className).toContain("hover:bg-bg-2")
})
