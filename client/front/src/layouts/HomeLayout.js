import React, {PropTypes} from 'react'
import {Navbar, Nav, NavItem, FormGroup, FormControl, MenuItem, Button, Grid, Row, Col} from 'react-bootstrap';
import style from '../styles/Home.css'

// import NavBar from '../components/NavBar'

class HomeLayout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            navIndex: 0,
            navBar : [
                {
                    'name': 'BLOG',
                    'path': '/',
                    'index': 0
                },
                {
                    'name': 'TAGS',
                    'path': '/tags',
                    'index': 1
                },
                {
                    'name': 'ABOUT ME',
                    'path': '/about',
                    'index': 2
                }
            ]
        };
    }

    changeNavIndex (i) {
        this.setState({
            navIndex: i
        });
    }

    // 通过path获得navIndex
    getNavIndex (path) {
        let index = 0;
        switch (path) {
            case '/':
                break;
            case '/tags':
                index = 1;
                break;
            case '/about':
                index = 2;
                break;
        }
        this.changeNavIndex(index);
    }

    componentWillReceiveProps(nextProps) {
        let path = nextProps.location.pathname;
        this.getNavIndex(path);
    }

    componentDidMount() {
        let path = this.props.location.pathname;
        this.getNavIndex(path);
    }

    render() {
        const {children} = this.props;
        const {navBar} = this.state;

        return (
            <div className={style.body}>
                <header className={style.header}>
                    <Navbar className={style.navBar}>
                      <Col lg={8} lgOffset={2} md={10} mdOffset={1} sm={12} xs={12}>
                          <Navbar.Header className={style.logo} >
                              <Navbar.Brand >
                                  <a href="#"></a>
                              </Navbar.Brand>
                          </Navbar.Header>
                          <Nav className={style.nav}>
                              {
                                  navBar.map((item) => {
                                      return (
                                          <NavItem
                                               onClick={this.changeNavIndex.bind(this, item.index)}
                                               className={this.state.navIndex == item.index ? style.active : ''}
                                               key={item.index}
                                               href={`#${item.path}`}>
                                               {item.name}
                                           </NavItem>
                                      )
                                  })
                              }
                          </Nav>
                          <Navbar.Collapse>
                              <Navbar.Form className={style.navBarForm} pullRight>
                                  <FormGroup>
                                      <FormControl type="text" placeholder="Search"/>
                                  </FormGroup>
                                  {' '}
                                  <Button type="submit">Submit</Button>
                              </Navbar.Form>
                          </Navbar.Collapse>
                      </Col>
                  </Navbar>
                </header>

                <main className={style.main}>
                    <Grid>
                        <Row className="show-grid">
                          <Col lg={8} lgOffset={2} md={10} mdOffset={1} sm={12} xs={12}>
                              {children}
                          </Col>
                        </Row>
                    </Grid>
                    <div className='col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1'>
                                         </div>
                </main>

                {/* <footer>
                    <p>Hello I`m An-l.</p>
                </footer> */}
            </div>
        )
    }
}

export default HomeLayout;
