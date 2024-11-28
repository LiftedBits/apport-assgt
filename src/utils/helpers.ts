import { Ticket, User } from "./types"

// src/utils/helpers.ts
export const groupBy = (tickets: Ticket[], key: string, users: User[]) => {
  if (key === "userId") {
    return tickets.reduce((acc: any, ticket: any) => {
      const user = users.find((user) => user.id === ticket.userId)
      const group = user ? user.name : "Unassigned"
      if (!acc[group]) acc[group] = []
      acc[group].push(ticket)
      return acc
    }, {})
  }
  return tickets.reduce((acc: any, ticket: any) => {
    const group = isNullOrUndefined(ticket[key]) ? "Unassigned" : ticket[key]
    if (isNullOrUndefined(acc[group])) acc[group] = []
    acc[group].push(ticket)
    return acc
  }, {})
}

export const sortTickets = (tickets: any[], sortBy: "priority" | "title") => {
  return [...tickets].sort((a, b) => {
    if (sortBy === "priority") return b.priority - a.priority
    if (sortBy === "title") return a.title.localeCompare(b.title)
    return 0
  })
}

export const getUserById = (users: User[], id: string) => {
  return users.find((user) => user.id === id)
}

export const isNullOrUndefined = (value: any) => {
  return value === null || value === undefined
}
