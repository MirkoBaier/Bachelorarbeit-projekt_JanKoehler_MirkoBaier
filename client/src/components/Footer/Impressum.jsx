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
                    <h2>Impressum</h2>
                    <p align="justif">Betreiber der Website:<br/>
                        Mirko Baier und Jan Köhler<br/><br/>
                        Adresse:<br/>
                        Eichenstraße 91, 26131 Oldenburg<br/><br/>
                        E-Mail:<br/>
                        jankoehler94@yahoo.com<br/>
                        mirko97b@web.de
                    </p>
                </Grid>
            </div>
        )
    }
}