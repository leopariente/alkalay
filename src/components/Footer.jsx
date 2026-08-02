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
                href="https://waze.com/ul?ll=32.0909639,34.7795864&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
              >
                ניווט ב־Waze
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.google.com/maps/place/Elkalai/@32.0908173,34.7794991,101m/data=!3m1!1e3!4m15!1m8!3m7!1s0x151d4b8b57ff2071:0xd3038414e726c15d!2sElkalai+St+1,+Tel+Aviv-Jaffa,+6274201!3b1!8m2!3d32.0909639!4d34.7795864!16s%2Fg%2F11rr6d0rv1!3m5!1s0x151d4b8b580f0087:0x7694b7f5aafaa823!8m2!3d32.0909639!4d34.7795864!16s%2Fg%2F1tf0sv_w"
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
