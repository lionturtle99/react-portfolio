import React from 'react';

function Contact() {
  return (
    <section className="mt-3" id="contact">
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw-bold">Contact me <a href="https://www.instagram.com/sincerlyliam/" className="fa fa-instagram mx-2"></a></h1>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form action="https://formsubmit.co/liamthelastson@gmail.com" method="POST">
              <input type="text" name="honey-pot" className="d-none"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Natalie Johnson" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name="email-address" className="form-control" id="email-address" placeholder="nataliejohnson@example.com" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Email Body</label>
                <textarea className="form-control" name="email-body" id="email-body" rows="3" placeholder="Hi Liam, My name is Natalie, pleased to meet you!" required></textarea>
              </div>
              <button className="btn btn-outline-danger">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;