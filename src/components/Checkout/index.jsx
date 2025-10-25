import './Checkout.css';
import img1 from "../../assets/products/image1.png";
import img2 from "../../assets/products/5e634682db5174aff99bb9337d2dc9598a0b44e4.png";
import bank from "../../assets/bank.png";
import Button from "../common/Button";
import PagePath from "../common/PagePath";
import CopounSection from "../CopounSection";
export default function Checkout() {
	const path = ['Account', 'My Account', 'Product', 'View Cart', 'CheckOut'];
	const cartItems = [
		{
			id: 1,
			name: "LCD Monitor",
			price: 650,
			quantity: 1,
			image: img2,
			subtotal: 650
		},
		{
			id: 2,
			name: "H1 Gamepad",
			price: 550,
			quantity: 2,
			image: img1,
			subtotal: 1100
		}
	];
	return (
		<>
		<div className="checkout-section">
			<PagePath path={path}/>
			<div className="checkout-container">
				<div className="billing-address">
					<h2>Billing Details</h2>
					<form className='billing-form'>
						<div className="billing-form__group">
							<label htmlFor="name">First Name</label>
							<input type="text" id="name" placeholder="" className='bg-input'/>
						</div>
						<div className="billing-form__group">
							<label htmlFor="company">Company Name</label>
							<input type="text" id="company" placeholder="" className='bg-input'/>
						</div>
						<div className="billing-form__group">
							<label htmlFor="street">Street Address*</label>
							<input type="text" id="street" placeholder="" className='bg-input'/>
						</div>
						<div className="billing-form__group">
							<label htmlFor="details">Apartment, floor, etc. (optional)</label>
							<input type="text" id="details" placeholder="" className='bg-input'/>
						</div>
						<div className="billing-form__group">
							<label htmlFor="city">Town/City*</label>
							<input type="text" id="city" placeholder="" className='bg-input'/>
						</div>
						<div className="billing-form__group">
							<label htmlFor="phone">Phone Number*</label>
							<input type="text" id="phone" placeholder="" className='bg-input'/>
						</div>
						<div className="billing-form__group">
							<label htmlFor="email">Email Address*</label>
							<input type="text" id="email" placeholder="" className='bg-input'/>
						</div>
					</form>
					<div className="save-address">
						<label className="custom-checkbox">
							<input type="checkbox" />
							<span className="checkmark"></span>
							<span className="label-text">Save this information for faster check-out next time</span>
						</label>
					</div>
				</div>
				<div className="payment-method">
					<div className='item-list'>
						{cartItems.map((item) => (
							<div className="item-card" key={item.id}>
								<div className="item-card__details">
									<div className="item-card__image-wrapper">
										<img src={item.image} alt={item.name} className="item-card__image" />
									</div>
									<div className="item-card__name">{item.name}</div>
								</div>
								<div className="item-card__price">${item.price}</div>
							</div>
						))}


					</div>
					<div className='total-list'>
							<div className="total">
								<p>Subtotal:</p>
								<p>$1750</p>
							</div>
							<div className="h-line"></div>
							<div className="total">
								<p>Shipping:</p>
								<p>Free</p>
							</div>
							<div className="h-line"></div>
							<div className="total">
								<p>Total:</p>
								<p>$1750</p>
							</div>
						</div>
						<div className="payment">
							<div className='payment__method'>
								<label className="custom-radio">
									<input type="radio" name="payment" value="bank" />
									<span className="radio-mark"></span>
									<span className="label-text">Bank</span>
								</label>
								<img src={bank} alt="bank" />
							</div>
							<div className='payment__method'>
								<label className="custom-radio">
									<input type="radio" name="payment" value="cash_on_delivery" />
									<span className="radio-mark"></span>
									<span className="label-text">Cash on delivery</span>
								</label>
							</div>
							
						</div>
					<div className="checkout-footer__coupon">
						<CopounSection/>
					</div>
					<Button label="Place Order" variant="primary" className="coupon__btn"/>
				</div>
			</div>
		</div>
		</>
	);
}