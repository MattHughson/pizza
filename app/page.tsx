import PizzaVotingApp from "@/components/pizza-voting-app"
import Logo from "@/components/logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#D9EEFF]">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-start mb-6">
          <Logo />
        </div>
        <div className="bg-[#D9EEFF] rounded-lg p-6">
          <h1 className="text-4xl font-bold text-center mb-8"><span className="heading-emphasis-gradient-blue">Joyful Headless</span> Present's React Montreal Pizza Contest</h1>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Vote for your favorite pizza! Click on the "Vote" button under your preferred pizza to show your support.
            The most popular pizza will be crowned the champion!
          </p>
          <PizzaVotingApp />
        </div>
      </div>
    </div>
  )
}
