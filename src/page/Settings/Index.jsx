import SupportUs from "./SupportUs";
import setting from './css/setting.module.css'
import Card from "../../components/utils/Card";
const Setting = () => {
    return (
        <main className={setting.main}>
            <section  className={setting.section}>
                <Card>
                    <SupportUs setting={setting} />
                </Card>
            </section>
        </main>
    );
}

export default Setting;