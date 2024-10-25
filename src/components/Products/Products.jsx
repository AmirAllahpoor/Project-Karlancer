import ProductCard from "../ProductCard/ProductCard"

export default async function Products() {
  // گرفتن داده محصولات از سمت سرور
    const data = await fetch('http://localhost:4000/Products')
    const response = await data.json()

  return (
    <div className="relative transition-all ease-linear duration-[0.4s]">
      {
        response.map((Card) => (
          <ProductCard name={Card.name} color={Card.color} details={Card.details} count={Card.count} date={Card.date} price={Card.price} phonenumber={Card.phonenumber} />
        ))
      }
    </div>
  )
}
