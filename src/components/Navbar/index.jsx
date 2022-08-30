import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Filters from './filters'
import { useNavigate } from 'react-router-dom';



export default function MainNavbar() {    

    const [searchText, setSearchText] = useState('')      
    const navigateTo = useNavigate();

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){          
            navigateTo(`/Search/${searchText}`)
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>       
            <Navbar.Brand href="/">MOVIE API</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Movies" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/MoviesTop250">Top 250</NavDropdown.Item>
                            <NavDropdown.Item href="/MoviesPopular">Most Popular</NavDropdown.Item>                    
                            <NavDropdown.Item href="/MoviesComingSoon">Coming Soon</NavDropdown.Item>      
                        </NavDropdown>
                        <NavDropdown title="Series" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/SeriesTop250">Top 250</NavDropdown.Item>
                            <NavDropdown.Item href="/SeriesPopular">Most Popular</NavDropdown.Item>                                                
                        </NavDropdown>  
                    </Nav>
                    <Nav>
                        <Filters />
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}     
                                onKeyPress={handleKeyPress}                           
                            />
                            <Button 
                                variant="outline-light"
                                href={`/Search/${searchText}`}
                            >
                                Search
                            </Button>
                        </Form>
                    </Nav>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

