import JumiaTopLogo from "../assets/jumia-top-logo.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header= () => {
    return (
        <>
            <div className="p-2 h-16">
            <button type="button" id="backButton" className="p-3 md:hidden">
                <ArrowBackIcon />
            </button>
            </div>
            <div id="header" className="h-16 flex justify-center mb-2">
            <img src={JumiaTopLogo} alt="Jumia Logo" className="h-16 w-16"/>
            </div>
        </>
    )
}
export default Header;