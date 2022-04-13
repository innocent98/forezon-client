import "./contact.css";

const Contact = () => {
  return (
    <div className="contactPage" id="contact">
      {" "}
      <div className="container">
        <h3>Contact Us</h3>
        <form className="row g-3 contact-form">
          <div className="col-md-4 col-contact">
            <input
              type="email"
              placeholder="Email"
              className="form-control shadow-none"
            />
          </div>
          <div className="col-md-4 col-contact">
            <input
              type="text"
              placeholder="Subject"
              className="form-control shadow-none"
            />
          </div>
          <div className="col-md-4 col-contact">
            <textarea
              className="form-control shadow-none"
              name=""
              id=""
              cols="20"
              rows="5"
              placeholder="Text"
            ></textarea>
          </div>
          <div className="col-md-4 col-contact">
            <button className="btn btn-primary submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
