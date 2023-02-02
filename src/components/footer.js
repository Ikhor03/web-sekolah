import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../asset/logo.png'

function Footer() {
    return (
        <div>
            <div className='row-12 d-flex justify-content-center'>
                <img src={logo} alt='logo' />
            </div>
            <Navbar>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text className='text-center'>
                            Jakarta. Copyright reserved <a href="#login" className='text-decoration-none'>2022</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;