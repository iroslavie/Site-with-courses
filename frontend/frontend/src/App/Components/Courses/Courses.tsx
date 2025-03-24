import React from "react";
import "./Courses.scss";
import CourseArray from "./Course"; 
import course1 from "../../../assets/picturesCourses/course1.png";
import course2 from "../../../assets/picturesCourses/course2.png";
import course3 from "../../../assets/picturesCourses/course3.png";
import course4 from "../../../assets/picturesCourses/course4.png";

const COURSES_HEADER = "Курсы";

interface Course {
    id: number;
    name: string;
    long: string;
    price: string;
    detail?: string;
    button: string;
    image: string;
}

const courses: Course[] = [
    { id: 1, name: "Просто\nловля", long: "3 дня | марафон", price: "бесплатно", detail: "Подробнее", button: "Купить", image: course1 },
    { id: 2, name: "Профессия\nловец", long: "6 месяцев | курс", price: "от 130 жуков", detail: "Подробнее", button: "Купить", image: course2 },
    { id: 3, name: "Специалист жукоснабжения", long: "6 месяцев | курс", price: "от 100 жуков", button: "Купить", image: course3 },
    { id: 4, name: "Профессия\nжуктестер", long: "3 месяца | курс", price: "от 80 жуков", detail: "Подробнее", button: "Купить", image: course4 }
];

const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses-header-container">
                <div className="borders-courses-header">
                    <div className="courses-header">{COURSES_HEADER}</div>
                </div>
            </div>
            <div className="courses-list-container">
                <div className="borders-courses-list">
                    <div className="courses-list">
                        {courses.map((course) => (
                            <CourseArray key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;