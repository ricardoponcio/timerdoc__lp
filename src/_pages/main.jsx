import { MainDisplay, Services, Topbar, Team, Contact, About } from "../_components";

export default function Main() {

    return (<>
        <Topbar />
        <MainDisplay />
        <Services />
        <About />
        <Team />
        <Contact />
    </>);
}