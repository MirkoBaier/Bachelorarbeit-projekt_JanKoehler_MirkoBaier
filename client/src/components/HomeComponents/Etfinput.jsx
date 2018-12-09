import React, {Component} from 'react';
import './Etfinput.css'
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CreatableSelect from 'react-select/lib/Creatable';

//Beispielhafte ETFs für das Dropdownmenü
const options = [
    { value: 'ARERO', label: 'ARERO-DER-WELTFONDS' },
    { value: 'GLSELECT', label: 'XTRACKERS-STOXX-GLOBAL-SELECT-DIVIDEND-100-SWAP-UCITS-ETF-1D' },
    { value: 'PARIBAS', label: 'BNP-PARIBAS-EASY-ENERGY-METALS-ENHANCED-ROLL-CLASSIC-EUR-ACC' },
    { value: 'QQQ', label: 'INVESCO-QQQ-TRUST' },
    { value: 'EXS2.DE', label: 'ISHARES-TECDAX-DE-UCITS-ETF-EUR-ACC' },
    { value: 'LVO.MI', label: 'LYXOR-S-P-500-VIX-FUTURES-ENHANCED-ROLL-UCITS-ETF-C-EUR-ACC' },
    { value: 'EUNL.DE', label: 'ISHARES-CORE-MSCI-WORLD-UCITS-ETF-USD-ACC' },
    { value: 'EXSG.DE', label: 'ISHARES EURO STOXX SELECT DIVIDEND 30 DE UCITS ETF DIS' }
];

export default class Etfinput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.ETFin};
        this.handleChange = this.handleChange.bind(this);
        this.addETF = this.addETF.bind(this);
    }

    //Aktueller ETF-name wird als state gesetzt
    handleChange = (e) => {
        this.setState({value: e });
    };


    //ETF wird der ETFliste hinzugefügt
    addETF = (ETFitem) => {
        //Wird nur hinzugefügt wenn auch wirklich mindestens ein Zeichen eingegeben wurde
        if (ETFitem.value!==null&&ETFitem.value!==undefined) {
            this.props.addETF(ETFitem.value);
            this.setState({value: ''});
        } else {
            //es wurde kein ETF eingegeben
        }
    };

    render = () => {
        const ETFs = this.props.ETFs;
        //ETF Button wird disabled bei 3 eingegebenen ETFs
        let status = false;
        if (ETFs.length >= 3) {
            status = true;
        } else {

        }

        return (
            <div className="EtfInput" align="left">
                <Row>
                    <Col xs={9} sm={10} md={8} lg={8}>
                        <Link componentClass={Link} href="/symbol" to="/symbol" className='KuerzelErklaerung'>
                            <strong>Wichtig:</strong> Kürzel Erklärung
                        </Link>
                        <h4>Geben Sie die Kürzel der ETFs an, in die Sie investieren wollen [höchstens 3 ETFs sind
                            möglich]</h4>
                        <a href="https://de.finance.yahoo.com/etfs/" rel="noopener noreferrer" target="_blank">Liste der
                            ETFs von Yahoo</a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={8} md={7} lg={7}>
                        <CreatableSelect
                            isClearable
                            options={options}
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="ETF eingeben"
                        />
                    </Col>
                    <Col xsHidden={true} sm={2} md={2} lg={2}>
                        <Button disabled={status} className="inputEtfbtn but"
                                onClick={() => this.addETF(this.state.value)}>ETF hinzufügen</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} smHidden={true} mdHidden={true} lgHidden={true}>
                        <Button style={{marginTop: "20px"}} disabled={status} className="inputEtfbtn but"
                                onClick={() => this.addETF(this.state.value)}>ETF hinzufügen</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

