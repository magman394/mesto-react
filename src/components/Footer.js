import { newDate } from "../utils/constants";
function Footer() {
    return (
        <footer className="footer">
          <p className="footer__copyright">&copy; {newDate} Mesto Russia</p>
        </footer>
  );
}
export default Footer;