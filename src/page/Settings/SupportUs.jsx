import { Feedback, Mail, Person, PrivacyTip } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SupportUs = ({setting}) => {
    return ( 
        <main className={setting.main}>
            <h4 className={setting.h4}>Support us</h4>
            <section>
                <ul className={setting.ul}>
                    <li className={setting.li}>
                        <Mail/> <Link to='*' className={setting.a}>Rate us</Link>
                    </li>
                    <li className={setting.li}>
                        <Feedback/> <Link to='/contact' className={setting.a}>Feedback</Link>
                    </li>
                    <li className={setting.li}>
                        <Person/> <Link to='*' className={setting.a}>About us</Link>
                    </li>
                    <li className={setting.li}>
                        <PrivacyTip/> <Link to='*' className={setting.a}>Privacy Policy</Link>
                    </li>
                </ul>
            </section>
        </main>
     );
}
 
export default SupportUs;