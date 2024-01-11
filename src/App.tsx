import { Snippet } from "@nextui-org/react"

function App() {

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <div className="brand_container border-4 border-white w-fit px-2 py-2">
        <h1 className="font-['Tektur'] text-5xl uppercase">planifi</h1>
      </div>
      <p className="font-sans text-7xl capitalize text-center my-8">coming soon</p>
      <p>reach out @ <Snippet variant="bordered" symbol="">contact@planifi.io</Snippet></p>
    </main>
  )
}

export default App
