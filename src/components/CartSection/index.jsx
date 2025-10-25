import "./CartSection.css";
import img1 from "../../assets/products/image1.png";
import img2 from "../../assets/products/5e634682db5174aff99bb9337d2dc9598a0b44e4.png";
import Button from "../common/Button";
import PagePath from "../common/PagePath";
import CopounSection from "../CopounSection";
import { useNavigate } from "react-router-dom";
export default function CartSection() {
	const path = ['Home', 'Cart'];
	const navigate = useNavigate();
	
	const goToCheckout = () => {
		navigate("/checkout"); // 👈 navigate programmatically
	};
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
			<div className="cart-section">
				<PagePath path={path}/>
				<div className="cart-section__content">


					<div className="cart-container">
						<div className="cart-header">
							<div className="cart__item">Product</div>
							<div className="cart__item">Price</div>
							<div className="cart__item">Quantity</div>
							<div className="cart__item">Subtotal</div>
						</div>
						{cartItems.map((item) => (
							<div key={item.id} className="cart-body">
								<div className="cart__item">
									<div className="cart-item__img">
										<img src={item.image} alt={item.name} />
										<div className="cart-item__close">
											<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 7L4 4M7 1L3.99943 4M3.99943 4L1 1M4 4L7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>

										</div>
									</div>
									<div className="cart-item__name">{item.name}</div>
								</div>
								<div className="cart__item">${item.price}</div>
								<div className="cart__item quantity">
									<input type="number" value={item.quantity} />
								</div>
								<div className="cart__item">${item.subtotal}</div>
							</div>
						))}
					</div>


					<div className="cart-actions">
						<Button label="Return To Shop" variant="outlite" />
						<Button label="Update Cart" variant="outlite" />
					</div>
					<div className="cart-footer">
						<div className="cart-footer__coupon">
							<CopounSection/>
						</div>
						<div className="cart-footer__total">
							<h3>Cart Total</h3>
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
							<div className="chechkout-btn">
								<Button label="Procees to checkout" variant="primary" onClick={goToCheckout}/>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</>
	);
}