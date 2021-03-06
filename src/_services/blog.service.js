export const blogService = {
  getAllPosts,
  getOnePost,
  addPost,
  changePost,
  removePost
};


async function getAllPosts() {
  return await fetch('/api/blog/posts', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(async (response) => {
      const res = await response.json();
      // console.log(res);
      
      return res;
    })
    .catch(error => console.error(error));
}

async function getOnePost(id) {
  return await fetch(`/api/blog/post/${id}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
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

  const formData = new FormData();

  formData.append('header', header);
  formData.append('description', description);
  formData.append('post', post);
  formData.append('image', image);

  return await fetch(`/api/blog/post/add`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${token_type} ${token}`
    },
    body: formData
  })
    .then(async (response) => {
      // console.log(response);
      // console.log(response.json());
    })
    .catch(error => console.error(error));
}

async function changePost(token_type, token, id, header, description, post, image) {
  // console.log(id, header, description, post, image);

  const formData = new FormData();

  formData.append('id', id);
  formData.append('header', header);
  formData.append('description', description);
  formData.append('post', post);
  formData.append('image', image);

  return await fetch(`/api/blog/post/update/${id}`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${token_type} ${token}`
    },
    body: formData
  })
    .then(async (response) => {
      // console.log(response);
    })
    .catch(error => console.error(error));
}

function removePost(token_type, token, id) {
  return fetch(`/api/blog/post/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `${token_type} ${token}`,
      'Access-Control-Allow-Origin': '*',
    }
  })
    .then(async (response) => {

    })
    .catch(error => console.error(error));
}
