import styles from './movieItem.module.css';

function MovieItem({poster,title,imdbID}){

    return(
        <div classNmae={styles.wrapper}>
            <img src={poster}/>
            <div className={styles.footer}>
                {title}
                <a className={styles.imdb} href={'https://imdb.com/title/'+imdbID}>IMDB</a>
            </div>

        </div>
    )

}

export default MovieItem;