import React, {Component} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import './Calculation.css'
import logo from '../Images/logo.svg';


export default class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {calcRunning: false};
    }


    callServer = async () => {
        // STEP 2. await den call
        console.log("SENDING REQ");
        this.setState({calcRunning: true});
        const symbols = this.props.ETFs.map(etf => etf.text);
        const url = `https://bachelorarbeit-koehler-baier.herokuapp.com/${symbols.join('/')}`;
        try {
            const response = await fetch(url, {
                method: 'PUT'
            });
            const json = await response.json();
            this.props.setCalculation(json);
            this.setState({calcRunning: false});
            this.SetDiagram();
            console.log("RESULT", json);
        } catch (e) {
            this.setState({calcRunning: false});
            console.error("ERROR", e);
        }
    };

    SetDiagram() {
        let c = this.props.calc;
        if (c.length === 1) {
            //ETF-Symbol wird nicht von der API unterstützt
        }
        //Die Daten für den Graphen des 3-Asset-Falls werden gesetzt
        //Das letzte Array-Feld im 3-Asset-Fall ist nicht leer
        else if (c[3][0].length >= 4) {
            this.props.handleDiagram({
                datasets: [{
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 3,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    label: 'Effizienter Rand',
                    data: [
                        {x: c[3][0][c[3][0].length - 2], y: c[3][0][c[3][0].length - 1]},
                        {x: c[3][1][c[3][0].length - 2], y: c[3][1][c[3][0].length - 1]},
                        {x: c[3][2][c[3][0].length - 2], y: c[3][2][c[3][0].length - 1]},
                        {x: c[3][3][c[3][0].length - 2], y: c[3][3][c[3][0].length - 1]},
                        {x: c[3][4][c[3][0].length - 2], y: c[3][4][c[3][0].length - 1]}
                    ]
                },
                    {
                        data: [
                            {x: c[0][0], y: c[1][0]},
                        ],
                        label: "Arero",
                        fill: false,
                        backgroundColor: 'rgba(232,38,41,1)',
                        pointBorderColor: 'rgba(232,38,41,1)',
                        pointBackgroundColor: 'red',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(232,38,41,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 3,
                        pointRadius: 3,
                        pointHitRadius: 10,
                    }
                ]
            });
        }
        else {
            this.props.handleDiagram({
                datasets: [{
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 3,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    label: 'Effizienter Rand',
                    data: [
                        {x: c[0][1], y: c[1][1]},
                    ]
                },
                    {
                        //AreroDaten
                        data: [
                            {x: c[0][0], y: c[1][0]},
                        ],
                        label: "Arero",
                        fill: false,
                        backgroundColor: 'rgba(232,38,41,1)',
                        pointBorderColor: 'rgba(232,38,41,1)',
                        pointBackgroundColor: 'red',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(232,38,41,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 3,
                        pointRadius: 3,
                        pointHitRadius: 10,
                    }
                ]
            });

        }
    }

    render = () => {
        const calcRunning = this.state.calcRunning;
        const ETFs = this.props.ETFs;
        let noETF = true;
        if (ETFs.length > 0) noETF = false;
        if (calcRunning === true) noETF = true;

        //wird aufgerufen wenn der Server noch nichts berechnet hat
        return (
            <div className='calc'>

                <Row>
                    <Col xs={5} sm={7} md={6} lg={6}>
                        <h4>Berechnung starten:</h4>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}>
                        <Animation
                            calcRunning={calcRunning}
                        />
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <Button disabled={noETF} className="calcBtn" onClick={this.callServer}>Berechnung</Button>
                    </Col>
                </Row>

            </div>
        )


    }
}

//Während der Server etwas berechnet wird dies mit einer Animation gezeigt
function Animation(props) {
    if (props.calcRunning) {
        return (
            <div>
                <img className="App-logo" src={logo} alt="logo"/>
            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }

}
