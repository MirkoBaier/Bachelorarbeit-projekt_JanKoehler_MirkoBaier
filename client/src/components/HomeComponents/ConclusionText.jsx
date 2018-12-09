import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ConclusionText extends Component {
    render() {
        return (
            <div>
                <Conclusion calc={this.props.calc} ETFs={this.props.ETFs} riskValue={this.props.riskValue}/>
            </div>

        );
    }
}

//Funktion ist für den Auswertungstext zuständig
function Conclusion(props) {
    const calc = props.calc;
    const ETFs = props.ETFs;
    const riskValue = props.riskValue;

    let ETF_Risk_Mvp;
    let ETF_Ren_MVP;
    //Wenn eine Berechnung durchgeführt wurde
    if (calc.length > 1) {
        if (ETFs.length > 1) {
            //calc[0][0] ist die Standardabweichung des Arero
            //calc[3][0][3] ist das mögliche minimale Risiko der ETF Kombination
            //Die folgenden Kennzahlen werden auf 2 Nachkommastellen gekürzt
            let Arero_Risk = Math.round(calc[0][0] * 10000) / 100;
            if (riskValue === 0) {
                ETF_Risk_Mvp = Math.round(calc[3][0][calc[3][0].length - 2] * 10000) / 100;
                ETF_Ren_MVP = Math.round(calc[3][0][calc[3][0].length - 1] * 10000) / 100;
            } else if (riskValue === 25) {
                ETF_Risk_Mvp = Math.round(calc[3][1][calc[3][1].length - 2] * 10000) / 100;
                ETF_Ren_MVP = Math.round(calc[3][1][calc[3][1].length - 1] * 10000) / 100;
            } else if (riskValue === 50) {
                ETF_Risk_Mvp = Math.round(calc[3][2][calc[3][0].length - 2] * 10000) / 100;
                ETF_Ren_MVP = Math.round(calc[3][2][calc[3][0].length - 1] * 10000) / 100;
            } else if (riskValue === 75) {
                ETF_Risk_Mvp = Math.round(calc[3][3][calc[3][0].length - 2] * 10000) / 100;
                ETF_Ren_MVP = Math.round(calc[3][3][calc[3][0].length - 1] * 10000) / 100;
            } else if (riskValue === 100) {
                ETF_Risk_Mvp = Math.round(calc[3][4][calc[3][0].length - 2] * 10000) / 100;
                ETF_Ren_MVP = Math.round(calc[3][4][calc[3][0].length - 1] * 10000) / 100;
            }


            const textRiskRen =
                <span>
                    Das Risiko
                    ist um {(ETF_Risk_Mvp - Arero_Risk).toFixed(2)}% höher als die des Arero.
                    Es liegt bei <strong>{ETF_Risk_Mvp}%</strong> und die erwartete Rendite p.a.
                    liegt bei <strong>{ETF_Ren_MVP}%</strong>. Wenn ein <strong>negativer Wert als Invesitionsvorschlag angezeigt wird,
                    sollte der ETF leerverkauft werden</strong>. Information zu: <Link className='Leerverkäufe' componentClass={Link} href="/shortselling" to="/shortselling">
                    <strong>Leerverkäufen</strong>
                    </Link>.
            </span>;


            //Keine RiskPreference angegeben
            if (riskValue === "...") {
                return (
                    <div align="justify" style={{marginBottom: "30px", marginTop: "30px"}}>
                        <strong>Geben Sie Ihre Risikobereitschaft an!</strong>
                    </div>
                )
            }
            //Die ETF Kombination ist weniger riskant als der Arero
            else if (ETF_Risk_Mvp < Arero_Risk) {
                return (
                    <div align="justify" style={{marginBottom: "30px", marginTop: "30px"}}>
                    <span>
                        Wenn ein negativer Wert als Invesitionsvorschlag angezeigt wird, sollte
                        der ETF leerverkauft werden.
                        Diese Kombination aus ETFs hat ein sehr geringes Risiko,
                        sie ist sogar noch risikoärmer als der Arero-Fonds. Das Risiko
                        ist um {Math.round((Arero_Risk - ETF_Risk_Mvp.toFixed(2)) * 100) / 100}% geringer
                        als das des Arero. Es liegt bei {ETF_Risk_Mvp}% und die erwartete Rendite p.a.
                        liegt bei {ETF_Ren_MVP}%.
                        Information zu: <Link
                        className='Leerverkäufe' componentClass={Link} href="/shortselling" to="/shortselling">
                        <strong>Leerverkäufen</strong>
                        </Link>.
                    </span>
                    </div>
                )

                //Die ETF Kombination ist 40% riskanter als der Arero
            } else if (ETF_Risk_Mvp >= Arero_Risk + 40) {
                return (
                    <div align="justify" style={{marginBottom: "30px", marginTop: "30px"}}>
                    <span>
                        Diese Kombination aus ETFs hat ein extrem hohes Risiko,
                        sie ist sehr viel risikoreicher als der Arero-Fonds. {textRiskRen}
                    </span>
                    </div>
                )

                //Die ETF Kombination ist 15% riskanter als der Arero
            } else if (ETF_Risk_Mvp >= Arero_Risk + 15) {
                return (
                    <div align="justify" style={{marginBottom: "30px", marginTop: "30px"}}>
                        <span>
                        Diese Kombination aus ETFs hat ein hohes Risiko, sie ist wesentlich risikoreicher
                        als der Arero-Fonds. {textRiskRen}
                        </span>
                    </div>

                )
                //Die ETF Kombination ist 6% riskanter als der Arero
            } else if (ETF_Risk_Mvp >= Arero_Risk + 6) {
                return (
                    <div align="justify" style={{marginBottom: "30px", marginTop: "30px"}}>
                    <span>
                            Diese Kombination aus ETFs hat ein mittleres Risiko, sie ist nicht unwesentlich
                            risikoreicher als der Arero-Fonds. {textRiskRen}
                    </span>
                    </div>

                )
                // Die ETF Kombination ist nicht mehr als 6% riskanter als der Arero
            } else {
                return (
                    <div align="justify" style={{marginBottom: "30px", marginTop: "30px"}}>
                        <span>
                        Diese Kombination aus ETFs hat ein relativ geringes Risiko, sie ist nur leicht
                        risikoreicher als der Arero-Fonds. {textRiskRen}
                        </span>
                    </div>
                )
            }
            //Es wurde nur ein ETF ausgewählt
        } else {
            return (
                <div style={{marginBottom: "30px", marginTop: "30px"}}>
                    Wählen Sie weitere ETFs zur Diversifikation Ihres Portfolios aus.
                </div>
            )
        }
        //Falls noch nichts berechnet wurde soll auch kein Text angezeigt werden
    } else {
        return (
            <div>

            </div>
        )
    }
}