import React from 'react'
import works from "../img/works.png";
import team from "../img/team.png";
import analys from "../img/analysis.png";
import start from "../img/start.png";
const Works = () => {
  return (
    <section className="works">
        <Line />
        <div className="container">
          <div className="works-title">
            <div className="worksTitle">
              <h2>How Our Design</h2>
            </div>
            <div className="bg-title">
              <div className="worksSubtitle">
                <h2>Process</h2>
              </div>
              <div className="bg-subtitle">
                <h2>Works</h2>
              </div>
            </div>
          </div>
          <div className="wors-card">
            <div class="parent">
              <div class="div">01</div>
              <img class="instance-child" alt="" src={works} />
              <div class="contact-parent">
                <div class="div">Contact</div>
                <div class="send-us-your">
                  Send us your project request or project idea.
                </div>
              </div>
            </div>
            <div class="parent">
              <div class="div">02</div>
              <img class="instance-child" alt="" src={analys} />
              <div class="contact-parent">
                <div class="div">Analysis</div>
                <div class="send-us-your">
                  We will contact you to clarify your project requirements.
                </div>
              </div>
            </div>
            <div class="parent">
              <div class="div">03</div>
              <img class="instance-child" alt="" src={team} />
              <div class="contact-parent">
                <div class="div">Team</div>
                <div class="send-us-your">
                  We provide a team for your requirements.
                </div>
              </div>
            </div>
            <div class="parent">
              <div class="div">04</div>
              <img class="instance-child" alt="" src={start} />
              <div class="contact-parent">
                <div class="div">Start</div>
                <div class="send-us-your">
                  You will get to know the team and we'll get started.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Works
