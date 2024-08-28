import { useContext, useState } from 'react';
import { Store } from '../../Store/Store';
import { toast } from 'react-toastify';

const UseSignUp = () => {
    const [userDetails, setUserDetails] = useState({});
    const { setUser, isAuthenticated, setIsAuthenticated } = useContext(Store);
    const [loading, setLoading] = useState(false);

    const handlePost = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            // if (!userDetails) throw new Error('FIll all forms');
            if (!userDetails.userName) throw new Error('No Username');
            if (!userDetails.email) throw new Error('No Email');
            if (!userDetails.password) throw new Error('No Password');
            if (!userDetails.confirmPassword) throw new Error('No Confirmation Password');
            if (userDetails.password != userDetails.confirmPassword ) throw new Error('Both Passwords must match');

            const fetchJson = await fetch('http://localhost:5000/signup', {
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
export default UseSignUp;