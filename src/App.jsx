import JumiaTopLogo from "./assets/jumia-top-logo.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import JumiaBottomLogo from "./assets/jumia-bottom-logo.png"

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
        <div id="card" className="py-2 px-6">
          <form action="#" method="post">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-medium">Welcome to Jumia</h2>
                <p className="mt-2 mb-4 text-center text-neutral-600">Type your e-mail or phone number to log in or create a Jumia account.</p>
              </div>
              <div id="fields">
                <div className="relative">
                  <input type="email" name="email_input" id="email_input" className="h-14 peer border px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400" placeholder=" " />
                  <label htmlFor="email_input" className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5">Email or Mobile Number*</label>
                </div>
                <div id="err-msg" className="px-4 h-5">
                  <div id="err-msg-txt"></div>
                </div>
              </div>
              <div id="actions" className="mt-4">
                <div id="action-btn-wrapper">
                  <button type="submit" className="h-12 w-full bg-orange-400 rounded">
                    <span className="text-white text-base font-bold tracking-widest">Continue</span>
                  </button>
                </div>
              </div>
              <div id="social-logins" className="mt-16">
                <div id="action-btn-wrapper">
                  <button type="submit" className="h-12 w-full bg-blue-600 rounded text-white font-semibold tracking-widest flex items-center p-3 justify-between mb-4">
                    <FacebookIcon />
                    <span className="grow">Log in with Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
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
