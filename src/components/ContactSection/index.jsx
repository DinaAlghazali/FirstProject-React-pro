

import "./ContactSection.css";
import Button from "../common/Button";
import PagePath from "../common/PagePath";
export default function ContactSection() {
	const path = ['Home', 'Contact'];

	return (
		<>
			<div className="contact-section">
				<PagePath path={path}/>
				<div className="contact-section__container">
					<div className="contact-section__container__sidebar">
						<div className="contact-section__container__sidebar__item">
							<div>
								<div className="contact-section__container__sidebar__item__icon">
										<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.30521 4.99107L5.92221 1.08607C5.53221 0.636068 4.81721 0.638068 4.36421 1.09207L1.58221 3.87907C0.754209 4.70807 0.517209 5.93907 0.996209 6.92607C3.85783 12.851 8.63625 17.6362 14.5572 20.5061C15.5432 20.9851 16.7732 20.7481 17.6012 19.9191L20.4092 17.1061C20.8642 16.6511 20.8652 15.9321 20.4112 15.5421L16.4912 12.1771C16.0812 11.8251 15.4442 11.8711 15.0332 12.2831L13.6692 13.6491C13.5994 13.7223 13.5075 13.7705 13.4076 13.7864C13.3077 13.8023 13.2053 13.785 13.1162 13.7371C10.8867 12.4532 9.0372 10.6013 7.75621 8.37007C7.70824 8.28082 7.69087 8.17829 7.70676 8.07822C7.72266 7.97815 7.77094 7.88606 7.84421 7.81607L9.20421 6.45507C9.61621 6.04107 9.66121 5.40107 9.30521 4.99007V4.99107Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>

								</div>
								<p className="text-bold">
									Call To Us
								</p>
							</div>
							<p className="text-md">We are available 24/7, 7 days a week.</p>
							<p className="text-md">Phone: +8801611112222</p>
						</div>
						<div className="contact-section__container__sidebar__divider">
						</div>
						<div className="contact-section__container__sidebar__item">
							<div>
								<div className="contact-section__container__sidebar__item__icon">
									<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 0.750061L10.75 7.75006L20.75 0.750061M0.75 14.7501H20.75V0.750061H0.75V14.7501Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

								</div>
								<p className="text-bold">
									Write To US
								</p>
							</div>
							<p className="text-md">Fill out our form and we will contact you within 24 hours.</p>
							<p className="text-md">Emails: customer@exclusive.com</p>
							<p className="text-md">Emails: support@exclusive.com</p>
						</div>
					</div>
					<div className="contact-section__container__Form">	
						<form>
							<div className="contact-form__group">
								<input type="text" placeholder="Your Name" className="contact-form__input" />
								<input type="email" placeholder="Your Email" className="contact-form__input" />
								<input type="phone" placeholder="Your Phone" className="contact-form__input" />
							</div>
							<div className="contact-form__group">
								<input type="textarea" placeholder="Your Message" className="contact-form__input" />
							</div>
							<div className="contact-form__footer">
								<Button label="Send Message" variant="primary" />
							</div>
						</form>
						
					</div>
				</div>
			</div>
		</>
	);
}