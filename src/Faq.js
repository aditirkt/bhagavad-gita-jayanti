import React from 'react';

const Faq = () => (
  <section>
    <h2>Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            When is Bhagavad Gita Jayanti celebrated this year?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body">
            Bhagavad Gita Jayanti is on December 11th, 2024, the 11th day of Shukla Paksha in Margashirsha month.
          </div>
        </div>
      </div>
      <!-- Add other FAQ items similarly -->
    </div>
  </section>
);

export default Faq;
