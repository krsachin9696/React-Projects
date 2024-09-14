import { useParams } from "react-router-dom"


export default function EventsDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Events Details Page</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  )
}