import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AuthResponse {
    access: string;
    refresh: string;
  }
  interface SignupResponse {
    id: string;
    name: string;
    email: string;
  }

export const loginUser = async (email:string,password:string) => {
    try{
        const response = await fetch(`https://grocerysaver.onrender.com/auth/api/login/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({email: email,password: password})
        })
        console.log(response)
        if (response.ok) {
            const data:AuthResponse = await response.json()
            await AsyncStorage.setItem('accessToken',data.access)
            return data;
        }else{
            throw new Error('Login failed');
        }
    }catch (error){
        console.error(error);
        return null;
    }
}

export const registerUser = async (email:string,name:string,password:string) => {
    try{
        const response = await axios.post(`https://grocerysaver.onrender.com/auth/api/register/`,{
            email,
            name,
            password,
        },{ 
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(response)
        if (response.status === 200) {
            const data: SignupResponse = response.data;
            await AsyncStorage.setItem('userId', data.id);
            await AsyncStorage.setItem('userName', data.name);
            await AsyncStorage.setItem('userEmail', data.email);
            return data;
        }else{
            throw new Error('Signup failed');
        }
    }catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error message:', error.message);
          console.error('Axios error response:', error.response);
        } else {
          console.error('Unexpected error:', error);
        }
      }
}