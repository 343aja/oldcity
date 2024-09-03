import React from "react";
import "../css/card.css"
import avatar from "../img/group-24.svg";
import quoteup from "../img/iconsax-bold-quoteup.svg";
const  Card = () => {
  return (
    <>
      <div className="card-container">
        <div class="frame-parenttt">
          <div class="frame-group">
            <div class="group-parent">
              <img class="frame-child" alt="" src={avatar} />
              <div class="alan-baker-parent">
                <div class="alan-baker">Alan Baker</div>
                <div class="ceo-of-redbird">CEO of Redbird Company</div>
              </div>
            </div>
            <img class="iconsaxboldquoteup" alt="" src={quoteup} />
          </div>
          <i class="working-with-oldcity">
            Working with Oldcity Studio has been an incredible experience. They
            truly listened to our needs and delivered a stunning design that
            exceeded our expectations. We couldn't be happier with the final
            product!
          </i>
        </div>
        <div class="frame-parent">
          <div class="frame-group">
            <div class="group-parent">
              <img class="frame-child" alt="" src={avatar} />
              <div class="alan-baker-parent">
                <div class="alan-baker">Alan Baker</div>
                <div class="ceo-of-redbird">CEO of Redbird Company</div>
              </div>
            </div>
            <img class="iconsaxboldquoteup" alt="" src={quoteup} />
          </div>
          <i class="working-with-oldcity">
            Working with Oldcity Studio has been an incredible experience. They
            truly listened to our needs and delivered a stunning design that
            exceeded our expectations. We couldn't be happier with the final
            product!
          </i>
        </div>
        <div class="frame-parentt">
          <div class="frame-group">
            <div class="group-parent">
              <img class="frame-child" alt="" src={avatar} />
              <div class="alan-baker-parent">
                <div class="alan-baker">Alan Baker</div>
                <div class="ceo-of-redbird">CEO of Redbird Company</div>
              </div>
            </div>
            <img class="iconsaxboldquoteup" alt="" src={quoteup} />
          </div>
          <i class="working-with-oldcity">
            Working with Oldcity Studio has been an incredible experience. They
            truly listened to our needs and delivered a stunning design that
            exceeded our expectations. We couldn't be happier with the final
            product!
          </i>
        </div>
      </div>
    </>
  );
}
export default Card