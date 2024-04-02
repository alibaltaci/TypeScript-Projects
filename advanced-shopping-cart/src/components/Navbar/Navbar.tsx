import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { navbarData } from "../../data/moduleData.ts"
import { useShoppingCart } from "../../context/ShoppingCartContext.tsx"

const Navbar = () => {

    const { openCart, cartQuantity } = useShoppingCart()

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container >
            <Nav className="me-auto">
                {
                    navbarData.map((el: {
                        to: string;
                        page: string;
                    }) => {
                        const { to, page } = el;
                        return(
                            <Nav.Link key={to} to={to} as={NavLink}>
                                {page}
                            </Nav.Link>
                        )
                    })
                }
            </Nav>
            {cartQuantity > 0 && <Button 
                onClick={openCart}
                style={{width: "3rem", height: "3rem", position:"relative", padding:0}}
                variant="outline-primary"
                className="rounded-circle"
            >
                <svg height="30px" width="30px" version="1.1" id="_x32_" viewBox="0 0 512 512" 
                    style={{
                        position:"absolute", 
                        top:"8px", 
                        left:"8px",
                        fill:"blue",
                    }} 
                >
                    <g>
                    <path className="st0" d="M486.998,140.232c-8.924-12.176-22.722-19.878-37.785-21.078l-311.616-24.68l-5.665-32.094   c-5.179-29.305-28.497-51.998-57.932-56.352l-5.662-0.845L34.65,0.185c-9.385-1.378-18.118,5.09-19.51,14.475   c-1.395,9.393,5.086,18.127,14.471,19.514v-0.008l39.357,5.834l0.009,0.026c14.788,2.164,26.526,13.586,29.131,28.324   l53.338,302.302c5.005,28.375,29.647,49.047,58.461,49.056h219.192c9.49,0,17.176-7.694,17.176-17.172   c0-9.486-7.686-17.18-17.176-17.18H209.906c-12.133,0.009-22.536-8.725-24.642-20.672l-7.461-42.299h244.342   c24.189,0,45.174-16.691,50.606-40.262l22.967-99.523C499.118,167.887,495.93,152.424,486.998,140.232z"/>
                    <path className="st0" d="M223.012,438.122c-20.402,0-36.935,16.554-36.935,36.948c0,20.394,16.533,36.931,36.935,36.931   c20.401,0,36.944-16.537,36.944-36.931C259.955,454.676,243.413,438.122,223.012,438.122z"/>
                    <path className="st0" d="M387.124,438.122c-20.406,0-36.935,16.554-36.935,36.948c0,20.394,16.529,36.931,36.935,36.931   c20.402,0,36.944-16.537,36.944-36.931C424.068,454.676,407.526,438.122,387.124,438.122z"/>
                    </g>
                </svg>
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color:"white", 
                        width:"1.5rem", 
                        height:"1.5rem",
                        position:"absolute",
                        bottom:0,
                        right:0,
                        transform:"translate(25%, 25%)",
                    }}
                >
                    { cartQuantity }
                </div>
            </Button>}
        </Container>
    </NavbarBs>
  )
}

export default Navbar