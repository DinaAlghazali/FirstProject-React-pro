import "./PagePath.css";
export default function PagePath({path}) {
	return (
		<>
			<div className="page-path">
				{path.map((item, idx) => (
					<div key={idx}  className={`page-path__item ${idx === path.length - 1 ? 'active' : ''}`} >
						<span>{item}</span>
						{idx !== path.length - 1 && <span className="Separator">/</span>}	
					</div>
				))}
			</div>
		</>
	)
}