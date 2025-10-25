
import "./Wishlist.css";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";
import img1 from "../../assets/products/image1.png";
import SectionHeader from "../SectionHeader";
export default function Wishlist() {
	const products = [
			{
				image: img1,
				title: "HAVIT HV-G92 Gamepad",
				price: "120",
				oldPrice: "160",
				discount: 40,
			},
			{
				image: img1,
				title: "AK-900 Wired Keyboard",
				price: "960",
				oldPrice: "1160",
				discount: 35,
			},
			{
				image: img1,
				title: "IPS LCD Gaming Monitor",
				price: "370",
				oldPrice: "400",
				discount: 30,
			},
			{
				image: img1,
				title: "S-Series Comfort Chair",
				price: "375",
				oldPrice: "400",
				discount: 25,
			}
		];
	return (
		<>
			<div className="page-container">
				<div className="page-header">
					<p>Wishlist (4)</p>
					<Button label="Move All To Bag" variant="outlite" />
				</div>
				<div className="product-list">
					{products.map((item, index) => (
						<ProductCard key={index} {...item} 
						showDeleteIcon={true}
						showHeartIcon={false}
						showEyeIcon={false}
						showRating={false}
						showAddToCart={true} />
					))}
				</div>
				<div className="page-header" style={{ marginTop: "60px" }}>
					<SectionHeader title="Just For You" tag="Just For You" showTimer={false} showBigTitle={false} />
					<Button label="See All" variant="outlite" />
				</div>
				<div className="product-list">
					{products.map((item, index) => (
						<ProductCard key={index} {...item}
						showHeartIcon={false} 
						showAddToCart={true} />
					))}
				</div>
			</div>
		</>
	);
}