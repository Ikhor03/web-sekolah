import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../asset/logo.png';

const Navigation = () => {

    return (
        <Navbar bg='light' expand="lg" sticky ='top'>
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt='SMKADEMY' width={45}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Beranda</Nav.Link>
                        <Nav.Link href="#action1">Tentang</Nav.Link>
                        <NavDropdown title="Jurusan" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Ilmu Komputer</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Teknik Mesin
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Akuntansi
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
export default Navigation;