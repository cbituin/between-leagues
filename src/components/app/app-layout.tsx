import Button from '@mui/material/Button';
import { Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button onClick={() => navigate('/about')}>About</Button>
                <Button onClick={() => navigate('/blog')}>Blog</Button>
                <Button onClick={() => navigate('/lineups')}>Lineups</Button>
            </div>

            <Outlet />
        </>
    );
};

export default AppLayout;
