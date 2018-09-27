import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';

export default class Diagram extends Component {

    render = () => {
        return (
            <div className="container" style={{marginTop: "35px", width: "100%", height: "350px"}}>
                <Scatter
                    data={this.props.chartData}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        showLines: true,
                        display: true,
                        title: {
                            display: true,
                            text: "Hier entsteht der effiziente Rand"
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Erwartete Rendite'
                                }
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Risiko'
                                }
                            }]
                        }
                    }}

                />
            </div>
        )
    }
}