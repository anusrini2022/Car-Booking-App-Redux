import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.removeItem('userLoggedIn');
        navigate('/login', { replace: true });
    }, [navigate]);

    return (
        <div>
            <h3>Logging out...</h3>
        </div>
    );
};

export default Logout;