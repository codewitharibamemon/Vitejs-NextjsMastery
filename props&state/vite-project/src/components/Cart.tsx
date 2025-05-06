import MenuItem from "./MenuItem"

const Cart = () => {
  return (
    <div>
        <section>
  <h1>Cart</h1>
  <ul>
    <MenuItem item={{
        name : "biryani",
        quantity : 2
    }} />
  </ul>
  </section>
    </div>
  )
}

export default Cart
