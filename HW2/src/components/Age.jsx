export default function Age({ users }) {
    return users.map((user, index) =>
        user.godini > 18 ? (
            <div key={index} style={{ backgroundColor: 'lightsteelblue' }}>
                <p>Ime: {user.ime}</p>
                <p>Prezime: {user.prezime}</p>
                <p>Adresa: {user.adresa}</p>
                <p>Godini: {user.godini}</p>
            </div>
        ) : (
            <p key={index} style={{ backgroundColor: 'lightcoral' }}>
                Less then 18
            </p>
        )
    )
}
