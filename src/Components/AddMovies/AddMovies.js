import { Link } from "react-router-dom";

export default function AddMovies({ source, title, id, idSel, setIdSel }) {
    return (
        <>
            <Link to={`/sessoes/${id}`}>
                <div className="movie-box">

                    <img src={source} alt='' onClick={() => {
                        setIdSel(id)
                    }} />

                </div>
            </Link>
        </>
    )
}