import { Link, useParams } from "react-router-dom"

export default function House(props) {
    const { id } = useParams()
    const house = props.houses.find(house => house.id.toString() === id)
    console.log(house.people)
    if(!house) return <h3>Houses not rendering</h3>

    const members = house.people.map((member, i) => {
        return (
            <li key={`li-${i}`}>
                {member.name}
            </li>
        )
    })
return (
    <div className="page">
        <Link to = "/">Houses</Link>
        <div className="header">
            
            <h2>Members of a GoT House</h2>
            
        </div>
        <h1>{house.name}</h1>
        <ul className="list">
            <ol>{members}</ol>
        </ul>
    </div>
)
}