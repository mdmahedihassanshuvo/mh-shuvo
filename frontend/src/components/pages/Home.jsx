import React from 'react'

export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-lg-6">
            <small className="text-uppercase text-secondary fw-semibold">
              Welcome To My Portfolio
            </small>

            <h2 className="fw-bold mt-3">
              Hi, I'm
              MH <span className="text-gradient">SHUVO</span>
              <br />
              Full Stack Developer
            </h2>

            <p className="text-secondary fs-5 mt-4">
              I'm a passionate and experienced Software Engineer with a strong background in web development. I enjoy working on challenging projects and solving complex problems.
            </p>

            <div className="mt-5">
              <a href="/contact" className="btn btn-gradient">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-6 position-relative text-center mt-5 mt-lg-0">
            <div className="circle-bg"></div>

            <img
              src="https://avatars.githubusercontent.com/u/119663839?s=400&u=bc646507c2138d3b286b1dad08d84e91fcc9ad8b&v=4"
              className="img-fluid profile-img rounded-circle"
              alt="profile"
            />

            <div className="social-icons d-none d-lg-block">
              <a href="https://github.com/mdmahedihassanshuvo" target="_blank" rel="noreferrer" className="icon-box">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/md-mahedi-hassan-shuvo/" target="_blank" rel="noreferrer" className="icon-box">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://www.facebook.com/shuvo6795" target="_blank" rel="noreferrer" className="icon-box">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
