import JumiaTopLogo from "./assets/jumia-top-logo.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        <div id="progress-container" className="h-1">
          <div id="progress-bar" className="h-1"></div>
        </div>
        <div className="py-2 px-6 flex flex-col items-center">
          <h1 className="text-xl font-bold">Welcome to Jumia</h1>
          <p className="mt-2 mb-4 text-center">Type your e-mail or phone number to log in or create a Jumia account.</p>
        </div>
      </div>
    </>
  )
}

export default App
