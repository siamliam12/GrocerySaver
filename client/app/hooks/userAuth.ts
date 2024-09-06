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
        const response = await axios.post(`https://grocerysaver.onrender.com/auth/api/login/`,{
            email,
            password,
        },{ 
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(response)
        if (response.status === 200) {
            const data:AuthResponse = await response.data
            await AsyncStorage.setItem('accessToken',data.access)
            await AsyncStorage.setItem('refreshToken',data.refresh)
            return data;
        }else{
            throw new Error('Login failed');
        }
    }catch (error){
        console.error(error);
        return null;
    }
}
export const logOutUser = async () => {
    const refresh = await AsyncStorage.getItem('refreshToken');
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!refresh || !accessToken) {
        console.error('No tokens available');
        return;
      }
    try{
        const response = await axios.post(`https://grocerysaver.onrender.com/auth/api/logout/`,{
            refresh,
        },{ 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        })
        console.log(response.data)
        // if (response.status === 205 || response.status === 200) {
        //     const data:AuthResponse = await response.data
        //     console.log('LogOut success');
        //     return data;
        //     // return true; 
        // }else{
        //     throw new Error('LogOut failed');
        // }
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
        // console.log(`response:${JSON.stringify(response)}`)
        if (response.status === 200) {
            const data: SignupResponse = response.data;
            const id = JSON.stringify(data.id)
            console.log('User registered:', data);
            await AsyncStorage.setItem('userId', id);
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

export const checkIfLoggedIn = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    return token !== null;
}