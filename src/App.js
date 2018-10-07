import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './assets/images/logo-ojohome.svg';
import logoOJOCircle from './assets/images/logo-ojo-circle.svg';
import logoRealogy from './assets/images/logo-realogy.png';
import logoRBC from './assets/images/logo-rbc.png';
import logoNorthwesternMutual from './assets/images/logo-northwestern-mutual.png';
import logoLiveOak from './assets/images/logo-live-oak.png';
import logoSilvertonPartners from './assets/images/logo-silverton-partners.png';
import logoServiceMaster from './assets/images/logo-service-master.png';
import logoCheckmark from './assets/images/icon-checkmark.png';
import './assets/styles/app.css';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="container mx-auto flex">
            <div className="flex-1">
              <img src={logo} className="app-logo" alt="logo" />
            </div>
            <div className="flex-1 text-right">
              <Link to="/sign-up" className=" inline-block bg-transparent text-white text-l px-6 py-3 no-underline rounded-full border-2 border-white">
                Sign Up Free
              </Link>
            </div>
          </div>
        </header>

        <div className="homepageHero">
          <div className="homepageHero__content container mx-auto">
            <div className="homepageHero__copyContainer w-2/3 ml-16">
              <h1 className="homepageHero__title text-7xl font-medium mb-2">
                Get personalized home listings
              </h1>
              <p className="homepageHero__copy text-3xl mb-6">
                Meet OJO, your virtual real estate assistant.
              </p>
              <div className="homepageHero__cta">
                <Link to="/sign-up" className="ctaPrimary inline-block bg-dark-blue text-white text-xl px-8 py-5 no-underline rounded-full shadow-lg">
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
              <div className="max-w-sm mx-auto">
                <h2 className="mt-32 mb-24 text-6xl font-medium">
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
          <div className="container mx-auto">
            <h2 className="mt-32 mb-24 text-6xl font-medium">
              How it works
            </h2>
            <div className="">
              <div>
                <div className="max-w-100p">
                  <img src={logoCheckmark} className="" alt="checkmark" />
                </div>
                <div>
                  <h4 className="text-3xl">One great reason</h4>
                  <p className="text-2xl text-grey-darker">This should be no longer than two lines for scannability.</p>
                </div>
              </div>
              <div>
                <div className="max-w-100p">
                  <img src={logoCheckmark} className="" alt="checkmark" />
                </div>
                <div>
                  <h4 className="text-3xl">Two great reasons</h4>
                  <p className="text-2xl text-grey-darker">This should be no longer than two lines for scannability purposes.</p>
                </div>
              </div>
              <div>
                <div className="max-w-100p">
                  <img src={logoCheckmark} className="" alt="checkmark" />
                </div>
                <div className="">
                  <h4 className="text-3xl">Three great reasons</h4>
                  <p className="text-2xl text-grey-darker">This should be no longer than two lines for scannability otherwise ain’t nobody read.</p>
                </div>
              </div>
            </div>
            <div className="">
              <img src="https://via.placeholder.com/418x632" alt="" />
              <img src="https://via.placeholder.com/266x177" alt="" />
            </div>
          </div>
        </section>

        <section className="theOne text-center bg-dark-blue text-white py-32">
          <div className="">
            <h2 className="mb-4 text-6xl font-medium">Find "The One"</h2>
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
          <h2 className="mt-32 mb-24 text-6xl font-medium max-w-sm mx-auto">
            You&rsquo;re in good company
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center mb-32">
            <div className="m-4">
              <img src={logoNorthwesternMutual} className="logos" alt="Northwestern Mutual Logo" />
            </div>
            <div className="m-4">
              <img src={logoRBC} className="logos" alt="RBC Logo" />
            </div>
            <div className="m-4">
              <img src={logoRealogy} className="logos" alt="Realogy Logo" />
            </div>

            <div className="m-4">
              <img src={logoLiveOak} className="logos" alt="Northwestern Mutual Logo" />
            </div>
            <div className="m-4">
              <img src={logoSilvertonPartners} className="logos" alt="Northwestern Mutual Logo" />
            </div>
            <div className="m-4">
              <img src={logoServiceMaster} className="logos" alt="Northwestern Mutual Logo" />
            </div>
          </div>
        </section>

        <section className="getStarted text-center bg-consumer-blue text-white py-32">
          <h2 className="mb-4 text-6xl font-medium">
            It&rsquo;s easy to get started
          </h2>
          <p className="text-3xl mb-8">
            And it&rsquo;s free. Two things we all love.
          </p>
          <div>
            <Link to="/sign-up" className="inline-block bg-dark-blue shadow-lg rounded-full no-underline text-xl text-white px-8 py-5">
              Sign Up Free!
            </Link>
          </div>
        </section>

        <section className="ojoAgent flex flex-center bg-dark-blue text-white py-32">
          <div className="container-xl mx-auto">
            <div className="">
              <h2 className="mb-4 text-6xl font-medium">
                Pssst… Are you a five-star agent?
              </h2>
              <ul className="text-xl mb-8">
                <li>Attract and engage new referrals</li>
                <li>Build and strengthen your online reputation</li>
                <li>Deliver a premium experience referrals love</li>
              </ul>
              <div>
                <Link to="/sign-up" className="inline-block text-white text-xl px-8 py-5 no-underline rounded-full bg-transparent border-2 border-solid border-agent-blue">
                  Get early access to OJO Agent
                </Link>
              </div>
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
            <a className="inline-block mx-4 text-grey-darkest no-underline" href="https://goo.gl/maps/sWGfgxhcRwT2" target="_blank">720 Brazos St #110</a>
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

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Get started with OJO for free</h1>
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
          <Route path="/sign-up" component={SignUp}/>
          {/* <Route path="/sign-up-verify" component={AuthVerify}/>
          <Route path="/sign-up-thanks" component={AuthVerify}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
