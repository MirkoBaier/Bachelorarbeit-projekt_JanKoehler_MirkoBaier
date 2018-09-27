import React, { Component } from 'react'
import {Grid} from 'react-bootstrap';

export default class Arero extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
                <Grid>
                    <h2>Nutzungsbedingungen</h2>

                    <p align="justify">•	Die Nutzung dieser Website ist kostenlos<br/><br/>
                        •	Die Berechnungen auf dieser Website basieren lediglich auf den Wertentwicklungen der ETFs in der Vergangenheit, auf Grundlage der Werte, die Alphavantage.co liefert.<br/><br/>
                        •	Diese historischen Wertentwicklungen sind kein zwingender Hinweis auf einen möglichen weiteren Werteverlauf. Da alle hier berechneten Performancekennzahlen auf historischen Daten basieren, sind alle Angaben auf dieser Website somit rein spekulativ.<br/><br/>
                        •	Es gibt diverse Ereignisse, die den Verlauf der Kurse in eine komplett andere Richtung beeinflussen können als die, die hier prognostiziert wird. Ereignisse, die nicht voraussagbar sind, wie z.B. Naturkatastrophen.<br/><br/>
                        •	Nutzen Sie diese Website deswegen also mit Bedacht. Sie ersetzt keineswegs die Beratung eines Experten und sollte auf keinen Fall genutzt werden, um sein ganzes Kapital zu investieren.<br/><br/>
                        •	Wir gehen davon aus, dass die auf dieser Website berechneten Kennzahlen korrekt nach den von uns benutzten Formeln errechnet wurden. Wir übernehmen dennoch keine Gewähr für die Richtigkeit der hier veröffentlichten Informationen und keine Haftung für Fehler durch Dritte.<br/><br/>
                    </p>
                </Grid>
            </div>
        )
    }
}