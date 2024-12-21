// save students email on db
export const storeUserInDB = user => {
    // console.log(user.email);
     
    
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(() => {})
    }
    