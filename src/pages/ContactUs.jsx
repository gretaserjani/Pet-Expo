import React from 'react'
import Header from '../Header/Header'

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const emri = document.getElementById('emri').value;
    alert(`${emri}, mesazhi juaj u dergua me sukses`);
    // Mund të shtoni logjikën tuaj për dërgimin e mesazhit në server këtu
  };

  return (
    <>
      <Header />
      <div className="contact_us_2">
        <div className="responsive-container-block big-container">
          <div className="blueBG">
          </div>
          <div className="responsive-container-block container">
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="container-block form-wrapper">
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                    <p className="text-blk input-title">
                      Emri
                    </p>
                    <input className="input" id="emri" name="FirstName" placeholder="Emri" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">
                      Mbiemri
                    </p>
                    <input className="input" id="mbiemri" name="Last Name" placeholder="Mbiemri" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">
                      EMAIL
                    </p>
                    <input className="input" id="email" name="Email" placeholder="Email" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">
                      Numri i telefonit
                    </p>
                    <input className="input" id="numri" name="PhoneNumber" placeholder="Numri i telefonit" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                    <p className="text-blk input-title">
                      Shkruaj mesazhin tend
                    </p>
                    <textarea className="textinput" id="mesazhi" placeholder="Mesazhi..."></textarea>
                  </div>
                </div>
                <button className="submit-btn" type="submit">
                  Dergo
                </button>
              </div>
            </form>
            <div className="social-media-links">
              <a href="#" id="ix94i-2">
                <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
              </a>
              <a href="#">
                <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
              </a>
              <a href="#">
                <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
              </a>
              <a href="#" id="izldf-2">
                <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs