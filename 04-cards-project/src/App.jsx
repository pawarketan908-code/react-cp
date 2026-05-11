
import Card from './components/Card'

// import {User} from "lucide-react"
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.642YXM6tk4j5Gla9_BkzWgHaHa?pid=Api&P=0&h=180",
    CompanyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.3qsMnUTHk9Zs8dA5meZsSwHaEK?pid=Api&P=0&h=180",
    CompanyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.0Y8Hmr7KiAI_InrwDPpj9wHaHI?pid=Api&P=0&h=180",
    CompanyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180",
    CompanyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.JFmuUQbJLlVGrlMmamLZHgHaHa?pid=Api&P=0&h=180",
    CompanyName: "Netflix",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.W39puUOzRxywCGPL7ZIeCwHaHa?pid=Api&P=0&h=180",
    CompanyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.Lcag4KigiB7D4179fFQcegHaHa?pid=Api&P=0&h=180",
    CompanyName: "X (Twitter)",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?pid=Api&P=0&h=180",
    CompanyName: "Adobe",
    datePosted: "2 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uH4dGMRTIYF2UxGFv67TAgHaHa?pid=Api&P=0&h=180",
    CompanyName: "Uber",
    datePosted: "8 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.ozDiSGJlUqI6815cRlJiNAHaHa?pid=Api&P=0&h=180",
    CompanyName: "LinkedIn",
    datePosted: "12 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Gurgaon, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        console.log(idx);

      return <div key={idx}>
        <Card company={elem.CompanyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2}/>
      </div>
      })}
      
    </div>
  )
}

export default App
