import {Container,Nav,Stack,Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom"



const NavBar = () => {
    return (
        <Navbar bg="dark" className='mb-4' style={{height:"2.75rem"}}>
            <Container>
                <h2>
                <Link to="/" className='link-light text-decoration-none'>Chat App</Link>
                </h2>
                <span className="text-warning">Logged in as</span>
                <Nav>
                    <Stack direction="horizontal" gap="3">
                    <Link to="/login" className='link-light text-decoration-none'>Login</Link>
                    <Link to="/register" className='link-light text-decoration-none'>Register</Link>
                        

                    </Stack>
                </Nav>
            </Container>
            
    </Navbar>);
}
 
export default NavBar;