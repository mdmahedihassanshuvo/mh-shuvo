import React from 'react'

export default function About() {
  return (
    <section className="py-5 about-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-white-50 fs-5">
            Passionate Developer Crafting Digital Solutions with Code & Creativity
          </p>
        </div>

        <div className="row g-4 align-items-stretch mb-5">
          {/* Who I Am */}
          <div className="col-md-4 d-flex">
            <div className="about-card w-100 d-flex">
              <div className="icon-box bg-primary bg-opacity-25 text-primary me-3">
                <i className="fas fa-user"></i>
              </div>

              <div>
                <h4 className="fw-bold text-white">Who I Am</h4>
                <p className="text-white-50 mb-0">
                  I'm <span className="text-gradient fw-semibold">Md Mahedi Hassan Shuvo</span>,
                  a Full-Stack Developer focused on building scalable and clean digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Passion */}
          <div className="col-md-4 d-flex">
            <div className="about-card w-100 d-flex">
              <div className="icon-box bg-success bg-opacity-25 text-success me-3">
                <i className="fas fa-heart"></i>
              </div>

              <div>
                <h4 className="fw-bold text-white">My Passion</h4>
                <p className="text-white-50 mb-0">
                  I enjoy solving real-world problems using modern web and mobile technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Current Work */}
          <div className="col-md-4 d-flex">
            <div className="about-card w-100 d-flex">
              <div className="icon-box bg-warning bg-opacity-25 text-warning me-3">
                <i className="fas fa-code"></i>
              </div>

              <div>
                <h4 className="fw-bold text-white">What I'm Doing Now</h4>
                <p className="text-white-50 mb-0">
                  Studying CSE while building full-stack and Flutter projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="row g-4">
          {/* EDUCATION */}
          <div className="col-lg-6">
            <div className="about-card h-100">
              <h4 className="fw-bold text-white mb-4">
                <i className="fas fa-graduation-cap text-primary me-2"></i>
                Education
              </h4>

              <div className="timeline">
                <div className="timeline-item">
                  <h6 className="fw-bold text-white">BSc in CSE</h6>
                  <small className="text-white-50">BUBT (2023 - 2027)</small>
                  <p className="text-white-50 mb-0">Software Engineering & System Design</p>
                </div>

                <div className="timeline-item">
                  <h6 className="fw-bold text-white">Diploma in Engineering</h6>
                  <small className="text-white-50">Computer Technology (2018 - 2022)</small>
                  <p className="text-white-50 mb-0">Programming Fundamentals</p>
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="col-lg-6">
            <div className="about-card h-100">
              <h4 className="fw-bold text-white mb-4">
                <i className="fas fa-briefcase text-success me-2"></i>
                Experience
              </h4>

              <div className="timeline">
                <div className="timeline-item">
                  <h6 className="fw-bold text-white">Full Stack Developer</h6>
                  <a href="https://tiger-park.com/en/" target="_blank" rel="noreferrer" className="text-white-50 mb-0" title="Tiger Park Limited">Tiger Park Limited (2022 - Present)</a>
                  <p className="text-white-50 mb-0">Built full-stack apps & software solutions</p>
                </div>

                <div className="timeline-item">
                  <h6 className="fw-bold text-white">Frontend Intern</h6>
                  <a href="https://europeanit-inst.com/" target="_blank" rel="noreferrer" className="text-white-50" title="European IT">European IT (2022)</a>
                  <p className="text-white-50 mb-0">React & UI development</p>
                </div>

                <div className="timeline-item">
                  <h6 className="fw-bold text-white">Open Source Contributor</h6>
                  <small className="text-white-50">GitHub (2021 - Present)</small>
                  <p className="text-white-50 mb-0">Multiple OSS contributions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
