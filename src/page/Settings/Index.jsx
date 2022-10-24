import SupportUs from "./SupportUs";
import setting from './css/setting.module.css'
import Card from "../../components/utils/Card";
const Setting = ({ mode, setMode }) => {
    const handleDarkModeChange = () => {
        const newMode = 'dark'
        setMode(newMode)
    }
    const handleLightModeChange = () => {
        const newMode = 'Light'
        setMode(newMode)
    }
    return (
        <main className={setting.main}>
            <section  className={setting.section}>
                <Card>
                    <main className={setting.main}>
                        <h4 className={setting.h4}>Mode Setting</h4>
                        <form action="">
                            <input type="radio" name="mode" id="light" onChange={handleLightModeChange} />&nbsp;&nbsp;
                            <span className={setting.a}>Light-mode</span>
                            <br /><br />
                            <input type="radio" name="mode" id="dark" onChange={handleDarkModeChange} /> &nbsp;&nbsp;
                            <span className={setting.a}>dark-mode</span>
                        </form>
                    </main>
                </Card>
            </section>
            <hr />
            <section  className={setting.section}>
                <Card>
                    <SupportUs setting={setting} />
                </Card>
            </section>
        </main>
    );
}

export default Setting;