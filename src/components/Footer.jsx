import JumiaBottomLogo from "../assets/jumia-bottom-logo.png";

const Footer = () => {
    return (
        <>
            <div id="footer" className="px-6 mt-8">
                <div id="footer-text" className="text-center text-sm">
                    For further support, you may visit the Help Center or contact our customer service team.
                </div>
            </div>
            <div id="bottom-jumia-logo" className="h-20.5 py-8 flex justify-center">
                <img src={JumiaBottomLogo} alt="Bottom Jumia Logo" />
            </div>
        </>
    )   
}
export default Footer;