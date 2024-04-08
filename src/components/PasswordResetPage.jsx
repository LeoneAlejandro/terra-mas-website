import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


export default function PasswordResetPage() {

    // State to store UID and new password
    // const history = useHistory();

    const [uid, setUID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Access route parameters including UID
    const { uid: urlUID } = useParams();

    // Set UID state when component mounts
    useEffect(() => {
        setUID(urlUID)
        checkUIDValidity()
                    }, [urlUID]);

    //Chequear que la uid existe
    const checkUIDValidity = async () => {
        try {
            // Make a request to backend to verify UID existence
            const response = await fetch(`/reset-password/verify-uid/${urlUID}`);
            if (response.ok) {
            //   setIsValidUID(true);
            //   setLoading(false);
            console.log("uid existe")
            } else {
              // If UID doesn't exist, redirect to error page or handle accordingly
            //   history.push('/error');
            }
          } catch (error) {
            console.error('Error verifying UID:', error);
            // Handle error
          }
    }
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      console.log(uid)
      console.log(password)
  
      // Send password reset request to backend
/*       try {
        // Send password reset request to backend with UID and new password
        const response = await fetch('/api/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid, password }),
        });
        if (response.ok) {
          // Password reset successful, provide feedback to the user
          // Redirect to login page or display success message
        } else {
          // Handle error response from backend
          setError('Failed to reset password');
        }
      } catch (error) {
        console.error('Error resetting password:', error);
        setError('Failed to reset password');
      } */
    };
  
    return (
      <div>
        <h2>Password Reset</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  };
