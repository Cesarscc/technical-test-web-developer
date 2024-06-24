import { useState } from 'react'
import { Link } from 'react-router-dom';
import BarChart from './BarChart';
import Error from './Error';

import '../App.css'

interface User {
    login: string
    id: number
    avatar: string
    followers_url: string
}

interface Data {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
}

const Index = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [usersData, setUsersData] = useState<User[]>([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [viewModal, setViewModal] = useState(false);

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputValue(text);
        if (text.length >= 4 && !text.toLowerCase().includes('react')) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }

    const handleSearch = async () => {
        const usersItems: User[] = [];
        const response = await fetch(`https://api.github.com/search/users?q=${inputValue}`)
        const data = await response.json();
        const itemsData: [] = data.items;
        const arrayData: Data[] = itemsData.slice(0, 10);
        arrayData.map((data) => {
            usersItems.push({
                login: data.login,
                id: data.id,
                avatar: data.avatar_url,
                followers_url: data.followers_url
            })
        })
        if (usersItems.length === 0) {
            openModal();
        }
        setUsersData(usersItems);

    }

    const closedModal = () => {
        setViewModal(false);
    }

    const openModal = () => {
        setViewModal(true);
    }

    return (
        <div className='app'>
            <div className='box_title'>
                <h1 className='title_app'>Search Profile GitHub</h1>
            </div>
            <main className='content_app'>
                <input placeholder="Ingrese al menos 4 caracteres" type='text' minLength={4} value={inputValue} onChange={onChangeText} />
                <button disabled={isButtonDisabled} type='button' onClick={handleSearch}>Search</button>
                <div className='content__user'>
                    {usersData.length > 0 ?
                        usersData.map((user) =>
                            <div className='content__info_user' key={user.id}>
                                <Link
                                    style={{
                                        color: '#f5f8f8', textDecoration: 'none',
                                        fontSize: '25px',
                                        fontWeight: 600
                                    }}
                                    to={`/user/${user.login}`}
                                    state={{
                                        userId: user.id, userLogin: user.login, userAvatar: user.avatar,
                                        urlSeguidores: user.followers_url
                                    }}
                                >{user.login}
                                </Link>
                                <p>{user.id}</p>
                                <img width={200} height={200} src={user.avatar} alt={user.login} />
                                <BarChart seguidores={user.followers_url.length as number} />
                            </div>
                        ) : <></>
                    }
                </div>
            </main>
            {viewModal && <Error closeModal={closedModal} />}
        </div>
    )
}

export default Index