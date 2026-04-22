export default function Footer() {
  return (
    <footer>
      <div className="container-pf">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#top" className="logo" aria-label="Producer Flow home">
              <span className="logo-mark" />
              <span>PRODUCER&nbsp;FLOW</span>
            </a>
            <p>
              A coaching practice for electronic music producers. Method over
              tutorials. Process over plugins.
            </p>
          </div>
          <div>
            <h5>Programmes</h5>
            <ul>
              <li>
                <a href="#programmes">Coaching 1-on-1</a>
              </li>
              <li>
                <a href="#programmes">Intro</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Academy</h5>
            <ul>
              <li>
                <a href="#philosophy">Method</a>
              </li>
              <li>
                <a href="#story">Case Studies</a>
              </li>
              <li>
                <a href="#founder">Founder</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="#contact">Book a Call</a>
              </li>
              <li>
                <a href="mailto:hello@producerflow.academy">
                  hello@producerflow.academy
                </a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">SoundCloud</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2026 Producer Flow Academy &nbsp;·&nbsp; Herrliberg, CH</p>
          <p>
            <a href="#" style={{ marginRight: 24 }}>
              Privacy
            </a>
            <a href="#" style={{ marginRight: 24 }}>
              Imprint
            </a>
            <a href="#">Cookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
