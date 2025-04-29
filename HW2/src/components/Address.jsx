export default function Address({ users }) {
    return users.map((user, index) => {
        return (
            user.adresa === 'Skopje' && (
                <div key={index} style={{ backgroundColor: 'lavender' }}>
                    <p>Ime: {user.ime}</p>
                    <p>Prezime: {user.prezime}</p>
                    <p>Adresa: {user.adresa}</p>
                    <p>Godini: {user.godini}</p>
                </div>
            )
        )
    })
}
