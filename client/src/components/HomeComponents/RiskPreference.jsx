import React, {Component} from 'react'
import {Grid, Col, Row, DropdownButton, MenuItem} from 'react-bootstrap';
import './RiskPreference.css'


export default class RiskPreference extends Component {
    constructor(props) {
        super(props);
        this.changeRiskValue = this.changeRiskValue.bind(this);
    }

    //Risko wird abhängig vom Button gesetzt
    changeRiskValue(e) {
        this.props.handleRiskChange(e);
    }

    render() {

        return (

            <div align="center">
                <Grid>

                    <h2>Geben Sie Ihre Risikobereitschaft an</h2>
                    <div className="container">
                        <Row className="show-grid">

                            <Col xs={12} xsHidden={true} sm={2} md={2} lg={2}>
                                <button className="risikoButton" onClick={() => this.changeRiskValue(0)}>Minimales
                                    Risiko
                                </button>
                            </Col>
                            <Col xs={12} xsHidden={true} sm={2} md={2} lg={2}>
                                <button className="risikoButton" onClick={() => this.changeRiskValue(25)}>Geringes
                                    Risiko
                                </button>
                            </Col>
                            <Col xs={12} xsHidden={true} sm={2} md={2} lg={2}>
                                <button className="risikoButton" onClick={() => this.changeRiskValue(50)}>Mittleres
                                    Risiko
                                </button>
                            </Col>
                            <Col xs={12} xsHidden={true} sm={2} md={2} lg={2}>
                                <button className="risikoButton" onClick={() => this.changeRiskValue(75)}> Hohes
                                    Risiko
                                </button>
                            </Col>
                            <Col xs={12} xsHidden={true} sm={2} md={2} lg={2}>
                                <button className="risikoButton" onClick={() => this.changeRiskValue(100)}>Extremes
                                    Risiko
                                </button>
                            </Col>

                        </Row>
                        <div className="container">
                            <Row className="RisikobereitMobile">
                                <Col smHidden={true} mdHidden={true} lgHidden={true}>
                                    <DropdownButton bsStyle="default" className="riskDropdown" id={1}
                                                    title={"Risikobereitschaft"}>
                                        <MenuItem className="menuItem" onSelect={() => this.changeRiskValue(0)}>Minimalstes
                                            Risiko</MenuItem>
                                        <MenuItem className="menuItem" onSelect={() => this.changeRiskValue(25)}>Geringes
                                            Risiko</MenuItem>
                                        <MenuItem className="menuItem" onSelect={() => this.changeRiskValue(50)}>Mittleres
                                            Risiko</MenuItem>
                                        <MenuItem className="menuItem" onSelect={() => this.changeRiskValue(75)}>Hohes
                                            Risiko</MenuItem>
                                        <MenuItem className="menuItem" onSelect={() => this.changeRiskValue(100)}>Extremes
                                            Risiko</MenuItem>
                                    </DropdownButton>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Grid>
                <h3 align="left">
                    Das von Ihnen erstellte Portfolio setzt sich aus einer Risikobereitschaft
                    von <strong>{this.props.riskValue}%</strong> und einem Investitionskapital
                    von <strong>{this.props.inputCapital}€</strong> zusammen.
                </h3>
            </div>

        )
    }
}