"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pizza, ThumbsUp } from "lucide-react"

interface PizzaOption {
  id: number
  name: string
  description: string
  image: string
  votes: number
}

export default function PizzaVotingApp() {
  const [pizzaOptions, setPizzaOptions] = useState<PizzaOption[]>([
    {
      id: 1,
      name: "Pizza Toni",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      image: "https://images.squarespace-cdn.com/content/v1/5f15a6e3f5bd84341e1d3a4f/54176884-164b-4829-93f4-963dfd5b0bf2/_Group_.png?format=2500w",
      votes: 12,
    },
    {
      id: 2,
      name: "Slice + Soda",
      description: "America's favorite with pepperoni slices and extra cheese",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiacxEzf-q7mV_6MNLjAvtFhmOF9Rjx9QLMQ&s",
      votes: 18,
    },
    
  ])

  const handleVote = (id: number) => {
    setPizzaOptions(pizzaOptions.map((pizza) => (pizza.id === id ? { ...pizza, votes: pizza.votes + 1 } : pizza)))
  }

  // Find the pizza with the most votes
  const mostVoted = [...pizzaOptions].sort((a, b) => b.votes - a.votes)[0]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {pizzaOptions.map((pizza) => (
        <Card key={pizza.id} className="overflow-hidden rounded-lg shadow-md">
          <div className="relative">
            <img src={pizza.image || "/placeholder.svg"} alt={pizza.name} className="w-full h-48 object-contain" />
            {pizza.id === mostVoted.id && (
              <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">Most Popular</Badge>
            )}
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pizza className="h-5 w-5" />
              {pizza.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{pizza.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4 text-primary" />
              <span className="font-medium">{pizza.votes} votes</span>
            </div>
            <Button onClick={() => handleVote(pizza.id)} className="transition-all hover:scale-105">
              Vote
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

