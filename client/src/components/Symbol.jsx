import React, { Component } from 'react';
import {Grid, Row, Col, Table, Image} from 'react-bootstrap';
import symbol from './Images/symbol.PNG';

export default class Symbol extends Component{
    symbolText =
        <p align="justify">Der einfachste Weg, Kürzel von Wertpapieren herauszufinden,
            ist&nbsp;
            <a href="https://finance.yahoo.com" rel="noopener noreferrer" target="_blank">
                Yahoo Finance
            </a>
            &nbsp;zu nutzen. Kürzel werden dort "Symbol" genannt.
            Sie können entweder in der oberen Suchleiste gezielt nach
            Wertpapieren suchen, oder aber sich Wertpapiere aus den Übersichten
            suchen. Es gibt auch eine Übersicht zu ETFs auf Yahoo Finance:&nbsp;
            <a href="https://de.finance.yahoo.com/etfs/" rel="noopener noreferrer" target="_blank">
                ETF-Liste.
            </a>
            &nbsp;Sind Sie auf der Seite eines bestimmten Wertpapiers,
            so können Sie dort einige Daten über das Wertpapier sehen.
            Das Kürzel befindet sich hinter dem Namen des Wertpapiers in Klammern.<br/><br/>
            In der folgenden Tabelle sind einige Beispiel-ETFs aufgelistet:
        </p>;

    etfTable = <Table responsive>
        <thead>
        <tr>
            <th>Kürzel</th>
            <th>Informationen</th>
            <th>Eigenschaften</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>GLSELECT</td>
            <td><a href="https://www.onvista.de/etf/XTRACKERS-STOXX-GLOBAL-SELECT-DIVIDEND-100-SWAP-UCITS-ETF-1D-EUR-DIS-ETF-LU0292096186" rel="noopener noreferrer" target="_blank">
                XTRACKERS-STOXX-GLOBAL-SELECT
            </a></td>
            <td>Relativ geringes Risiko bei guter Rendite</td>
        </tr>
        <tr>
            <td>PARIBAS</td>
            <td><a href="https://www.onvista.de/etf/BNP-PARIBAS-EASY-ENERGY-METALS-ENHANCED-ROLL-CLASSIC-EUR-ACC-ETF-LU1291109616" rel="noopener noreferrer" target="_blank">
                BNP-PARIBAS-EASY-ENERGY-METALS
            </a></td>
            <td>Relativ geringes Risiko bei guter Rendite</td>
        </tr>
        <tr>
            <td>ARERO</td>
            <td><a href="https://www.onvista.de/fonds/ARERO-DER-WELTFONDS-EUR-ACC-Fonds-LU0360863863" rel="noopener noreferrer" target="_blank">
                ARERO-DER-WELTFONDS
            </a></td>
            <td>Sehr geringes Risiko bei geringer Rendite, Risikoärmstes Wertpapier das wir kennen</td>
        </tr>
        <tr>
            <td>QQQ</td>
            <td><a href="https://www.onvista.de/index/INVESCO-QQQ-TRUST-Index-44756542" rel="noopener noreferrer" target="_blank">
                INVESCO-QQQ-TRUST
            </a></td>
            <td>Relativ geringes Risiko für eine hohe Rendite, außerdem ein ETF das Dividenden ausschüttet</td>
        </tr>
        <tr>
            <td>EXS2.DE</td>
            <td><a href="https://www.onvista.de/etf/ISHARES-TECDAX-DE-UCITS-ETF-EUR-ACC-ETF-DE0005933972" rel="noopener noreferrer" target="_blank">
                ISHARES-TECDAX-DE-UCITS
            </a></td>
            <td>Relativ geringes Risiko für eine hohe Rendite</td>
        </tr>
        <tr>
            <td>LVO.MI</td>
            <td><a href="https://www.onvista.de/etf/LYXOR-S-P-500-VIX-FUTURES-ENHANCED-ROLL-UCITS-ETF-C-EUR-ACC-ETF-LU0832435464" rel="noopener noreferrer" target="_blank">
                LYXOR-S-P-500-VIX-FUTURES
            </a></td>
            <td>Hohes Risiko und negative Rendite, aber gut für Leerverkäufe und zum diversifizieren</td>
        </tr>
        <tr>
            <td>EUNL.DE</td>
            <td><a href="https://www.onvista.de/etf/ISHARES-CORE-MSCI-WORLD-UCITS-ETF-USD-ACC-ETF-IE00B4L5Y983" rel="noopener noreferrer" target="_blank">
                ISHARES-CORE-MSCI-WORLD-UCITS-ETF
            </a></td>
            <td>Geringes Risiko bei guter Rendite</td>
        </tr>
        <tr>
            <td>EXSG.DE</td>
            <td><a href="https://www.onvista.de/etf/ISHARES-EURO-STOXX-SELECT-DIVIDEND-30-DE-UCITS-ETF-DIS-ETF-DE0002635281" rel="noopener noreferrer" target="_blank">
                ISHARES-EURO-STOXX-SELECT-DIVIDEND
            </a></td>
            <td>Relativ geringes Risiko bei relativ geringer Rendite</td>
        </tr>
        </tbody>
    </Table>;

    render(){
        const symbolText = this.symbolText;
        const etfTable = this.etfTable;


            let symbolStyle = {
                marginTop: 30
            };

            return(
                <div align="center">
                    <Grid>
                        <h2 align="center">Kürzel Erklärung</h2>
                        <Row style={symbolStyle} className="symbolContent">
                            <Col xs={12} sm={12} lg={6} md={6}>
                                <Image src={symbol} alt="SymbolImage" responsive/>
                            </Col>
                            <Col  xsHidden={true} smHidden={true} lg={6} md={6}>
                                {symbolText}
                                {etfTable}
                            </Col >
                        </Row>
                        <Col style={symbolStyle} lgHidden={true} mdHidden={true}>
                            <p align="justify">
                                {symbolText}
                                {etfTable}
                            </p>
                        </Col>
                    </Grid>
                </div>
            )
    }
}