import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src="https://i.ibb.co/F71nd4j/pngwing1.png" className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <Link to="/listedbooks">
                        <button className="btn bg-[#23BE0A] text-white px-6 mt-6 text-xl">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;