export const blogService = {
  getAllPosts,
  getOnePost,
  addPost,
  changePost,
  removePost
};


async function getAllPosts() {
  return await fetch('https://strateg.link/public/api/blog/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(async (response) => {
      const res = await response.json();
      return res;
    })
    .catch(error => console.error(error));
}

async function getOnePost(id) {
  return await fetch(`https://strateg.link/public/api/blog/post/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(async (response) => {
      if (response.status !== 404) {
        const res = await response.json();
        return res;
      } else {
        return [{ error: 'Нет поста с таким id.' }];
      }
    })
    .catch(error => console.error(error));
}

async function addPost(token, token_type, header, description, post, image) {
  return await fetch(`https://strateg.link/public/api/blog/post/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `${token_type} ${token}`
    },
    body: JSON.stringify({
      header,
      description,
      post,
      image
    })
  })
    .then(async (response) => {

    })
    .catch(error => console.error(error));
}

async function changePost(token_type, token, id, header, description, post, image) {
  const newPost = { token_type, token, id, header, description, post, image };
  console.log(newPost);

  return await fetch(`https://strateg.link/public/api/blog/update/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `${token_type} ${token}`
    },
    body: JSON.stringify({
      header,
      description,
      post,
      image
    })
  })
    .then(async (response) => {
      console.log(response);
    })
    .catch(error => console.error(error));
}

function removePost(token_type, token, id) {
  return fetch(`https://strateg.link/public/api/blog/post/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `${token_type} ${token}`
    }
  })
    .then(async (response) => {

    })
    .catch(error => console.error(error));
}
