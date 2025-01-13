import './style.scss';

function PaymentWidgets() {
  return (
    <div className="payment-widgets">
      <div className="payment-widget">
        <div className="payment-widget__icon">💳</div>
        <div className="payment-widget__content">
          <p className="payment-widget__title">
            Pay with cash or card on delivery at the door!
          </p>
        </div>
      </div>

      <div className="payment-widget">
        <div className="payment-widget__icon">💳</div>
        <div className="payment-widget__content">
          <div className="payment-widget__text">
            <p>4 interest-free payments</p>
            <strong>85.22 AED</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentWidgets;
