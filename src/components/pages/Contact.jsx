import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-us" id="contact">
        <div className="container mt-5">
          <div className="contact-us-wrapper">
            <div className="contact-us-title text-center">
              <h2 className="big-title" style={{ letterSpacing: "2px" }}>
                Contact Us
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="comment-respond">
                <h2
                  className="comment-title text-center"
                  style={{ letterSpacing: "2px" }}
                >
                  Let's Connect
                </h2>
                <form action="#" method="post" className="comment-form">
                  <div className="row gx-20 ">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="contactform"
                          placeholder="Message"
                          className="form-control-1 style-2"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-btn col-12 px-5">
                      <button
                        type="Submit"
                        className="link-btn d-flex flex-row align-items-center justify-content-center"
                        style={{ letterSpacing: "2px" }}
                      >
                        Send Message
                        <i className="ri-arrow-right-up-line btn-icon" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
