import React, { Component } from 'react';
import './styles/Services.css';

class Services extends Component {
  render() {
    return (

      <div className="Services">
        <h2>Labor of Love</h2>
        <p id="sub">view the work</p>

        <main>
          <section className="col4">IDENTITY
            <article className="copy">
                Logo Design  <br />
                Visual Ideation  <br />
                Branding Collateral  <br />
                Brand Curation  <br />
            </article>
          </section>

          <section className="col4">PRINT
            <article className="copy">
                Advertising  <br />
                Editorial  <br />
                Stationery  <br />
                Package Design  <br />
            </article>
          </section>

          <section className="col4">DIGITAL
            <article className="copy">
                Website Design  <br />
                Responsive & Mobile  <br />
                Email & Social Media  <br />
                Photography  <br />
            </article>
          </section>
        </main>

      </div>

    );
  }
}


export default Services;
