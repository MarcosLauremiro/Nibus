
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export const GoogleButton: React.FC = () => {

    const clinetId = 'YOUR_GOOGLE_CLIENT_ID';
    const handleSuccess = (response: any) => {
        try{
            console.log('Login Success:', response);
        }catch (e) {
            console.log('Error:', e);
        }
        // Handle successful login here
      };

      const handleError = () => {
        console.log('Login Failed');
        // Handle login failure here
      };

      return (
        <GoogleOAuthProvider clientId={clinetId}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            text="signup_with"
            width={350}
            size="large"
          />
        </GoogleOAuthProvider>
      );
}