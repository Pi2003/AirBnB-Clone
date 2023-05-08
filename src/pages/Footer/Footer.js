import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">AirBnB Clone Website</h5>
                <p className="grey-text text-lighten-4">- Pinak Tendulkar</p>
                <p className="grey-text text-lighten-4"> </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2023 React Project
            <a className="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/pinak-tendulkar-0458261a9/"><i className="tiny material-icons">link</i>   Linkedin</a>
            </div>
          </div>
</footer>
      </div>
    )
  }
}


