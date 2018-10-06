import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './assets/images/logo-ojohome.svg';
import logoOJOCircle from './assets/images/logo-ojo-circle.svg';
import './assets/styles/app.css';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <Link to="/sign-up" className="inline-block rounded button">
            Sign Up Free
          </Link>
        </header>

        <div className="homepageHero">
          <div className="homepageHero__content float-left">
            <div className="homepageHero__copyContainer">
              <h1 className="homepageHero__title text-6xl font-medium mb-2">
                Get personalized home listings
              </h1>
              <p className="homepageHero__copy text-3xl mb-6">
                Meet OJO, your virtual real estate assistant.
              </p>
              <div className="homepageHero__cta">
                <Link to="/sign-up" className="ctaPrimary inline-block bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
          <div className="homepageHero__imageContainer">
            <img src="https://via.placeholder.com/400x500" alt="" />
          </div>
        </div>

        <section className="headliner text-center">
          <div className="layout">
            <div className="content">
              <div>
                <h2 className="mt-32 mb-24 text-5xl">
                  What can you do with OJO?
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white text-center">
          <div className="flex flex-row justify-center flex-wrap">
            <div className="whatCan w-48">
              <div className="mb-8">
                <img src="https://via.placeholder.com/100x100" alt="" />
              </div>
              <div>
                <h3 className="mb-4 text-3xl">
                  Real estate assistant
                </h3>
                <p className="text-l">
                  OJO proactively search MLs and answer any questions you have.
                </p>
              </div>
            </div>
            <div className="whatCan w-48">
              <div className="mb-8">
                <img src="https://via.placeholder.com/100x100" alt="" />
              </div>
              <div>
                <h3 className="mb-4 text-3xl">
                  Secure &amp; private browsing
                </h3>
                <p className="text-l">
                  Don’t share your profile until you want to.
                </p>
              </div>
            </div>
            <div className="whatCan w-48">
              <div className="mb-8">
                <img src="https://via.placeholder.com/100x100" alt="" />
              </div>
              <div>
                <h3 className="mb-4 text-3xl">
                  Your house, your style
                </h3>
                <p className="text-l">
                  OJO searches millions of photos &amp; finds homes that match your modern style.
                </p>
              </div>
            </div>
            <div className="whatCan w-48">
              <div className="mb-8">
                <img src="https://via.placeholder.com/100x100" alt="" />
              </div>
              <div>
                <h3 className="mb-4 text-3xl">
                  Fourth one
                </h3>
                <p className="text-l">
                  Some other thing some other thing
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-grey-lightest">
          <div>
            <h2 className="mt-32 mb-24 text-5xl">
              How it works
            </h2>
            <div>
              <div>
                <img src="https://via.placeholder.com/40x31" alt="" />
              </div>
              <div>
                <h4>One great reason</h4>
                <p>This should be no longer than two lines for scannability.</p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://via.placeholder.com/40x31" alt="" />
              </div>
              <div>
                <h4>Two great reasons</h4>
                <p>This should be no longer than two lines for scannability purposes.</p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://via.placeholder.com/40x31" alt="" />
              </div>
              <div>
                <h4>Three great reasons</h4>
                <p>This should be no longer than two lines for scannability otherwise ain’t nobody read.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="https://via.placeholder.com/418x632" alt="" />
            <img src="https://via.placeholder.com/266x177" alt="" />
          </div>
        </section>

        <section className="theOne text-center bg-dark-blue text-white py-32">
          <div className="">
            <h2 className="mb-4 text-5xl">Find "The One"</h2>
            <p className="text-3xl mb-8">Get on the MLS &amp; major search sites. All for free.</p>
          </div>
          <div className="home-card">
            <div className="image">
              <img src="https://via.placeholder.com/475x315" />
            </div>
            <div className="text-left">
              <p className="">1301 Chicon St, Austin, TX 78702</p>
              <p className="">$415,000</p>
              <p>3 Bed    <span className="">|</span>   2 Bath    <span className="">|</span>   1150 Sq Ft</p>
            </div>
          </div>
        </section>

        <section className="theOne text-center">
          <h2 className="mt-32 mb-24 text-5xl">
            You&rsquo;re in good company
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center mb-32">
            <div className="m-2">
              <img src="https://via.placeholder.com/142x76" alt="" />
            </div>
            <div className="m-2">
              <img src="https://via.placeholder.com/142x76" alt="" />
            </div>
            <div className="m-2">
              <img src="https://via.placeholder.com/142x76" alt="" />
            </div>
            <div className="m-2">
              <img src="https://via.placeholder.com/142x76" alt="" />
            </div>
            <div className="m-2">
              <img src="https://via.placeholder.com/142x76" alt="" />
            </div>
          </div>
        </section>

        <section className="getStarted text-center bg-consumer-blue text-white py-32">
          <h2 className="mb-4 text-5xl">
            It&rsquo;s easy to get started
          </h2>
          <p className="text-3xl mb-8">
            And it&rsquo;s free. Two things we all love.
          </p>
          <div>
            <Link to="/sign-up" className="inline-block bg-blue-dark rounded text-white px-4 py-3">
              Sign Up Free!
            </Link>
          </div>
        </section>

        <section className="ojoAgent flex flex-center bg-dark-blue text-white py-32">
          <div className="">
            <h2 className="mb-4 text-5xl">
              Pssst… Are you a five-star agent?
            </h2>
            <ul className="text-xl mb-8">
              <li>Attract and engage new referrals</li>
              <li>Build and strengthen your online reputation</li>
              <li>Deliver a premium experience referrals love</li>
            </ul>
            <div>
              <Link to="/sign-up" className="inline-block bg-blue-dark rounded text-white px-4 py-3">
                Get early access to OJO Agent
              </Link>
            </div>
          </div>
        </section>

        <footer className="text-center bg-white py-20">
          <div className="mb-12">
            <img src={logoOJOCircle} className="" alt="logo" />
          </div>
          <p className="text-grey-dark mb-12">
            <a className="inline-block mx-4 text-grey-darkest no-underline" href="mailto:support@ojolabs.com">Help &amp; Feedback</a>
            <a className="inline-block mx-4 text-grey-darkest no-underline" href="tel:5124568292">(512) 456-8292</a>
            <a className="inline-block mx-4 text-grey-darkest no-underline" href="https://goo.gl/maps/sWGfgxhcRwT2" target="_blank">720 Brazos St #110, Austin, TX 78701</a>
            <a className="inline-block mx-4 text-grey-darkest no-underline" href="https://content.ojo.me/privacy-policy.pdf" target="_blank">Privacy Policy</a>
          </p>
          <p className="text-grey-dark">
            Made with ❤ in Austin, TX
          </p>
        </footer>

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/sign-up" component={Settings}/>
          <Route path="/sign-up-verify" component={AuthVerify}/>
          <Route path="/sign-up-thanks" component={AuthVerify}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
