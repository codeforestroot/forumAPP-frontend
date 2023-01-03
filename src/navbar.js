import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function Navbarr() {
    return (
        <div>
            <Navbar  >
                <Container className='mainnav'>
                    <Navbar.Brand href="#home" className='navb '>ABC Laptop co.</Navbar.Brand>
                    <Nav className='wrap'>
                        {


                            localStorage.getItem("user-info") ?
                                <>
                                    <Link to="/Login"> Login</Link>
                                    <Link to="/Signup"> Sign up</Link>
                                </>
                                :
                                <>

                                    <Link to="/Newdis"> Begin disscussion</Link>
                                </>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navbarr