import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

export default class Symbol extends Component {
    render() {
        return (
            <div>
                <Grid align="justify">
                <h2>Leerverkäufe</h2>
                    Leerverkäufe sind eine Möglichkeit, von fallenden Kursen zu profitieren, also den fallenden Kursen
                    zum Trotz eine Rendite zu erzielen. Die Funktionsweise ist dabei wie folgt: Der Investor wendet
                    sich z.B. an eine Bank. Diese überlässt ihm ein Wertpapier zur Nutzung. Sie vermietet es sozusagen
                    gegen Zinsen. Der Investor verkauft das Wertpapier sofort zu dem momentanen Kurs. Bevor die
                    Mietdauer zu Ende ist, kauft er nun das Wertpapier wieder ein, wieder zu dem aktuellen Kurs und
                    gibt dieses wieder an die Bank zurück. Da das Wertpapier ja nichts „Spezielles“ hatte, muss man
                    nach Ablauf der Mietdauer nicht genau das Papier, welches man sich ursprünglich gemietet hat,
                    zurückgeben, sondern nur ein Gleiches (gleicher Anteil am gleichen Unternehmen).
                    Nun hat der Investor für das Wertpapier erst einen bestimmten Betrag erhalten und musste dann
                    einen bestimmten Betrag dafür zahlen. Es ist genau andersherum als ein normaler Wertpapierkauf:
                    Es wird erst verkauft und dann gekauft. War das Wertpapier also am Anfang, als der Investor es
                    verkauft hatte, mehr wert, als zu dem späteren Zeitpunkt, als er es wiedergekauft hatte, hat er
                    eine Rendite erzielt. Er hat also von einem fallenden Kurs profitiert. Das bezieht natürlich nicht
                    die Leihgebühren der Aktien ein.

                </Grid>
            </div>
        )
    }
}