import { useContext } from 'react'
import { AlbumContext } from '../utils/AlbumContext'

export default function Albums() {
    const { albums } = useContext(AlbumContext)
    return (
        <ul>
            {albums.map((a) => (
                <li key={a.id}>{a.title}</li>
            ))}
        </ul>
    )
}
