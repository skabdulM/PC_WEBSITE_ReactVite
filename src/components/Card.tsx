import { Key } from 'react';
import './Card.css'
// interface CardData{
//     img:string,
//     title:string,
//     description:string
// }
const Card = (props: { details: any[]; }) => {
    return (
        <>
            {props.details.map((value: any,index: Key | null | undefined)=>(

            <div className="col-lg-3 col-md-4 col-sm-12">

            <div className="card" style={{ "width": "18rem;" }} key={index}>
                <img src={value.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            ))}


        </>
    );
}


export default Card;