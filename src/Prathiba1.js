import React, { Component } from 'react';
import tableau from 'tableau-api';

export default class Prathiba1 extends Component {
    componentDidMount() {
        this.initViz()
    }


    initViz() {
        const vizUrl = 'https://public.tableau.com/views/Visa-Wiz/Prathiba_1';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }
    render() {
        return (
            <div ref={(div) => { this.vizContainer = div }}>
            </div>
        );
    }
}
