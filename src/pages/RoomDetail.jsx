import { useParams } from 'react-router-dom'

export default function RoomDetail() {
  const { id } = useParams()

  return (
    <section>
      <h1>Room Detail</h1>
      <p>Showing details for room ID: {id}</p>
    </section>
  )
}
