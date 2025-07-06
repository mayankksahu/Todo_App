import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{
            backgroundColor: "#f0f2f5",
            minHeight: "90vh",
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            //   border: "5px solid red"
        }}>
            <div className="container p-4 bg-white rounded shadow" style={{ maxWidth: "800px" }}>
                <h1 className="mb-4 text-center" style={{ color: "#2c3e50", fontWeight: "bold" }}>
                    About The TodoAPP
                </h1>

                <img
                    src="https://picsum.photos/seed/coding/800/200"
                    alt="Coding Banner"
                    className="img-fluid rounded mb-4"
                />

                <p>
                    This is a simple <strong>Todo List</strong> application built using <strong>React JS</strong>.
                    It allows you to manage your daily tasks easily with a clean and responsive interface.
                </p>

                <h2 className="mt-4" style={{ color: "#34495e" }}>Features</h2>
                <ul>
                    <li>Add new todos</li>
                    <li>Delete existing todos</li>
                    <li>Todos saved in <strong>localStorage</strong></li>
                    <li>Routing with React Router</li>
                    <li>Responsive UI with Bootstrap</li>
                </ul>

                <h2 className="mt-4" style={{ color: "#34495e" }}>Technologies Used</h2>
                <ol>
                    <li>React JS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Bootstrap</li>
                </ol>

                <p className="mt-4" style={{ fontStyle: "italic", color: "#7f8c8d" }}>
                    Designed and developed by <strong>Mayank Kumar Sahu</strong> with ❤️.
                </p>

                <Link to="/" className="btn btn-primary mt-3">Go Back to Home</Link>
            </div>
        </div>
    );
};

export default About;
