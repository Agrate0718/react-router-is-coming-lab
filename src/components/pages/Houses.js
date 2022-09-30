import { Link } from "react-router-dom";

export default function Houses(props) {
    const housesArr = props.houses.map((house, i) => {
        return (
            <li key={`li-${i}`}>

                <Link
                    to={`/houses/${house.id}`}
                    key={`house-${i}`}
                >
                    {house.name}
                </Link>
            </li>
        )
    })
    return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
             <ul className="list">
            <ol>{housesArr}</ol>
        </ul>
       
    </div>
    )
}