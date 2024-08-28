import { useContext, useState } from 'react';
import { Store } from '../../Store/Store';
import { toast } from 'react-toastify';

const UseSignin = () => {
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const { setUser, isAuthenticated, setIsAuthenticated } = useContext(Store);
    const handlePost = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            if (!userDetails.email && !userDetails.password) throw new Error('No Email and Password');
            if (!userDetails.email) throw new Error('No Email')
            if (!userDetails.password) throw new Error('No Password');

            const fetchJson = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                body: JSON.stringify(userDetails),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const { token } = await fetchJson.json();
            const getToken = await fetch('http://localhost:5000/route', {
                headers: {
                    Authorization: `${token}`
                }
            });
            const resp = await getToken.json();
            setUser(resp);
            setIsAuthenticated(true)
            sessionStorage.setItem('Authenticated', isAuthenticated);
            toast.success('Login Successful');
        }
        catch (err) {
            toast.error(err.message);
        };
        setLoading(false);
    };
    return { userDetails, setUserDetails, handlePost, loading };
};
export default UseSignin;