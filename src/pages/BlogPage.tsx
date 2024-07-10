import { useParams } from "react-router-dom"

export default function BlogPage() {
  const { id } = useParams()
  return <div>BlogPage: {id}</div>
}
