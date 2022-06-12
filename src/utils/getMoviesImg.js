import placeHolder from "../no-image.jpg";


export function getMoviesImg(path,width) {
    return path ? "https://image.tmdb.org/t/p/w"+width+path : placeHolder;
}
