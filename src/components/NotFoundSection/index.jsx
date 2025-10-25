
import Button from "../common/Button";
import "./NotFoundSection.css"
import PagePath from "../common/PagePath";
import { useNavigate } from "react-router-dom";
export default function NotFoundSection() {
	const path = ['Home', '404 Error'];
	 const navigate = useNavigate();
	
		const goToHome = () => {
			navigate("/"); // 👈 navigate programmatically
		};
	
	return (
		<>
			<div className="page-section">
				<PagePath path={path}/>
				<div className="page-section__container">
					<h2>404 Not Found</h2>
					<p>Your visited page not found. You may go home page.</p>
					<Button label="Back to home page" variant="primary" onClick={goToHome} />
				</div>
			</div>
		</>
	);
}