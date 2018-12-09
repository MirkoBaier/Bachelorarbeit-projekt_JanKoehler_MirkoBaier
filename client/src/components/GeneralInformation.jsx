import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import efficientFrontierWebsite from "./Images/efficientFrontierWebsite.PNG";
import {Link} from 'react-router-dom';

export default class GeneralInformation extends Component {

    render() {
        return (
            <div className="container">
                <Grid>
                <h2 align="center">Nützliche Informationen zur Seite</h2>
                <h3>Portfolioopimierung durch Risikominimierung</h3>
                <p align="justify">
                    Diese Webanwendung hat das Ziel, Sie bei der Zusammenstellung
                    Ihres Portfolios zu unterstützen, indem das Risiko minimiert wird.
                    Dabei untersucht sie die Risiken der Wertpapiere und die Zusammenhänge
                    zwischen den einzelnen Wertpapieren, um eine Risikominimierung zu erreichen.
                    Wir empfehlen für diese Website
                    <Link componentClass={Link} href="/etf" to="/etf"> ETFs
                    </Link> zu nutzten, da diese bereits
                    nach der Maxime der Risikominimierung arbeiten. Die Verwendung von anderen
                    Wertpapieren ist auch möglich, allerdings nicht zu empfehlen, wenn das
                    Ziel eine passive Geldanlage sein sollte.
                </p>
                <p align="justify">
                    Diese Seite wurde im Rahmen unserer Bachelorarbeit erstellt und hatte
                    das Ziel, eine simple und kostenlose Möglichkeit für Laien zu bieten,
                    ihr Portfolio zu analysieren. Die Funktionsweise ist dabei ganz einfach:
                </p>


                <div align="justify">
                    <p>• Sie geben Ihre Risikopräferenz an. (Wir empfehlen eine Risikopräferenz
                        von 0%. Der mathematische Ansatz, nach dem die Berechnungen laufen, sieht es
                        vor, ein minimales Risiko einzugehen.)</p>
                    <p>• Sie können Ihre Kapitalkraft angeben, um so eine genaue Aufteilung Ihres
                        Kapitals auf die einzelnen Wertpapiere zu erhalten.</p>
                    <p>• Sie geben bis zu drei ETFs an, in die Sie investieren wollen. Geben sie nur
                        einen an, erhalten Sie für diesen die Kennzahlen. Bei zwei oder drei ETFs erhalten Sie
                        zusätzlich das ideale Mischverhältnis für Ihre Risikopräferenz. Sie benötigen das
                        entsprechende Kürzel für das ETF, das Sie berechnen wollen.</p>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <h3 style={{marginTop: "30px"}}>In der Anwendung sieht der <Link 
                            componentClass={Link} href="/EfficientFrontierInformation" to="/EfficientFrontierInformation">
                            effiziente Rand</Link> so aus:</h3>
                        <Image src={efficientFrontierWebsite} alt="Efficient-Frontier-Website" responsive/>
                    </Col>
                    <Col md={6} lg={6}>
                        <p style={{marginTop: "175px"}} align="justify">
                            Die fünf Punkte spiegeln dabei die verschiedenen Risikostufen wieder.
                            Man kann auch über die einzelnen Datenpunkte hovern, diese zeigen dann erst
                            die Standardabweichung und anschließend die erwartete Rendite an. Der rote
                            Punkt ist das Referenzportfolio, der <Link componentClass={Link}  href="/Arero"
                            to="/Arero">
                            Arero-Fonds</Link>.
                        </p>
                    </Col>
                </Row>

                <h3 style={{marginTop: "30px"}}>Erklärung der Kennzahlen</h3>
                <div align="justify">
                    <p>In dieser Anwendung werden folgende Kennzahlen berechnet:</p>
                    <p>• Die <strong>Standardabweichung</strong> der einzelnen Wertpapiere und des Portfolios
                        (die Risikokennzahl)</p>
                    <p>• Die <strong>Korrelationskoeffizienten</strong> (die Stärke des Zusammenhangs zwischen zwei
                        Wertpapieren)</p>
                    <p>• Die <strong>erwartete Rendite</strong> der einzelnen Wertpapiere und des Portfolios</p>
                </div>
                <h4 align="center" style={{marginTop: "40px"}}>Die Standardabweichung (Risiko)</h4>
                <p align="justify"> Die Standardabweichung beschreibt, wie stark die Renditen der Wertpapiere in den
                    letzten
                    Jahren geschwankt sind. Schwanken sie stark, ist das Wertpapier eher risikoreich, da es
                    in Zukunft auch stark ins Negative fallen könnte. Schwanken sie hingegen wenig, ist das
                    Wertpapier eher risikoarm, da es einen relativ zuverlässigen Trend aufweist.
                    Die Standardabweichung sollte also, als Risikokennzahl, idealerweise gering ausfallen.
                </p>
                <h4 align="center">Der Korrelationskoeffizient</h4>
                <p align="justify">
                    Die Kennzahl wird benötigt, da das Risiko des Portfolios nicht allein von der
                    Standardabweichung der einzelnen Wertpapiere abhängt. Dieses wird ebenfalls von der
                    Beziehung zwischen den Renditen zweier Wertpapiere beeinflusst, welche durch die Korrelation
                    gemessen werden kann. Die Korrelation kann zwischen +1 und -1 liegen. Bei einer
                    hohen positiven Korrelation bewegen sich die Renditen zweier Wertpapiere hauptsächlich in
                    die gleiche Richtung. Dies ist nicht ideal, denn wenn das eine Wertpapier im Portfolio
                    einen starken Werteverlust aufweist, tut es das andere dann wahrscheinlich auch.
                    Man sollte diversifizieren, was am besten mit einer stark negativen Korrelation erreicht werden kann.
                    Dabei entwickeln sich die Renditen tendenziell in unterschiedliche Richtungen.
                    Wenn nun das eine Wertpapier im Portfolio einen starken Werteverlust aufweist, weist
                    das andere wahrscheinlich einen Wertegewinn auf. Diversifikation ist also eine
                    Minimierung des Risikos durch Investition in möglichst viele Wertpapiere, die möglichst unabhängig
                    voneinander sind. Je höher die Risikopräferenz, desto mehr wird auch der
                    Diversifikationseffekt vernachlässigt.
                </p>
                <h4 align="center">Die erwartete Rendite</h4>
                <p align="justify" style={{marginBottom: "30px"}}>
                    Die erwartete Rendite beschreibt, wie die Rendite des Wertpapieres in der Vergangenheit
                    durchschnittlich war und wie dementsprechend die Werteentwicklung in der Zukunft wahrscheinlich sein wird.
                    Dies ist keine sonderlich verlässliche Berechnung, dementsprechend sollte auf der Fokus auf die Minimierung
                    der Standardabweichung liegen.
                </p>
                </Grid>
            </div>
        )
    }
}