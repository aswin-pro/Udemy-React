import saleimg from "../assets/images/sale image.jpg"
function Saleimage(){
    return(
        <div className="sale-image">
        <img src={saleimg} alt="Sale Image" />
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save</h2>
            <p>Get the top Courses for just 499. Just one day to save but a Lifetime to learn</p>
        </div>
    </div>
    )
}
export default Saleimage