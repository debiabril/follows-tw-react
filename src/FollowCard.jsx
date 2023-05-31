import { useState } from "react"

export default function FollowCard({userName, initialIsFollowing, children}){
    const[isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text= isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName= isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = ()=>{
        //acá cambiamos el 'seguir'
        setIsFollowing(!isFollowing)
    }
    return (
        <>
            <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="Avatar del usuario" />
                    <div className="tw-followCard-info">
                        <h3>{children}</h3>
                        <span className="tw-followCard-infoUserName">{userName}</span>
                    </div>
                </header>
                <aside>
                    <button 
                    onClick={handleClick} className={buttonClassName}>
                        <span className="tw-followCard-text">
                            {text}
                        </span>
                        <span className="tw-followCard-stopFollow">
                            Dejar de seguir
                        </span>
                    </button>
                </aside>
            </article>
        </>
    )
}