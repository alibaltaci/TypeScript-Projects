import { Button, Stack } from "react-bootstrap"
import {storePageDataItems} from "../../data/moduleData"
import { formatCurrency } from "../../utils"
import { useShoppingCart } from "../../hooks/useShoppingCart"

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }:CartItemProps) => {

    const { removeFromCart } = useShoppingCart()

    const item = storePageDataItems.find( i => i.id === id)

    if(item === null) return null

  return (
    <Stack 
        direction="horizontal" 
        gap={2} 
        className="d-flex align-items-center"
    >
        <img src={item?.imgUrl} 
            style={{
                width:"125px",
                height: "75px",
                objectFit: "cover"
            }}
        />
        { item &&
            <>
                <div className="me-auto">
                    <div>
                        { item?.name } 
                        { quantity > 1 && <span
                            className="text-muted"
                            style={{ fontSize:".65rem" }}
                        >
                            X {quantity}
                        </span> }
                    </div>
                    <div className="text-muted" 
                        style={{fontSize: ".75rem"}}
                        >
                        { formatCurrency(item.price) }
                    </div>
                </div>
                <div>{ formatCurrency(item.price * quantity) }</div> 
                <Button variant="outline-danger" size="sm" 
                onClick={ () => removeFromCart(item.id) }
                >&times;</Button>
            </>
        }
    </Stack>
  )
}

export default CartItem