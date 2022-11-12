
import pic from "book.jpg"
import "./styles/cards.css"
export default function Card(props:{name:String,author:String,rating:Number,year:Number,genre:String}){
return(
    <div className="card">
        <>
        <img src="./book.jpg" alt=""  />
        Title:{props.name} <br />
        Author:{props.author} <br />
        Year of Publishing:{props.year} <br />
        Genre:{props.genre}
        </>
    </div>
)
}