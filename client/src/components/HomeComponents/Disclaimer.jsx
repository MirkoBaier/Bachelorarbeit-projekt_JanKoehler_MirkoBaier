import React, {Component} from 'react'
import {Button, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Disclaimer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleHide() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="danger">
                    <h4>Warnhinweis!</h4>
                    <p>
                        Die Berechnungen auf dieser Seite beruhen lediglich
                        auf Annahmen aus dem Portfoliotheoretischen-Ansatz nach
                        Markowitz. <strong>Die Website sollte nicht benutzt werden,
                        um echtes Geld in ein Wertpapier zu investieren!</strong> Bevor Sie anfangen,
                        diese Seite zu benutzen, informieren sie sich zunächst<strong>
                        <Link to="/GeneralInformation" rel="noopener noreferrer" target="_blank"> hier
                        </Link></strong>, um diese Website ideal nutzen zu können.
                    </p>
                    <p>
                        <Button bsStyle="danger" onClick={this.handleHide}>Verstanden</Button>
                    </p>
                </Alert>
            );
        }

        return <div>

        </div>;
    }
}

