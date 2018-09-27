//Klasse, die die intern eingespeicherten ETFs verwaltet
let ar = require('./../extraETFs/arero');
let gs = require('./../extraETFs/globalSelect');
let pa = require('./../extraETFs/paribas');

module.exports = {

    /**
     * Funktion, die die ETF-Daten ausgibt.
     * Bekommt ein Kürzel übergeben.
     * Prüft, ob dieses sich auf einen internen ETF bezieht.
     * Ist dies nicht der Fall, wird ein dies signalisierender String zurückgegeben.
     */
    getETF: function (symbol) {
        if(symbol === "ARERO"){
            return ar.getArero()
        }else if(symbol === "GLSELECT"){
            return gs.getGlobalSelect()
        }else if(symbol === "PARIBAS"){
            return pa.getParibas()
        }else{
            return "weitermachen"
        }
    },

};