function Skill() {
  const skills = [
    { name: 'HTML-5', img: '/images/html-5.png', alt: 'HTML' },
    { name: 'CSS-3', img: '/images/css.png', alt: 'CSS', className: 'css-icon' },
    { name: 'Bootstrap', img: '/images/bootstrap-icon.png', alt: 'Bootstrap' },
    { name: 'JavaScript', img: '/images/js-logo.png', alt: 'JavaScript', className: 'c-icon' },
    { name: 'React.js', img: '/images/React-icon.svg.png', alt: 'React', className: 'c-icon' },
    { name: 'Node.js', img: '/images/nodejs-logo.svg', alt: 'Node.js', className: 'c-icon' },
    { name: 'MongoDB', img: '/images/MongoDB.svg', alt: 'MongoDB', className: 'c-icon' },
    { name: 'Git', img: '/images/Git-Icon-1788C.png', alt: 'Git', className: 'c-icon' },
    { name: 'GitHub', img: '/images/github.png', alt: 'GitHub', className: 'c-icon' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container mt-5">
        <h2 className="title text-center" style={{ letterSpacing: '2px' }}>Skills</h2>

        <div className="row gx-4 gy-4 mt-4 justify-content-center" style={{ letterSpacing: '2px' }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-xl-2 col-lg-3 col-md-3 col-6 mb-4"
            >
              <div className="skill-item text-center">
                <div className="skill-thumb d-flex flex-column align-items-center justify-content-center">
                  <div className="skill-icon mb-3">
                    <img
                      src={skill.img}
                      alt={skill.alt}
                      className={skill.className || ''}
                    />
                  </div>
                </div>

                <div className="skill-content">
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
