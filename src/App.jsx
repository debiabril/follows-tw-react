import './App.css'
import FollowCard from './FollowCard'

function App() {
  const users = [
    {
      userName: 'debiabril',
      name: 'Débora Abril Badosa',
      isFollowing: true
    },
    {
      userName: 'javi',
      name: 'Javier',
      isFollowing: false
    },
    {
      userName: 'csr_acosta',
      name: 'César',
      isFollowing: true
    },
    {
      userName: 'LucasBadosa',
      name: 'Lucas Badosa',
      isFollowing: false
    }
  ]
  return (
    //Fragmento de React --> <></>
    <>
      {
        users.map(({userName, name, isFollowing}) => (
          <FollowCard 
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </FollowCard>
        ))
      }
    </>
  )
}

export default App
