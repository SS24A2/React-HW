import Age from './components/Age.jsx'
import Address from './components/Address.jsx'

const user1 = {
  ime: 'Elena',
  prezime: 'Stojanova',
  adresa: 'Ohrid',
  godini: '19',
}

const user2 = {
  ime: 'Mila',
  prezime: 'Jovanova',
  adresa: 'Skopje',
  godini: '21',
}

const user3 = {
  ime: 'Sara',
  prezime: 'Todorova',
  adresa: 'Skopje',
  godini: '17',
}

const user4 = {
  ime: 'Andrea',
  prezime: 'Damjanova',
  adresa: 'Bitola',
  godini: '24',
}

const users = [user1, user2, user3, user4]

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        width: '1000px',
        justifyContent: 'space-between',
        margin: 'auto',
      }}
    >
      <div>
        <h2>Display users over 18</h2>
        <Age users={users} />
      </div>
      <div>
        <h2>Users with address Skopje</h2>
        <Address users={users} />
      </div>
    </div>
  )
}
