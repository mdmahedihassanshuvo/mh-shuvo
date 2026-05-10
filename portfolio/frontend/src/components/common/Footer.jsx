import React from 'react'

export default function Footer() {
  return (
    <footer className="footer mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* About */}
          <div className="col-lg-4">
            <h4 className="fw-bold text-white mb-3">
              MH <span className="text-gradient">SHUVO</span>
            </h4>

            <p className="text-white-50">
              Full Stack Developer passionate about building modern, scalable, and user-friendly digital solutions.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="https://github.com/mdmahedihassanshuvo" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/md-mahedi-hassan-shuvo/" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://www.facebook.com/shuvo6795" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-facebook"></i>
              </a>

              <a href="#" className="footer-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4"></div>

          {/* Contact */}
          <div className="col-lg-4">
            <h5 className="text-white fw-semibold mb-3">Contact</h5>

            <p className="text-white-50 mb-2">
              📍 Dhaka, Bangladesh
            </p>

            <p className="text-white-50 mb-2">
              📧 mdmahedihassanshuvo@outlook.com
            </p>

            <p className="text-white-50 mb-2">
              📞 +880 1719062066
            </p>
          </div>
        </div>

        {/* Bottom */}
        <hr className="border-secondary mt-4" />

        <div className="text-center text-white-50 small">
          © 2026 MH SHUVO. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
