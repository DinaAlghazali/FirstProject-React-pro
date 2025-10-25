

import "./AccountSection.css";
import Button from "../common/Button";
import PagePath from "../common/PagePath";
export default function AccountSection() {
	const path = ['Home', 'My Account'];

	return (
		<>
			<div className="account-section">
				<div className="account-section__header">
					<PagePath path={path}/>
					<div className="account-section__welcome">
						Welcome <span>John Doe</span>
					</div>

				</div>
				<div className="account-section__container">
					<div className="account-section__sidebar">
						<div className="account-section__item">
							<h3 className="account-section__title">Manage My Account</h3>
							<ul>
								<li className="active">My Profile</li>
								<li>Address Book</li>
								<li>My Payment Options</li>
							</ul>
						</div>
						<div className="account-section__item">
							<h3 className="account-section__title">My Orders</h3>
							<ul>
								<li>My Returns</li>
								<li>My Cancellations</li>
							</ul>
						</div>
						<div className="account-section__item">
							<h3 className="account-section__title">My WishList</h3>
						</div>
					</div>
					<div className="account-section__content">
						<h3>Edit Your Profile</h3>
						<form>
							<div className="account-form__row">
								<div className="account-section__input">
									<label>First Name</label>
									<input type="text" placeholder="First Name" />
								</div>
								<div className="account-section__input">
									<label>Last Name</label>
									<input type="text" placeholder="Last Name" />
								</div>
							</div>
							<div className="account-form__row">
								<div className="account-section__input">
									<label>Email</label>
									<input type="email" placeholder="Email" />
								</div>
								<div className="account-section__input">
									<label>Address</label>
									<input type="text" placeholder="Address" />
								</div>
							</div>
							<div className="account-form__row">
								<div className="account-section__input account-section__input--password">
									<label>Password Changes</label>
									<input type="password" placeholder="Current Password" />
									<input type="password" placeholder="New Password" />
									<input type="password" placeholder="Confirm New Passwod" />
								</div>
							</div>
							<div className="account-form_actions">
								<span>Cancel</span>
								<Button label="Save Changes" variant="primary" />
							</div>

						</form>
					</div>
				</div>
			</div>
		</>
	);
}