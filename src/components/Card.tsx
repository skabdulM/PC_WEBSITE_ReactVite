import './Card.css'
const Card = (props) => {
    return (
        <>
            {props.details.map((value,index)=>(

            <div className="col-lg-3 col-md-4 col-sm-12">

            <div className="card" style={{ "width": "18rem;" }} key={index}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            ))}


        </>
    );
}


export default Card;