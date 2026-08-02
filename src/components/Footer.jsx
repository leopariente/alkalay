export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <img src="/assets/logo.jpg" alt="לוגו קפה אלקלעי" />
            <p>
              קפה אלקלעי — אירועים פרטיים בשבת,
              <br />
              בלב תל אביב.
            </p>
          </div>
          <div>
            <h3>איפה אנחנו</h3>
            <p>
              אלקלעי 1, תל אביב
              <br />
              חניון בזל צמוד ונגיש
            </p>
            <p className="footer-links">
              <a
                href="https://waze.com/ul?q=אלקלעי%201%20תל%20אביב"
                target="_blank"
                rel="noopener noreferrer"
              >
                ניווט ב־Waze
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%D7%90%D7%9C%D7%A7%D7%9C%D7%A2%D7%99+1+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </p>
          </div>
          <div>
            <h3>דברו איתנו</h3>
            <p>
              <a href="tel:036041260">03-6041260</a>
            </p>
            <p>
              אירועים בשבת
              <br />
              בוקר · צהריים · ערב
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>קפה אלקלעי · אלקלעי 1, תל אביב</span>
          <span>אירועים פרטיים עד 60 איש</span>
        </div>
      </div>
    </footer>
  )
}
