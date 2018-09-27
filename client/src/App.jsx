import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import EfficientFrontierInformation from './components/EfficientFrontierInformation';
import Etf from './components/Etf';
import Arero from './components/Arero';
import AboutUs from './components/Footer/AboutUs';
import DataProtection from './components/Footer/DataProtection';
import Impressum from './components/Footer/Impressum';
import TermsOfUse from './components/Footer/TermsOfUse';
import Navbar from './components/CoustomNavbar';
import FooterNavbar from './components/FooterNavbar';
import Symbol from './components/Symbol';
import ShortSelling from './components/ShortSelling';
import GeneralInformation from "./components/GeneralInformation";



class App extends Component {
    render() {
        return (
            <Router>
                 <div>
                     <div className="seiten">
                         <div className="Site-Content">
                             <Navbar/>
                             <Route exact path="/" component={Home} />
                             <Route exact path="/information" component={EfficientFrontierInformation} />
                             <Route exact path="/etf" component={Etf} />
                             <Route exact path="/arero" component={Arero} />
                             <Route exact path="/Footer/AboutUs" component={AboutUs}/>
                             <Route exact path="/Footer/DataProtection" component={DataProtection}/>
                             <Route exact path="/Footer/TermsOfUse" component={TermsOfUse}/>
                             <Route exact path="/Footer/Impressum" component={Impressum}/>
                             <Route exact path="/Symbol" component={Symbol}/>
                             <Route exact path="/ShortSelling" component={ShortSelling}/>
                             <Route exact path="/GeneralInformation" component={GeneralInformation}/>
                             <Route exact path="/EfficientFrontierInformation" component={EfficientFrontierInformation}/>
                         </div>
                     </div>
                     <FooterNavbar/>
                 </div>
            </Router>
         );
    }
}

export default App;
