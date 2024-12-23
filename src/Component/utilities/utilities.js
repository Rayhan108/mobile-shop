// save students email on db
export const storeUserInDB = (user) => {
  // console.log(user.email);

  fetch("https://mobile-shop-server-weld.vercel.app/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then(() => {});
};
