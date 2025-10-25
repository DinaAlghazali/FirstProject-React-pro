import  "./OurTeamSection.css";
import team1 from "../../assets/team/team1.png"
import team2 from "../../assets/team/team2.png"
import team3 from "../../assets/team/team3.png"
import {  FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function OurTeamSection() {
	const team = [
		{
			name: "Tom Cruise",
			img: team1,
			role: "Founder & Chairman"
		},
		{
			name: "Emma Watson",
			img: team3,
			role: "Managing Director"
		},
		{
			name: "Will Smith",
			img: team2,
			role: "Product Designer"
		}
	]
	return (
		<div className="our-team">
			<div className="our-team__container">
				{team.map((item, idx) => (
					<div className="our-team__card">
						<div className="team__img">
							<img src={item.img} alt={'team1'} className="team__img" />
						</div>
						<h3>{item.name}</h3>
						<p>{item.role}</p>
						<div className="social__icons">
							<FaTwitter />
							<FaInstagram />
							<FaLinkedinIn />
						</div>
					</div>
				))}
			
			</div>
		</div>
	)
}