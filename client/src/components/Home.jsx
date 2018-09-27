import React, {Component} from 'react'
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap';
import RiskPreference from './HomeComponents/RiskPreference';
import CapitalStrength from './HomeComponents/CapitalStrength';
import Etfinput from "./HomeComponents/Etfinput";
import Etflist from "./HomeComponents/Etflist";
import Calculation from './HomeComponents/Calculation';
import Diagram from './HomeComponents/Diagram';
import ListWithRenAndRisk from './HomeComponents/ListWithRenAndRisk';
import Disclaimer from "./HomeComponents/Disclaimer";
import ConclusionText from "./HomeComponents/ConclusionText";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {chartData: null},
            riskValue: '...',
            inputCapital: '', ETFs: [], nextId: 0, calc: [],
            investCapital: [], ETFin: null, ETFitem: null
        }
    }

    //ETF hinzufügen
    addETF = (ETFin) => {
        //Wird nur hinzugefügt, wenn mehr weniger als drei ETFs bereits vorhanden sind
        if (this.state.ETFs.length < 3) {
            const ETFlist = this.state.ETFs.map(etf => etf.text);
            const ETFs = [...this.state.ETFs, {id: this.state.nextId, text: ETFin}];

            //eingegebenes ETF ist noch nicht in der Liste
            if (ETFlist.indexOf(ETFin) === -1) {
                this.setState(oldState => ({
                    ETFs: ETFs,
                    nextId: oldState.nextId + 1,
                    calc: ""
                }));
            } else {
                alert("Zweimal das gleiche ETF nicht möglich");
            }
        } else {
            //Mehr als 3 Etfs werden nicht angezeigt bzw. berechnet
        }
    };

    //ETF wird aus der List der ETFs entfernt
    removeETF = (id) => {
        this.setState({
            ETFs: this.state.ETFs.filter((ETFitem) => ETFitem.id !== id),
            calc: ""
        });
    };


    //Risikobereitschaft wird in der Home-Klasse gesetzt
    handleRiskChange = (riskValue) => {
        this.setState({riskValue});
    };

    //Eingabekapital wird in der Home-Klasse gesetzt
    handleCapitalChange = (inputCapital) => {
        this.setState({inputCapital})
    };

    //Diagrammdaten werden in der Home-Klasse gesetzt
    handleDiagram = (chartData) => {
        this.setState({chartData})
    };

    //Serverberechnungen werden in der Home-Klasse gesetzt
    setCalculation = (json) => {
        this.setState({
            calc: json,
        });

        this.setState({
            calculated: true
        });
    };

    render = () => {
        const riskValue = this.state.riskValue;
        const inputCapital = this.state.inputCapital;
        const ETFs = this.state.ETFs;
        const calc = this.state.calc;
        const chartData = this.state.chartData;
        let calculated = this.state.calculated;


        return (
            <div className="container">
                <Grid>
                    <Disclaimer/>
                    <Jumbotron>
                        <h2>Portfoliooptimierung durch Diversifikation</h2>
                        <p>Berechnen Sie Ihr optimales Portfolio in Abhängigkeit von Ihrer Risikobereitschaft!</p>
                        <p align="justify">Experimentieren Sie mit verschiedenen
                            Wertpapieren, um ein Portfolio mit einem möglichst geringem Risiko bei einer
                            gleichzeitig möglichst hohen erwarteten Rendite zu erhalten.
                            Das Alleinstellungsmerkmal dieser Website ist, dass
                            auch Leerverkäufe bei der Berechnung unterstützt werden.</p>
                    </Jumbotron>
                    <RiskPreference handleCapitalChange={this.handleCapitalChange}
                                    handleRiskChange={this.handleRiskChange}
                                    inputCapital={inputCapital}
                                    riskValue={riskValue}
                    />
                    <Row>
                        <Col lg={7} md={7} smHidden={true} xsHidden={true}>
                            <Diagram
                                chartData={chartData}
                                calc={calc}
                                calculated={calculated}
                            />
                            <ListWithRenAndRisk
                                ETFs={ETFs}
                                calc={calc}
                                inputCapital={inputCapital}
                                riskValue={riskValue}
                            />
                            <ConclusionText
                                calc={calc}
                                ETFs={ETFs}
                                riskValue={riskValue}

                            />
                        </Col>
                        <Col lg={5} md={5} sm={12} xs={12}>

                            <CapitalStrength
                                riskValue={riskValue}
                                inputCapital={inputCapital}
                                handleCapitalChange={this.handleCapitalChange}
                                handleRiskChange={this.handleRiskChange}
                            />

                            <Etfinput
                                ETFin=""
                                addETF={this.addETF}
                                ETFs={ETFs}
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                                onSelect={value => this.setState({value})}
                            />

                            <ul>
                                {
                                    this.state.ETFs.map((ETFitem) => {
                                        return <Etflist ETFitem={ETFitem} key={ETFitem.id} id={ETFitem.id}
                                                        removeETF={this.removeETF}/>
                                    })
                                }
                            </ul>
                            <Calculation
                                ETFs={ETFs}
                                calc={calc}
                                riskValue={riskValue}
                                setCalculation={this.setCalculation}
                                calculated={calculated}
                                handleDiagram={this.handleDiagram}
                            />
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "80px"}}>
                        <Col lgHidden={true} mdHidden={true} sm={12} xs={12}>
                            <Diagram
                                chartData={chartData}
                                calc={calc}
                                calculated={calculated}
                            />
                            <ListWithRenAndRisk
                                inputCapital={inputCapital}
                                riskValue={riskValue}
                                ETFs={ETFs}
                                calc={calc}
                            />
                            <ConclusionText
                                calc={calc}
                                ETFs={ETFs}
                                riskValue={riskValue}
                            />
                        </Col>
                    </Row>
                </Grid>
                {/*<div style={{marginTop: "80px"}}>*/}
                {/*</div>*/}
            </div>
        );
    }
}