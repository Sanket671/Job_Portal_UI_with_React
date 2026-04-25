import React from 'react'
import Card from './components/cards.jsx'


const App = () => {
  const jobs = [
  {
    logo: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
    companyName: "Google",
    postedAgo: "2 days ago",
    role: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$80/hour",
    location: "Bangalore, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=dgu6jg2zTf4H&format=png&color=000000",
    companyName: "Meta",
    postedAgo: "4 days ago",
    role: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Hyderabad, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=31ntOI4KZ6HK&format=png&color=000000",
    companyName: "Amazon",
    postedAgo: "5 days ago",
    role: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
    companyName: "Microsoft",
    postedAgo: "1 day ago",
    role: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Pune, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
    companyName: "Apple",
    postedAgo: "3 days ago",
    role: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Bangalore, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=GJ1x26ZmfZ96&format=png&color=000000",
    companyName: "Netflix",
    postedAgo: "6 days ago",
    role: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Remote"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000",
    companyName: "Adobe",
    postedAgo: "2 days ago",
    role: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hour",
    location: "Noida, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=N1tTKPEhzeBm&format=png&color=000000",
    companyName: "Uber",
    postedAgo: "7 days ago",
    role: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$82/hour",
    location: "Bangalore, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=4vsQyZl8Gtog&format=png&color=000000",
    companyName: "Airbnb",
    postedAgo: "3 days ago",
    role: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Remote"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=34833&format=png&color=000000",
    companyName: "Tesla",
    postedAgo: "5 days ago",
    role: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$92/hour",
    location: "Palo Alto, USA"
  }
];

	
  return (
    <div>
      <div className="parent">
		 {jobs.map((job,idx) => {
			console.log(job.logo,job.companyName,idx);
			return <div key={idx}>
				<Card logo={job.logo} companyName={job.companyName} postedAgo={job.postedAgo} role={job.role} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}/>
			</div> 
		 })}
      </div>
    </div>
  )
}

export default App