import React, { Component } from 'react'
import {Grid, Image, Row, Col} from 'react-bootstrap';
import MirkoUndJan from "../Images/MirkoUndJan.jpg";

export default class Arero extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
render(){
    return(
    <div>
        <Grid>
            <Row>
                <Col md={6} lg={6}>
            <h2>Über uns</h2>
            <p align="justify">Wir sind Mirko und Jan, Bachelorstudenten (noch).
            Diese Website haben wir im Rahmen unserer Bachelorarbeit programmiert.
                Sie richtet sich an alle Laien, die etwas Geld passiv anlegen wollen.
                Wir möchten dabei eine einfache Möglichkeit der Beratung bzw. ein paar
                Denkanstöße bieten. Natürlich kann diese Website
                keine professionelle Beratung ersetzen, die Berechnungen basieren auf sehr vielen Annahmen
                und die Ergebnisse können stark abhängig vom Zeitpunkt der Nutzung sein.
                Dennoch denken wir, dass sie zumindest eine gute Richtungsweisung bietet.
                Wir hoffen, diese Website wird Ihnen helfen und wir stehen bei Fragen gerne
                per E-Mail zur Verfügung.
            </p>
                </Col>
                <Col md={6} lg={6}>
                    <div style={{marginTop: "30px"}}>
            <Image src={MirkoUndJan} alt="Mirko-und-Jan" responsive/>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
    )
}
}