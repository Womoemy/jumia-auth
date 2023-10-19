import JumiaTopLogo from "./assets/jumia-top-logo.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import JumiaBottomLogo from "./assets/jumia-bottom-logo.png"
import Identification from "./components/Identification";

function App() {

  return (
    <>
      <div className="flex flex-col my-0 mx-auto w-[480px] max-w-full min-h-[500px]">
        <div className="p-2 h-16">
          <button type="button" id="backButton" className="p-3 md:hidden">
            <ArrowBackIcon />
          </button>
        </div>
        <div id="header" className="h-16 flex justify-center mb-2">
          <img src={JumiaTopLogo} alt="Jumia Logo" className="h-16 w-16"/>
        </div>
        <Identification />
        <div id="footer" className="px-6 mt-8">
          <div id="footer-text" className="text-center text-sm">
            For further support, you may visit the Help Center or contact our customer service team.
          </div>
        </div>
        <div id="bottom-jumia-logo" className="h-20.5 py-8 flex justify-center">
          <img src={JumiaBottomLogo} alt="Bottom Jumia Logo" />
        </div>
      </div>
    </>
  )
}

export default App
