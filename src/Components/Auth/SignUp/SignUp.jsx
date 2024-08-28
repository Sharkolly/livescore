import { Link, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import UseSignUp from './UseSignUp';

const SignUp = () => {
  const navigate = useNavigate();
  const { userDetails, setUserDetails, handlePost, loading } = UseSignUp();
  
  return (

    <div className="login">
      {loading ? (
        <div className="loader">
          <Oval
            height={120}
            width={120}
            color="rgba(232, 210, 16, 0.73)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="rgba(232, 210, 16, 0.73)"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className='LoginUser'>
          <div className="logo">
            <h1>Mola Fast<span>Score⚽</span></h1>
          </div>
          <form onSubmit={(e) => handlePost(e)}>
            <input type="text" onChange={(e) => setUserDetails({ ...userDetails, userName: e.target.value })} placeholder='Username' />
            <input type="text" onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} name="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
            <input type="password" onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })} placeholder='Confirm Password' />
            <div className="loginBtn">
              <input type="submit" value="Sign Up" />
              <div>Already have an account?
                <Link to='/login'>Login</Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
};
export default SignUp;