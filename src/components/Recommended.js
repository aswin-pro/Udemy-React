import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended(){
    return(
        <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">

            <div className="course-card">
                <img src={c1} alt="" />
                <h3>Python Data Visaulisation</h3>
                <p>Col steele</p>
                <p>4.1 ⭐ ⭐ ⭐ ⭐</p>
                <p>799 <del>2999</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt="" />
                <h3>Web Development Bootcamp 2023</h3>
                <p>Job steev</p>
                <p>3.4 ⭐ ⭐ ⭐ </p>
                <p>999 <del>3999</del></p>
            </div>

            <div class="course-card">
                <img src={c3} alt="" />
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Roselin Merry</p>
                <p>4.9 ⭐ ⭐ ⭐ ⭐ </p>
                <p>499 <del>1999</del> </p>
            </div>

            <div class="course-card">
                <img src={c4} alt=""/>
                <h3>Advanced Python Bootcamp</h3>
                <p>Steeve math</p>
                <p>3.2 ⭐ ⭐ ⭐</p>
                <p>499 <del>999</del></p>
            </div>

        </div>
    </div>
    )
}

export default Recommended

