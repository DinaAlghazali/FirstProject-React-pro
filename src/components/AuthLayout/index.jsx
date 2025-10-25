import "./AuthLayout.css";
import loginImage from "../../assets/login.png";
export default function AuthLayout({
	children
}) {
	return (
		<>
			<div className="auth-layout">
				<div className="auth-layout__container">
					<div className="auth-layout__image">
						<img src={loginImage} alt="Logo" />
					</div>
					<div className="auth-layout__content">
						{children}
					</div>
				</div>
			</div>
		</>
	);
}