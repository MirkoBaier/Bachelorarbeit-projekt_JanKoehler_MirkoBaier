import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './FooterNavbar.css';
import {Row, Col} from 'react-bootstrap';


export default class FooterNavbar extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='container' align="center">
                    <Row>
                        <Col xsHidden={true}>
                            <Link className='slink' to="/Footer/AboutUs">
                                Über uns
                            </Link>
                            <span className='s.spacer'>·</span>
                            <Link className='slink' to="/Footer/DataProtection">
                                Datenschutz
                            </Link>
                            <span className='s.spacer'>·</span>
                            <Link className='slink' to="/Footer/TermsOfUse">
                                Nutzungsbedingungen
                            </Link>
                            <span className='s.spacer'>·</span>
                            <Link className='slink' to="/Footer/Impressum">
                                Impressum
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className='container' align="center" style={{marginTop: "-35px"}}>
                    <Row>
                        <Col smHidden={true} mdHidden={true} lgHidden={true}>
                            <Link className='slink' to="/Footer/AboutUs">
                                Über uns
                            </Link><br/>
                            <Link className='slink' to="/Footer/DataProtection">
                                Datenschutz
                            </Link><br/>
                            <Link className='slink' to="/Footer/TermsOfUse">
                                Nutzungsbedingungen
                            </Link><br/>
                            <Link className='slink' to="/Footer/Impressum">
                                Impressum
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}