import React from "react";
import logo from "../../../assets/picturesCourses/Vector.svg";

interface Course {
    id: number;
    name: string;
    long: string;
    price: string;
    detail?: string;
    button: string;
    image: string;
}

interface CourseProps {
    course: Course;
}

const CourseArray: React.FC<CourseProps> = ({ course }) => {
    return (
        <div className={`course-container-${course.id}`}>
            <div className={`image-course-container-${course.id}`}>
                <img
                    className={`image-course-${course.id}`}
                    src={course.image}
                    alt={`Фото курса ${course.name}`}
                />
            </div>
            <div className={`borders-text-course-${course.id}`}>
                <div className={`text-course-${course.id}`}>
                    <div className={`name-course-${course.id}`}>{course.name}</div>
                    <div className={`long-and-type-course-container-${course.id}`}>
                        <div className={`logo-container-${course.id}`}>
                            <img
                                className={`logo-course-${course.id}`}
                                src={logo}
                                alt="Логотип"
                            />
                        </div>
                        <div className={`long-text-course-${course.id}`}>{course.long}</div>
                    </div>
                    <div className={`price-course-container-${course.id}`}>
                        <div className={`price-text-course-${course.id}`}>{course.price}</div>
                        {course.detail && <div className={`detail-course-${course.id}`}>{course.detail}</div>}
                    </div>
                </div>
            </div>
            <div className={`borders-button-course-${course.id}`}>
                <button className={`button-course-${course.id}`}>{course.button}</button>
            </div>
        </div>
    );
};

export default CourseArray;