import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";

const Book = ({ books }) => {
    console.log(books);
    const { bookName, image , author , category , rating , tags ,bookId} = books;
    return (
            <div className="card lg:h-[550px] bg-slate-50 shadow-sm border-2 pt-8">
                <Link to={`/books/${bookId}`}>
                <figure><img src={image} alt="Book" className="w-1/2 "/></figure>
                <div className="card-body">
                    <div className="card-actions justify-between">
                        {
                            tags.map(tag => <p className="border-2 font-semibold bg-[#23BE0A0D] text-[#23BE0A] rounded-xl text-center">{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="border-b-2 border-dashed border-[#13131326] pb-4 font-medium ">By : {author}</p>
                    <div className="flex justify-between gap-32 text-[#131313CC]">
                        <p>{category}</p>
                        <p className="flex items-center gap-1">{rating} <FaRegStar /></p>
                    </div>
                </div>
                </Link>
            </div>
    );
};
Book.propTypes = {
    books:PropTypes.Object
}

export default Book;