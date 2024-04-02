import { Offcanvas, Stack } from "react-bootstrap"
import { CartItem } from ".."
import { formatCurrency } from "../../utils"
import { storePageDataItems } from "../../data/moduleData"
import { useShoppingCart } from "../../hooks/useShoppingCart"

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {

    const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body  >
            <Stack gap={3}>
                {cartItems.map( item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </Stack>
            <div className="fw-bold fs-5 text-end mt-4">
                Total: { formatCurrency( cartItems.reduce( ( total, el ) => {
                    const item = storePageDataItems.find( i => i.id === el.id )
                    return total + (item?.price || 0) * el.quantity
                }, 0))}
            </div>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart