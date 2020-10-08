import React, { Component } from 'react'
import Navbar from './components/Navbar';
import BandList from './components/BandsList';
import ModalDialog from './components/Modal';

class App extends Component {

    state = {
        bands: [],
        currentBand: {},
        show: false
    }

    changeCurrentBand = (band) => {
        this.setState({currentBand: band})
        this.handleShow();
        
    }

    handleClose = () => {
        this.setState({show: false})
    }

    handleShow = () => {
        this.setState({show: true})
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
        .then(res=>{
            return res.json()
        })
        .then(data=> {
            this.setState({bands: data})
            
        })
    }

    render() {
        return(
            <>
            <Navbar />
            <BandList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand}/>
            <ModalDialog show={this.state.show} currentBand={this.state.currentBand}
            handleClose={this.handleClose}/>
            </>
        )
    }
}

export default App