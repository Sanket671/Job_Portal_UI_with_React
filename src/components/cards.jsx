import React from 'react'

const Card = (params) => {
  return (
    <div>
        <div className="card">
			<div className="top">
				<img className="logo" src={params.logo} alt="" />
				<div className="save">
					<img className="save-Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKp1xXZeBLz7sEx2e8wUebU9bIF9PeZj4hF2sknz4wrrGQWF0d9DgCrYv4Osz9hzFKw37WHWkv3HnRPFXC_Fk3EVghnH4jjQ&s&ec=121644719" alt="" />
					<button className="save-Button">Save</button>
				</div>
			</div>
			<div className="post">
				<div className="company-name">{params.companyName}</div>
				<div className="posted-ago">{params.postedAgo}</div>
			</div>
			<div className="role">{params.role}</div>
			<div className="tags">
				<div className="tag1">{params.tag1}</div>
				<div className="tag2">{params.tag2}</div>
			</div>
			<hr />
			<div className="bottom">
				<div className="pay-loc">
					<div className="pay">{params.pay}</div>
					<div className="location">{params.location}</div>
				</div>
				<button className="btn">Apply Now</button>
			</div>
        </div>
    </div>
  )
}

export default Card