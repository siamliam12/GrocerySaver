import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthResponse {
    access: string;
    refresh: string;
  }
interface RegAuthResponse {
    name: string;
  }
export const loginUser = async (email:string,password:string) => {
    try{
        const response = await fetch(`http://192.168.0.105:8000/auth/api/login/`,{
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
        const response = await fetch(`http://127.0.0.1:8000/auth/api/register/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({email: email,name:name,password: password})
        })
        console.log(response)
        if (response.ok) {
            const data:RegAuthResponse = await response.json()
            await AsyncStorage.setItem('name',data.name)
            return data;
        }else{
            throw new Error('Signup failed');
        }
    }catch (error) {
        console.error(error);
        return null;
    }
}