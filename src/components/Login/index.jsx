
import Button from "../common/Button";
export default function Login() {
	return (
		<>
			<div>
				<div className="auth__header">	
					<h2>Log in to Exclusive</h2>
					<p>Enter your details below</p>
				</div>
				<div className="auth__form">
					<form>
						<div className="form__group">
							<input type="email" placeholder="Email or Phone Number" className="form__input"/>
							<input type="password" placeholder="Password" className="form__input" />
						</div>
						<div className="login__actions">
							<Button label="Login" variant="primary" />
							<span>Forget Password?</span>
						</div>
						
					</form>
				</div>
			</div>	

		</>
	);
}