import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"
function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__subtitle">Pick the best for you</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={c8} alt="" />
                <h3>Web Development Masterclass Online</h3>
                <p>Maxmocraz</p>
                <p>4.1 ⭐ ⭐ ⭐ ⭐</p>
                <p>799 <del>2999</del></p>
            </div>

            <div class="course-card">
                <img src={c7} alt="" />
                <h3>Complete javascript basic to advance</h3>
                <p>Bean steev</p>
                <p>4.1 ⭐ ⭐ ⭐ ⭐</p>
                <p>799 <del>2999</del></p>
            </div>

            <div class="course-card">
                <img src={c6} alt="" />
                <h3>Advanced python with Data Structure</h3>
                <p>Mark</p>
                <p>4.1 ⭐ ⭐ ⭐ ⭐</p>
                <p>799 <del>2999</del></p>
            </div>

            <div class="course-card">
                <img src={c5} alt="" />
                <h3> Web Development fundamentals</h3>
                <p>Nikkle</p>
                <p>4.1 ⭐ ⭐ ⭐ ⭐</p>
                <p>799 <del>2999</del></p>
            </div>

            <div class="course-card">
                <img src={c1} alt="" />
                <h3>Python Data Visaulisation </h3>
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
                <p>Roselin marry</p>
                <p>4.9 ⭐ ⭐ ⭐ ⭐ </p>
                <p>499 <del>1999</del> </p>
            </div>

            <div class="course-card">
                <img src={c4} alt="" />
                <h3>Advanced Python Bootcamp </h3>
                <p>Steev math</p>
                <p>3.2 ⭐ ⭐ ⭐</p>
                <p>499 <del>999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Popular