import { FC } from 'react';
import './benefits-section.scss';

export const BenefitsSection : FC = () => {
    return (
      <section className="benefits-section">
      <div className="container">
        <h2 className="benefits-section__title">Why choose us ?</h2>
      </div>
      <div className="benefits-section__description-grid">
        <div className="benefits-section__description container">
          <h2 className="benefits-section__description-header">
            Stylish bouquets by florists
          </h2>
          <p className="benefits-section__description-text">
            At our floral studio, our professional florists craft the most
            elegant and stylish bouquets using only the freshest and highest
            quality materials available. We stay up-to-date with the latest
            floral design trends and offer unique arrangements that are sure to
            impress. Let us brighten up your day with our stunning bouquets and
            same-day delivery service.
          </p>
        </div>
        <div className="benefits-section__description container">
          <h2 className="benefits-section__description-header">On-time delivery</h2>
          <p className="benefits-section__description-text">
            Never miss a moment with our on-time flower delivery service. Our
            couriers will deliver your bouquet personally, without boxes, to
            ensure it arrives in perfect condition. Trust us to deliver your
            thoughtful gift reliably.
          </p>
        </div>
        <div className="benefits-section__description container">
          <h2 className="benefits-section__description-header">Safe payment</h2>
          <p className="benefits-section__description-text">
            You can feel secure when placing an order with us, as we use
            industry-standard security measures to protect your payment
            information. Your transaction will be safe and hassle-free, so you
            can shop with confidence.
          </p>
        </div>
        <div className="benefits-section__description container">
          <h2 className="benefits-section__description-header">
            Subscription by your needs
          </h2>
          <p className="benefits-section__description-text">
            With our subscription service tailored to your specific needs, you
            can enjoy the convenience of having beautiful bouquets delivered
            straight to your door at regular intervals. Our flexible service is
            perfect for busy individuals or those who want to ensure they always
            have fresh flowers on hand. You'll save time and money with this
            hassle-free solution to your floral needs.
          </p>
        </div>
      </div>
    </section>
  )

}