import ProfileCard from './components/ProfileCard.jsx'

const technologies = ['React', 'TypeScript', 'Node']

function App() {
  return (
    <main className="app">
      <ProfileCard name="Roma" group="KH-31" technologies={technologies} />
    </main>
  )
}

export default App
