import React, {Component} from 'react'
import {FormControl, FormGroup, HelpBlock, Col, Row} from 'react-bootstrap';
import './CapitalStrength.css'

export default class CapitalStrength extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''}
    }

    //Bei Enter kein
    handleKeyPressed = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
        }
    };

    //Nur wenn Zahlen eingegeben wurden, werden diese in der Home-Klasse gespeichert
    handleChange(e) {
        if (e.target.value.match(/^[0-9]+$/) != null||e.target.value.length===0) {
            this.props.handleCapitalChange(e.target.value);
        }
        this.setState({value: e.target.value});
    }

    //Nur Zahlen sind erlaubt im Kapitaleingabefeld
    getValidationState() {
        const length = this.state.value;
        if (length.match(/^[0-9]+$/) != null) {
            return 'success';
        } else {
            return 'error';
        }
    }

    render() {
        return (
            <div className="eingabeKapital">
                <div>
                    <Row>
                        <Col xs={12} sm={11} md={8} lg={8}>
                            <h4>Geben Sie Ihr gewünschtes Investitionskapital an</h4>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xs={12} sm={9} md={8} lg={8}>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                            >
                                <FormControl
                                    value={this.state.value}
                                    placeholder="Kapitaleingabe"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPressed}
                                />
                                <FormControl.Feedback/>
                                <HelpBlock>Nur ganze Zahlen sind erlaubt.</HelpBlock>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </div>

        );
    }
}