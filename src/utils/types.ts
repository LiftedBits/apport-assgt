export type Ticket = {
  id: string
  priority: number
  status: Status
  tag: string[]
  title: string
  userId: string
}

export type Status = "Todo" | "In progress" | "Done" | "Backlog" | "Cancelled"

export type User = {
  id: string
  available: boolean
  name: string
}
