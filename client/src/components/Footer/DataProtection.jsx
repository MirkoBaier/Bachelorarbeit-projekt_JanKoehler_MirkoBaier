import React, { Component } from 'react'
import {Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Arero extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div>
                <Grid>
                    <h2>Datenschutz</h2>
                    <p align="justify"><Link to="/Footer/Impressum" rel="noopener noreferrer" target="_blank">
                        Name der Verantwortlichen und Kontaktdaten </Link></p>
                    <p align="justify">    Auf dieser Website bzw. auf dem Server werden keinerlei personenbezogene
                        Daten gespeichert. Es kann kein Konto mit personenbezogenen Daten eröffnet werden und es werden
                        keine Cookies benutzt. Es gibt keine Datenbank zum Speichern irgendwelcher Daten.
                        Die einzigen Daten, die wir zwischenspeichern sind die ETF-Kürzel, die Risikobereitschaft und
                        die Kapitalkraft auf der Client-Seite.
                        Die ETF-Daten werden lediglich zur Berechnung der historischen Kurse, zu dem jeweiligen
                        ETF auf der Server-Seite benötigt. Die anderen Daten werden genutzt, um Clientseitig
                        die beste Verteilung auf die ETFs zu berechnen. Diese Daten werden nicht dauerhaft
                        gespeichert. Verlassen Sie diese Website, sind alle gespeicherten Informationen sofort gelöscht.
                    </p>
                </Grid>
            </div>
        )
    }

}