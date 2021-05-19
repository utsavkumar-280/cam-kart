import "./footer.css";
import { Link } from "react-router-dom";

export const Footer=()=> {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-left ">
          <div className="footer-padding footer-para">Connect with me</div>
          <div className="socialNav">
            <a href="https://www.linkedin.com/in/utsav-kumar-a3a79b187/"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com/utsavkumar280"><i class="fab fa-twitter"></i></a>
          <a href="https://github.com/utsavkumar-280"><i class="fab fa-github"></i></a>
          </div>
          
        </div>


        <div className="footer-right">
          <Link to="/" className="footer-logo">CamKart</Link>
        <div className="connectMe">
          <div className="footer-name-padding">BY</div>
          <a href="https://www.linkedin.com/in/utsav-kumar-a3a79b187/" className=" footer-name-padding">@UTSAV</a>
        </div>
        </div>
      </div>
    </div>
  )
}
