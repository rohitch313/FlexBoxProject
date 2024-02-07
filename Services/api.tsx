const BASE_URL = 'http://10.0.2.2:5137/api';

export async function fetchCustomerData() {
    try {

        const url = `${BASE_URL}/CustomerSupportAPI`;
        const response = await fetch(url);
        
        if (!response.ok) {
            
            throw new Error("Failed to fetch data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching API data:", error);
        throw error; // Rethrow the error to handle it in the component
    }
}

 export async function postNumber(phoneNumber:string) {
    try{
    const url =  `${BASE_URL}/LoginUserPhoneAPI/generateotp?phoneNumber=${phoneNumber}`;
    const response = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body:JSON.stringify({phoneNumber})
    });
    if (!response.ok) {
        throw new Error('Failed to post number');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error posting number:', error);
      throw error;
    }
    
}
    

