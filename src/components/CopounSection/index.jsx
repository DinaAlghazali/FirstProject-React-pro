import "./CopounSection.css";
import Button from "../common/Button";

export default function CopounSection() {
	return (
		<>
			<div className="coupon">
				<input type="text" placeholder="Coupon Code" />
			</div>
			<Button label="Apply Coupon" variant="primary" className="coupon__btn"/>
		</>
	)
}