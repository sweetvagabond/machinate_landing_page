import React from "react"
import UseCaseCards from "./UseCaseCards.jsx";
import heroIllustration from './assets/illustrations/hero-illustration.svg';
import bringData from './assets/illustrations/bring-your-data-illustration.svg';
import buildModels from './assets/illustrations/build-models-illustration.svg';
import buildModelsEquations from './assets/illustrations/build-models-equations.svg';
import makePredictions from './assets/illustrations/make-predictions-illustration.svg';

const LandingPage = () => {
  return(
    <div>
      <div className="intro-container">
        <div className="hero-banner">
          <h1>
            Realize the promise of machine learning for your business.
          </h1>
          <p>
            Work in Excel or on the web to build predictive models, develop forecasts, clean up messy data and identify bad data all with the click of a button.
          </p>
        </div>
        <img src={heroIllustration} className="hero-illustration" alt="" />
      </div>
      <div className="how-it-works-container step-one">
        <div className="how-it-works-text white">
          <h2 className="section-intro">
            Introducing Machinate
          </h2>
          <h3 className="large">
            Machinate puts the power of machine learning in the hands of business users.
          </h3>
          <p>
            Our software handles all technical data science so you can focus on results and making decisions.
          </p>
        </div>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
      <div className="how-it-works-container step-two">
        <div className="how-it-works-text white">
          <h2 className="section-intro">
            Bring Your Data
          </h2>
          <h3 className="large">
            In your spreadsheet or on the web, Machinate meets you wher you work.
          </h3>
          <p>
            Work in Excel or on the web. Arrange your data into columns. Press go.
          </p>
        </div>
        <img src={bringData} alt="" />
      </div>
      <div className="how-it-works-container step-three">
        <img src={buildModels} alt="" />
        <div className="how-it-works-text white">
          <h2 className="section-intro">
            Build Models
          </h2>
          <h3 className="large">
            Our software analyzes your data and runs thousands of experiments to build the best possible predictive model.
          </h3>
          <p>
            That's it, now you've built a model. Time to put it to use.
          </p>
        </div>
      </div>
      <div className="how-it-works-container step-four">
        <div className="how-it-works-text white">
          <h2 className="section-intro">
            Make Predictions
          </h2>
          <h3 className="large">
            As you receive new data, run your models to create predictions about your business.
          </h3>
          <p>
            With predictions you can:
          </p>
          <ul>
            <li>Score the win or loss probability on a new lead.</li>
            <li>Forecast Employee Attrition.</li>
            <li>Predict the right price to get a new sale.</li>
            <li>The possibilities are endless.</li>
          </ul>
        </div>
        <img src={makePredictions} alt="" />
      </div>
      <div className="use-cases-container">
        <h2 className="section-intro">
          Real World Uses
        </h2>
        <div className="use-cases-text">
          <div className="use-cases-banner">
            <h3 className="large">
              As you receive new data, run your models to create predictions about your business.
            </h3>
          </div>
          <div className="use-cases-details">
            <p>
              Your domain expertise is what counts. Allowing you to work directly with your data and applying advanced statistical modeling is what will drive value for your business and build your personal brand within the company. Let Machinate be your partner in finding new insights that drive revenue, save costs, and move important disussions forward. Be the analytics leader in your organization.
            </p>
          </div>
        </div>
        <UseCaseCards />
      </div>
      <div className="how-it-works-container step-four">
        <div className="how-it-works-text white">
          <h2 className="section-intro">
            About Machine Learning
          </h2>
          <div className="how-it-works-banner">
            <h3 className="large">
              As you receive new data, run your models to create predictions about your business.
            </h3>
          </div>
          <div className="use-cases-details">
            <p>
              Your domain expertise is what counts. Allowing you to work directly with your data and applying advanced statistical modeling is what will drive value for your business and build your personal brand within the company. Let Machinate be your partner in finding new insights that drive revenue, save costs, and move important disussions forward. Be the analytics leader in your organization.
            </p>
          </div>
        </div>
      </div>
      <div className="how-it-works-container pink-background">
        <div className="contact-us-text white">
          <h2 className="section-intro">
            Contact Us
          </h2>
          <div className="how-it-works-banner">
            <h3 className="large">
              Contact us at info@machinate.com to start the conversation.
            </h3>
          </div>
        </div>
      </div>
      <div className="outro-container">
        <h3 className="large">
          Machinate is a machine learning platform for your business.
        </h3>
      </div>
    </div>
  );
}

export default LandingPage;
