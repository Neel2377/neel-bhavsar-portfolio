import React from 'react'

function Career() {
  return (
    <>
      <section className="education space overflow-hidden" id="education">
  <div className="container mt-5">
    <div className="row">
      <div className="col-12">
        <h2 className="education-title text-center text-white mb-5 fw-bold" style={{ letterSpacing: '2px' }}>Career</h2>
      </div>
    </div>
    <div className="row d-flex flex-row justify-content-center">
      <div className="col-12">
        <ul className="education-area align-items-center" style={{ letterSpacing: '2px' }}>
          <li className="education-list text-white">
            <span className="degree ">B.Tech IT</span>
            <span className="place me-2">Parul University</span>
            <span className="year ">2024</span>
          </li>
          <li className="education-list text-white">
            <span className="degree ">12th Science</span>
            <span className="place board">GHSEB</span>
            <span className="year ">2019</span>
          </li>
          <li className="education-list text-white">
            <span className="degree me-4">10th</span>
            <span className="place ">GSEB</span>
            <span className="year ">2017</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Career
