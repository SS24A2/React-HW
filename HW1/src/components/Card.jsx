import Button from './Button'

export default function Card() {
    const rating = 4.8
    const reviews = 4.605
    const price = 'from $99 per adult'
    const src =
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/66/44/42/caption.jpg?w=600&h=600&s=1'
    const title = 'New York in One Day Guided Sightseeing Tour'
    const category = 'Sightseeing Cruises'

    return (
        <div className="card">
            <a href="#">
                <img style={{ width: 300 }} src={src} alt="new-york" />
            </a>
            <a href="#">
                <h3>{title}</h3>
            </a>
            <p
                style={{
                    fontSize: '14px',
                    position: 'relative',
                    color: 'gray',
                    right: '80px',
                    fontStyle: 'italic',
                    marginTop: '5px',
                }}
            >
                rating {rating} ({reviews})
            </p>
            <p>{category}</p>
            <p
                style={{
                    fontSize: '14px',
                    position: 'relative',
                    color: 'gray',
                    right: '80px',
                    fontStyle: 'italic',
                    marginTop: '5px',
                }}
            >
                {price}
            </p>
            <Button />
        </div>
    )
}
