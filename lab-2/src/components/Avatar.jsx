export default function Avatar({ person, size = 64 }) {
  return <img src={person.photo} alt={person.name} width={size} height={size} />
}
