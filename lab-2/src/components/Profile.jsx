import Avatar from './Avatar'

export default function Profile({ person }) {
  return (
    <>
      <Avatar person={person} />
      <h3>{person.name}</h3>
      <p>{person.role}</p>
      {/* <article className="profile" /> */}
    </>
  )
}
