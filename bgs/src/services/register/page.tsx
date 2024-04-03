
export const registerNewUser = async (formData: any) => {
    try {
        const response = await fetch('/api/register',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(formData),
        });

        const finalData = response.json();

    }catch(e){
        console.log('error',e)
    }
}