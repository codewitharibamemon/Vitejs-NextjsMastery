import MenuItem from "./MenuItem"
import BiryaniSpe from '../assets/biryani.jpg'
import Handi from '../assets/handi.png'
const Cart = () => {
  return (
    <div>
        <section>
  <h1>Cart</h1>
  <ul>
    <MenuItem item={{
        name : "biryani",
        quantity : 2,
        image : BiryaniSpe
    }} />
     <MenuItem item={{
        name : "handi",
        quantity : 3,
        image : Handi
    }} />
  </ul>
  </section>
    </div>
  )
}

export default Cart
