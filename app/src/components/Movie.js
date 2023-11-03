function Movie(props) {
    return (
        <div className="movie-item-style-2">
            <img src={props.movieImg} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{props.movieTitle} <span>({props.movieYear})</span></a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> Run Time: {props.movieDuration}    .     <span>MMPA: {props.movieMMPA} </span>    .     <span>Release: {props.movieReleas}</span></p>
                <p>Director: <a href="#">{props.movieDirector}</a></p>
                <p>Stars: <a href="#">{props.movieStars}</a></p>
            </div>
        </div>
    );
}

export default Movie;