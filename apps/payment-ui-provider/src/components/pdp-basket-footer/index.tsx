import './style.scss';

function PdpBasketFooter() {
  return (
    <div className="pdp-basket-footer">
      <div className="content">
        <span className="discount">-40%</span>
        <div className="price">
          <span className="amount">340.88 AED</span>
          <span className="original">569.13</span>
        </div>
      </div>
      <button className="cta">Add To Cart</button>
    </div>
  );
}

export default PdpBasketFooter;
