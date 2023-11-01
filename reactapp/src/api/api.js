export async function createUserApi(registerUser) {
  const { username, role, email, password } = registerUser;
  console.log({ username, role, email, password });
  
  try {
    const response = await fetch("http://localhost:5500/user/create-user", {
      method: "POST",
      body: JSON.stringify({ username, role, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getAdminData() {
  try {
    const res = await fetch("http://localhost:5500/user/getAlUser");
    const data = res.json();
    console.log({ getAllUser: data });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUserApi(loginData) {
  const { username, password } = loginData;
  console.log({ username, password });
  try {
    const response = await fetch("http://localhost:5500/user/login-user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function uploadImageApi(image) {
  console.log(image);
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onloadend = () => {
    fetch("http://localhost:5500/image/upload-image", {
      method: "POST",
      body: JSON.stringify({
        image: reader.result,
        name: image.name,
        size: image.size,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}
export async function createCardApi(registerUser) {
  // const { name, email, phone, profilePicture } = registerUser;
  try {
    const response = await fetch(
      "http://localhost:5500/user/create-card-user",
      {
        method: "POST",
        body: JSON.stringify(registerUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getImages(params) {}
