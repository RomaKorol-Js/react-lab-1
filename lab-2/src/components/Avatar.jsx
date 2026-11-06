export default function Avatar({ person, size = 64 }) {
  return (
    // <header className="header">
    //   <h1>{title}</h1>
    //   <p>{subtitle}</p>
    // </header>
    <img src={person.avatar} alt={person.name} width={size} height={size} />
  )
}
