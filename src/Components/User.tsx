import { Link, useLocation } from 'react-router-dom';
import BarChart from './BarChart';

const User = () => {
    const location = useLocation();
    const { userId, userLogin, userAvatar, urlSeguidores } = location.state || {};

    return (
        <div>
            <div className='content__info_user'>
                <h1>{userLogin}</h1>
                <p>{userId}</p>
                <img width={200} height={200} src={userAvatar} alt={userLogin} />
                <BarChart seguidores={urlSeguidores.length as number} />
                <Link style={{
                    color: '#f5f8f8', textDecoration: 'none',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginTop: 25,
                    border: '5px solid black',
                    padding: 10,
                    backgroundColor: '#043978'
                }} to={"/"}>Volver al Buscador</Link>
            </div>
        </div>
    );
};

export default User;
