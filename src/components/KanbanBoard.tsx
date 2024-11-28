// src/components/KanbanBoard.tsx
import React, { useEffect, useState } from "react"
import { fetchTickets } from "../utils/api"
import { groupBy, sortTickets } from "../utils/helpers"
import KanbanColumn from "./KanbanColumn"
import { useLocalStorage } from "../hooks/localStorage"
import NavBar from "./NavBar"
import { Status, Ticket, User } from "../utils/types"

const KanbanBoard: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [grouping, setGrouping] = useLocalStorage<
    "status" | "userId" | "priority"
  >("kanban-grouping", "status")
  const [sorting, setSorting] = useLocalStorage<"priority" | "title">(
    "kanban-sorting",
    "priority"
  )
  const [groupedTickets, setGroupedTickets] = useState<
    Record<string, Ticket[]>
  >({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets()
      if (data) {
        setTickets(data.tickets)
        setUsers(data.users)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setGroupedTickets(groupBy(tickets, grouping, users))
  }, [tickets, grouping, sorting])

  console.log(groupedTickets)

  return (
    <>
      <NavBar
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <div
        style={{
          backgroundColor: "rgba(244,246,250,255)",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            overflow: "scroll",
          }}
        >
          {Object.entries(groupedTickets).map(([key, tickets]) => (
            <KanbanColumn
              key={key}
              title={key as Status}
              tickets={sortTickets(tickets, sorting)}
              users={users}
              grouping={grouping}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default KanbanBoard
