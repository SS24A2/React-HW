import Movies from './components/Movies'
import './style.css'

const movies = [
    {
        name: 'The Straight Story',
        date: '1999',
        genre: ['Docudrama', 'Road Trip', 'Biography', 'Drama'],
        plot: 'Alvin Straight, a 73-year-old, learns that his estranged brother, Lyle is critically ill. Unable to drive, Alvin embarks on a journey from Iowa to Mt. Zion, by riding a lawn mower. Will he succeed?',
        imdbLink: 'https://www.imdb.com/title/tt0166896/?ref_=chttentp_t_238',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BZjdjNWZhY2UtMDRiYS00M2NhLThiZmQtYTA0MzI4ZWIyYzY4XkEyXkFqcGc@._V1_QL75_UX1230_.jpg',
        rating: '8.0/10',
        director: 'David Lynch',
        cast: ['Richard Farnsworth', 'Sissy Spacek', 'Jane Galloway Heitz'],
    },
    {
        name: 'Paper Moon',
        date: '1973',
        genre: ['Caper', 'Road Trip', 'Comedy', 'Crime', 'Drama'],
        plot: 'During the Great Depression, a con man finds himself saddled with a young girl who may or may not be his daughter, and the two forge an unlikely partnership.',
        imdbLink: 'https://www.imdb.com/title/tt0070510/?ref_=chttentp_t_166',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BODU5MGI4ZmItYTAyYi00NmI3LWExZTQtNTYzYjM3ZDY5NGVkXkEyXkFqcGc@._V1_QL75_UX1230_.jpg',
        rating: '8.1/10',
        director: 'Peter Bogdanovich',
        cast: ["Ryan O'Neal", "Tatum O'Neal", 'Madeline Kahn'],
    },
    {
        name: 'Gran Torino',
        date: '2008',
        genre: ['Drama'],
        plot: 'After a Hmong teenager tries to steal his prized 1972 Gran Torino, a disgruntled, prejudiced Korean War veteran seeks to redeem both the boy and himself.',
        imdbLink: 'https://www.imdb.com/title/tt1205489/?ref_=chttentp_t_145',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_QL75_UX1230_.jpg',
        rating: '8.1/10',
        director: 'Clint Eastwood',
        cast: ['Clint Eastwood', 'Bee Vang', 'Christopher Carley'],
    },
    {
        name: 'Requiem for a Dream',
        date: '2000',
        genre: ['Psychological Drama', 'Tragedy', 'Drama'],
        plot: 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
        imdbLink: 'https://www.imdb.com/title/tt0180093/?ref_=chttentp_t_70',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_QL75_UX220.5_.jpg',
        rating: '8.3/10',
        director: 'Darren Aronofsky',
        cast: ['Ellen Burstyn', 'Jared Leto', 'Jennifer Connelly'],
    },
    {
        name: 'Inglourious Basterds',
        date: '2009',
        genre: ['Dark Comedy', 'Period Drama', 'Adventure', 'Drama', 'War'],
        plot: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        imdbLink: 'https://www.imdb.com/title/tt0361748/?ref_=chttentp_t_56',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjE3NDU2MTE3OV5BMl5BanBnXkFtZTgwNDM2OTM5NDE@._V1_QL75_UX1230_.jpg',
        rating: '8.4/10',
        director: 'Quentin Tarantino',
        cast: ['Brad Pitt', 'Diane Kruger', 'Eli Roth'],
    },
    {
        name: 'Memento',
        date: '2000',
        genre: [
            'Psychological Thriller',
            'Suspense Mystery',
            'Mystery',
            'Thriller',
        ],
        plot: "A former insurance investigator who now suffers from anterograde amnesia uses notes and tattoos to hunt down his wife's murderer.",
        imdbLink: 'https://www.imdb.com/title/tt0209144/?ref_=chttentp_t_46',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BNjgwZDE2YjMtOTFmMy00M2NmLTg5MDAtMzUyNmVkOWY4MDEzXkEyXkFqcGc@._V1_QL75_UX1230_.jpg',
        rating: '8.4/10',
        director: 'Christopher Nolan',
        cast: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano'],
    },
    {
        name: 'The Departed',
        date: '2006',
        genre: ['Cop Drama', 'Epic', 'Gangster', 'Crime', 'Drama', 'Thriller'],
        plot: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
        imdbLink: 'https://www.imdb.com/title/tt0407887/?ref_=chttentp_t_32',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UX1230_.jpg',
        rating: '8.5/10',
        director: 'Martin Scorsese',
        cast: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
    },
    {
        name: '12 Angry Men',
        date: '1957',
        genre: ['Legal Drama', 'Psychological Drama', 'Crime', 'Drama'],
        plot: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
        imdbLink: 'https://www.imdb.com/title/tt0050083/?ref_=chttentp_t_5',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_QL75_UX1230_.jpg',
        rating: '9.0/10',
        director: 'Sidney Lumet',
        cast: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
    },
]

export default function App() {
    return (
        <div className="container">
            <Movies movies={movies} />
        </div>
    )
}
