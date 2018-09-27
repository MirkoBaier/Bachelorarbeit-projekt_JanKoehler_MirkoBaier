import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import effizienterRand from './Images/efficientFrontierGeneral.PNG';

export default class EfficientFrontierInformation extends Component {
    render() {
        const textInfo = "Dabei ist der Punkt ganz Links das Minimum-Varianz-Portfolio.\n" +
            "                        Das Minimum-Varianz-Portfolio ist der Punkt,\n" +
            "                        bei dem das Risiko mit den ausgewählten Wertpapieren minimal ist.\n" +
            "                        Es gibt genau eine Kombination von Investitions-Anteilen in die Wertpapiere,\n" +
            "                        wo dieser Punkt erreicht werden. Alle Punkte rechts darüber (blau)\n" +
            "                        bilden effiziente Portfolios, also die, die für ein gewisses Risiko\n" +
            "                        die maximale Rendite erzielen. \n" +
            "                        Es gibt auch Portfolios, die unter dem effizienten Rand liegen (orange),\n" +
            "                        allerdings haben diese, verglichen mit den Portfolios auf dem effizienten\n" +
            "                        Rand, eine geringere Rendite für das gleiche Risiko und sind somit nicht\n" +
            "                        effizient. Besteht das Portfolio aus mehr als zwei Assets, ist zwischen den\n" +
            "                        beiden Linien eine Fläche möglicher uneffizienter Portfolios.";
        return (
            <div>
                <Grid>
                    <h2 align="center"> Effizienter Rand und Minimum-Varianz-Portfolio</h2>
                    <h3>Der effiziente Rand sieht so aus:</h3>
                    <Row>
                        <Col xs={2} sm={2} lg={6} md={6}>
                            <img src={effizienterRand} alt="Efficient-Frontier" width="450" height="300"/>
                        </Col>
                        <Col xsHidden={true} smHidden={true} lg={6} md={6}>
                            <p className="informationText" align="justify" style={{marginTop: "70px"}}>
                                {textInfo}
                            </p>
                        </Col>
                    </Row>
                    <Col lgHidden={true} mdHidden={true}>
                        <p align="justify">
                            {textInfo}
                        </p>
                    </Col>
                </Grid>
            </div>
        )
    }
}