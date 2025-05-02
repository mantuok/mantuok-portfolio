import "./contact.scss";
import Divider from "../Utils/divider";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="contact">
      <div id="contact" className="contact-buffer"></div>
      <h2 className="heading-2 contact-heading" id="contact">
        Contact Me
      </h2>
      <div className="contact-wrapper-bottom">
        <div className="contact-wrapper-left">
          <h3 className="heading-4">You can find me in</h3>
          <div className="contact-wrapper-social">
            <a
              className="button"
              href="https://www.linkedin.com/in/svetlana-eliseeva-783bb014/"
              target="_blank"
            >
              <Image
                className="button-text"
                src="./img/social_linkedin.svg"
                width={65}
                height={65}
                alt="LinkedIn"
              />
            </a>
            <a
              className="button"
              href="https://github.com/mantuok"
              target="_blank"
            >
              <Image
                className="button-text"
                src="./img/social_github.svg"
                width={65}
                height={65}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <Divider />
        <div className="contact-wrapper-right">
          <h3 className="heading-4">You can contact me at</h3>
          <a className="button" href="mailto:mantuok@gmail.com">
            <span className="button-text">mantuok@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
