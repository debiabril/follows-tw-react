import './App.css'
import FollowCard from './FollowCard'

function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
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
