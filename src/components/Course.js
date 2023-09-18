import React from "react";
import "../style/course.css"


const Course = () => {
    return (
        <section className="course">
            <h1>Courses We Offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="course-col">
                    <h3>Intermediate</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        architecto quis non quae ipsam at aut tempora eius suscipit sed
                        nesciunt ex voluptatem necessitatibus natus, incidunt cum, nostrum rem
                        quam.
                    </p>
                </div>
                <div className="course-col">
                    <h3>Degree</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        architecto quis non quae ipsam at aut tempora eius suscipit sed
                        nesciunt ex voluptatem necessitatibus natus, incidunt cum, nostrum rem
                        quam.
                    </p>
                </div>
                <div className="course-col">
                    <h3>Post Graduate</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        architecto quis non quae ipsam at aut tempora eius suscipit sed
                        nesciunt ex voluptatem necessitatibus natus, incidunt cum, nostrum rem
                        quam.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Course;
