import React, { Component } from 'react';
import './styles/Process.css';

class Process extends Component {
  render() {
    return (

      <div className="Process">
          <h2>Love What You Do & Live it!</h2>
          <p id="sub">about aeo design</p>

          <main>
            <section className="col4">BRAND DEVELOPMENT
              <article className="copy">The life that is brought to your brand. We identify the who, what, and why to determine the goal for your company or service.</article>
            </section>

            <section className="col4">ART DIRECTION
              <article className="copy"> Paying attention to the mood and tone to make something. Lorem ipsum dolor set et ud ait conspireaut soleu. </article>
            </section>

            <section className="col4">GRAPHIC DESIGN
              <article className="copy">The nitty gritty of what you need or want. We got your back. Lorem ipsum dolor set et ud ait conspireaut soleu.</article>
            </section>
          </main>

      </div>
    );
  }
}

export default Process;
