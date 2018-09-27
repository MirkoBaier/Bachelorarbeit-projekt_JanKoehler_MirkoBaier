import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

export default class Etf extends Component{
    render() {
        return (
            <div>
                <Grid>
                <h2>ETFs</h2>
                <p align="justify">ETFs, kurz für „Exchange Traded Funds“ (börsengehandelter
                    Fonds“) sind an der Börse gehandelte Indexfonds. Sie versuchen die Entwicklung von Indexen,
                    wie beispielsweise den DAX, den TecDax oder des Euro Stoxx50, so genau wie möglich abzubilden.
                    Dies wird beispielsweise durch den Erwerb sämtlicher Wertpapiere des Index, in der
                    entsprechenden Gewichtung, realisiert. Das wird möglichst kostengünstig durchgeführt und dabei wird nicht
                    versucht, den Markt zu schlagen.
                    Da wir im Rahmen unserer Bachelorarbeit versuchen, das Risiko eines
                    Portfolios zu minimieren und außerdem eine passive Geldanlage als
                    Motivation haben, empfehlen wir auf dieser Website die Verwendung von
                    ETFs, da sie geringe Transaktionskosten und ein geringeres Risiko haben als z.B.
                    einzelne Wertpapiere. Es können allerdings auch andere Arten von
                    Wertpapieren eingegeben werden.
                </p>
                </Grid>
            </div>
        )
    }
}