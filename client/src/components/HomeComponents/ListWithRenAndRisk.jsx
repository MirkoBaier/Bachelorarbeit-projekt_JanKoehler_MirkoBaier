import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link} from 'react-router-dom';

export default class ListWithRenAndRisk extends Component {

    render() {
        return (
            <div>
                <ListWithNumbers
                    calc={this.props.calc} ETFs={this.props.ETFs}
                    riskValue={this.props.riskValue}
                    inputCapital={this.props.inputCapital}
                />
            </div>
        )
    }
}

function ListWithNumbers(props) {
    const calc = props.calc;
    const riskValue = props.riskValue;
    const ETFs = props.ETFs.map(etf => etf.text);
    const inputCapital = props.inputCapital;
    let outputCapital = [];

    //Es wurde noch keine Berechnung vorgenommen
    if (calc.length < 1) {
        return (
            <div>

            </div>);
    }
    //Berechnung fand statt und gab keinen Fehler zurück
    else if (calc.length > 2) {
        //Nur ein ETF ausgewählt
        if (ETFs.length === 1) {
            outputCapital.push(inputCapital);
        }

        //Mehr als ein ETF ausgewählt
        else if (ETFs.length >= 2) {
            if (riskValue === 0) {
                for (let i = 0; i < ETFs.length; i++) {
                    outputCapital.push(calc[3][0][i])
                }
            } else if (riskValue === 25) {
                for (let i = 0; i < ETFs.length; i++) {
                    outputCapital.push(calc[3][1][i])
                }
            } else if (riskValue === 50) {
                for (let i = 0; i < ETFs.length; i++) {
                    outputCapital.push(calc[3][2][i])
                }
            } else if (riskValue === 75) {
                for (let i = 0; i < ETFs.length; i++) {
                    outputCapital.push(calc[3][3][i])
                }
            } else if (riskValue === 100) {
                for (let i = 0; i < ETFs.length; i++) {
                    outputCapital.push(calc[3][4][i])
                }
            }
            //Keine RiskPreference angegeben
            else {
                for (let i = 0; i < ETFs.length; i++) {
                    outputCapital.push("Wählen Sie Ihre Risikobereitschaft");
                }
            }
        } else {
            // Kein ETF berechnet
        }

        // const rows = [];
        let help = 0;

        //RiskPreference angegeben
        if (riskValue !== "...") {
            for (let j = 0; j < ETFs.length; j++) {
                if (outputCapital[j] < 0) {
                    help = help - outputCapital[j];
                } else {
                    help = help + outputCapital[j];
                }
            }
        } else {
            //Keine RiskPreference angegeben
        }

        let rows = pushRows(props, calc, ETFs, outputCapital, help, inputCapital);
        return (
            <div align="justify">
                <p style={{marginBottom: "20px", marginTop: "20px"}}>
                    Der rote Punkt in dem Diagramm ist der <Link componentClass={Link} href="/arero" to="/arero">
                    <strong>Arero</strong>
                </Link>, welcher als Referenzpunkt angesehen werden kann.
                    Versuchen Sie möglichst nah an diesem Punkt heranzukommen oder diesen sogar zu schlagen,
                    in Hinsicht auf das Risiko und die erwartete Rendite. Der gezeichnete Graph
                    stellt den sogenannten <Link componentClass={Link} href="/information" to="/information">
                    <strong>effizienten Rand</strong>
                </Link> dar.
                    Die folgende Tabelle zeigt das Risiko und die erwartete Rendite der einzelnen ETFs
                    und die empfohlene Investition abhängig von Ihrer Risikobereitschaft und Ihrem
                    Investitionskapital.
                </p>
                <BootstrapTable className="table-responsive" data={rows}>
                    <TableHeaderColumn width='100' dataField="etfList" isKey={true}>ETF-Symbol</TableHeaderColumn>
                    <TableHeaderColumn width='120' dataField="einzelRisk">Einzelrisiko</TableHeaderColumn>
                    <TableHeaderColumn width='120' dataField="einzelRen">Erwartete Rendite</TableHeaderColumn>
                    <TableHeaderColumn width='250' dataField="outputCap" >Investition</TableHeaderColumn>
                </BootstrapTable>
            </div>

        );


    }

    //Es wurden zu viele Anfragen gestellt.
    else if (calc[0][0] === "zu viele Anfragen") {
        return (
            <div style={{marginBottom: "20px", marginTop: "20px"}}>
                Sie stellen zu viele Anfragen, warten Sie einen Moment und versuchen Sie es erneut.
            </div>

        )
        //Ein falsches ETF Symbol wurde eingegeben
        //calc[0][1] steht in diesem Fall für die Position des ETFs
    } else {
        return (
            <div style={{marginBottom: "20px", marginTop: "20px"}}>
                Sie haben ein ETF-Symbol eingegeben, welches nicht von unserer API unterstützt wird.
                Es handelt sich um folgende/s
                Symbol/e: <strong>{ETFs[calc[0][1]]} {ETFs[calc[0][2]]} {ETFs[calc[0][3]]}</strong>.
            </div>

        )
    }
}

//Die Reihen für die Auswertungstabelle werden hier gefüllt
function pushRows(props, calc, ETFs, outputCapital, help, inputCapital) {
    let rows = [];
    for (let i = 0; i < ETFs.length; i++) {
        if (ETFs.length === 1) {
            rows.push({
                etfList: ETFs[i],
                einzelRisk: (calc[0][i + 1] * 100).toFixed(2) + "%",
                einzelRen: (calc[1][i + 1] * 100).toFixed(2) + "%",
                outputCap: outputCapital[i] + "€"
            });

        } else {
            let factor = 0;
            if (help !== 0) {
                factor = inputCapital / help;
            }
            //RiskPreference angegeben
            if (factor !== 0) {
                rows.push({
                    etfList: ETFs[i],
                    einzelRisk: (calc[0][i + 1] * 100).toFixed(2) + "%",
                    einzelRen: (calc[1][i + 1] * 100).toFixed(2) + "%",
                    outputCap: (outputCapital[i] * factor).toFixed(2) + "€"
                });
            }
            // Keine RiskPreference angegeben
            else {
                rows.push({
                    etfList: ETFs[i],
                    einzelRisk: (calc[0][i + 1] * 100).toFixed(2) + "%",
                    einzelRen: (calc[1][i + 1] * 100).toFixed(2) + "%",
                    outputCap: outputCapital[i]
                });
            }
        }
    }
    //Gib die Reihen wieder
    return (rows);

}
