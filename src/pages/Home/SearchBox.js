import './SearchBox.css'
import React, { Component } from 'react'

export default class SearchBox extends Component {
    state={
        where:"",
        checkIn:"",
        checkOut:"",
        guests:0,
    }

    changeWhere=(e)=>{this.setState({where: e.target.value});}
    changeCheckIn=(e)=>{this.setState({checkIn: e.target.value});}
    changeCheckOut=(e)=>{this.setState({checkOut: e.target.value});}
    changeGuests=(e)=>{this.setState({guests: e.target.value});}

    render() {
        return (
            <div className='home-search-box col m4'>
                <h1>Book unique places to stay and things to do.</h1>
                <form className='search-box-form'>
                    <div className='col m12'>
                        <div className='form-label'>Where</div>
                        <div className='input-field' id="where">
                            <input className='browser-default' type='text' onChange={this.changeWhere} value={this.state.where} placeholder='Where to ?'/>
                        </div>
                    </div>

                    <div className='col m12'>
                        <div className='form-label'>Check-In</div>
                        <div className='input-field' id="check-in">
                            <input className='browser-default' type='date' onChange={this.changeCheckIn} value={this.state.checkIn} placeholder='dd-mm-'/>
                        </div>
                    </div>
                    <div className='col m12'>
                        <div className='form-label'>Check-Out</div>
                        <div className='input-field' id="check-out">
                            <input className='browser-default' type='date' onChange={this.changeCheckOut} value={this.state.checkOut} placeholder='dd-mm-'/>
                        </div>
                    </div>

                    <div className='col m12'>
                        <div className='form-label'>Guests</div>
                        <div className='input-field' id="guests">
                            <input className='browser-default' type='number' onChange={this.changeGuests} value={this.state.guests} placeholder='Guests'/>
                        </div>
                    </div>

                    <div className='col m12 submit-btn'>
                        <div className='input-field' id="submit-btn">
                            <input className="btn-large waves-effect waves-light red accent-2" type="submit"/>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
