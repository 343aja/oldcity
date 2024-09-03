import React from "react";
import location from '../img/location.svg'
import  message  from '../img/message.svg'
import phone  from '../img/phone.svg'
import send from '../img/send.svg'
import "../css/contact.css"


const  Contact = () => {
  return (
    <>
    <section className="contact">
        <div className="container">

      <div class="leave-us-a-message-parent">
        <div class="leave-us-a">Leave us a message</div>
        <div class="frame-parennt">
          <div class="framme-group">
            <div class="instance-parent">
              <div class="name-wrapper">
                <div class="name">Name</div>
              </div>
              <div class="name-container">
                <div class="name">Your email</div>
              </div>
              <div class="name-frame">
                <div class="name">Briefly describe your project</div>
              </div>
            </div>
            <div class="contact-us-wrapper">
              <button class="contact-us">Send</button>
            </div>
          </div>
          <div class="frame-container">
            <div class="frame-div">
              <div class="linear-map-location-map-parent">
                <img
                  class="linear-map-location-map"
                  alt=""
                  src={location}
                />
                <div class="westheimer-rd-santa">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </div>
              </div>
              <div class="linear-messages-conversatio-parent">
                <img
                  class="linear-map-location-map"
                  alt=""
                  src={message}
                />
                <div class="westheimer-rd-santa">bill.sanders@example.com</div>
              </div>
              <div class="linear-messages-conversatio-parent">
                <img
                  class="linear-map-location-map"
                  alt=""
                  src={phone}
                />
                <div class="westheimer-rd-santa">(480) 555-0103</div>
              </div>
              <div class="linear-messages-conversatio-group">
                <img
                  class="linear-map-location-map"
                  alt=""
                  src={send}
                />
                <div class="tmeqwertyuiferrtgf">t.me/qwertyui.ferrtgf</div>
              </div>
            </div>
            <img class="fraame-child" alt="" src="Rectangle 37.png" />
          </div>
        </div>
      </div>
        </div>
    </section>
    </>
  );
}
export default Contact