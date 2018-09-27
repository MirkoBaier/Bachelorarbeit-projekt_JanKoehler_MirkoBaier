import React, {Component} from 'react';
import './Etflist.css'
import {Row, Col} from 'react-bootstrap';

export default class Etflist extends Component {
    removeETF = (id) => {
        this.props.removeETF(id);
    };

    render() {
        return (
            <div className="EtfItems">
                <Row>
                    <Col className="Etf" xs={12} sm={12} md={10} lg={10}>
                        <button className="removeItem" onClick={() => this.removeETF(this.props.id)}>remove</button>
                        {this.props.ETFitem.text}
                    </Col>
                </Row>
            </div>
        )
    }

}