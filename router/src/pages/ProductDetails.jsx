import { useParams } from "react-router-dom"

export default function ProductDetails() {
  const params = useParams();


  return (
    <>
      <h1>{params.id}</h1>
      <h1>Product Details Page</h1>
    </>
  )
}