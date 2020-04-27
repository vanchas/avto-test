import React, { Component } from 'react'
import './blog.scss'
import { blogService } from '../../../_services/blog.service';
import { authHeader } from '../../../_helpers/auth-header';
import $ from 'jquery';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addLoading: false,
      posts: [],
      postId: '',
      post: {},
      addingPost: {
        header: '',
        description: '',
        post: '',
        image: ''
      },
      changingPost: {
        header: '',
        description: '',
        post: '',
        image: '',
        id: ''
      }
    }
    this.getOnePost = this.getOnePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.changePost = this.changePost.bind(this);
  }

  componentDidMount = async () => {
    const res = await blogService.getAllPosts();
    this.setState({
      posts: res.posts
    });
    $('.change-post').hide();
  }

  getOnePost = async e => {
    e.preventDefault();
    const id = await this.state.changingPost.id;

    if (id.toString().length) {
      // const post = await blogService.getOnePost(id);

    } else {
      alert('Полe должнo быть корректно заполненo.');
    }
  }

  addPost = async e => {
    e.preventDefault();
    const user = authHeader().Authorization;
    if (
      this.state.addingPost.header.trim().length > 2 && this.state.addingPost.header.trim().length < 31 &&
      this.state.addingPost.description.trim().length > 19 && this.state.addingPost.description.trim().length < 101 &&
      this.state.addingPost.post.trim().length
    ) {
      this.setState({ addLoading: true });
      await blogService.addPost(
        user.token,
        user.token_type,
        this.state.addingPost.header,
        this.state.addingPost.description,
        this.state.addingPost.post,
        this.state.addingPost.image
      );
      await this.setState({
        addingPost: {
          header: '',
          descroption: '',
          post: '',
          image: ''
        }
      });
      const res = await blogService.getAllPosts();
      this.setState({
        posts: res.posts
      });
      this.setState({ addLoading: false });
      $('.change-post').hide();
    } else {
      alert('Все поля должны быть корректно заполнены.');
    }
  }

  openChangePost(id) {
    $(`.change-post${id}`).slideToggle();
  }

  changePost = async (e, id, header, image, post, description) => {
    e.preventDefault();
    const user = await authHeader().Authorization;

    const postHeader = await (this.state.changingPost.header.trim().length)
      ? this.state.changingPost.header
      : header;
    const postImage = await (this.state.changingPost.image.toString().length)
      ? this.state.changingPost.image
      : image;
    const postPost = await (this.state.changingPost.post.trim().length)
      ? this.state.changingPost.post
      : post;
    const postDescription = await (this.state.changingPost.description.trim().length)
      ? this.state.changingPost.description
      : description;

    await blogService.changePost(
      user.token,
      user.token_type,
      id,
      postHeader,
      postDescription,
      postPost,
      postImage
    );
    this.setState({
      changingPost: {
        header: '',
        description: '',
        post: '',
        image: '',
        id: ''
      }
    })
  }

  removePost = async id => {
    $(`.post${id}`).fadeOut(1000);
    const user = await authHeader().Authorization;
    await blogService.removePost(
      user.token_type,
      user.token,
      id
    );
    const res = await blogService.getAllPosts();
    this.setState({
      posts: res.posts
    });
  }

  render() {
    const user = authHeader().Authorization;
    const posts = this.state.posts.reverse();
    console.log(posts);

    return (
      <div style={{ minHeight: '100vh' }} className="blog" >
        <h1 className="text-center py-5">Блог</h1>

        <div>
          {user && user.is_admin === 1 ?
            <div>
              <div className="text-center container py-2">
                <h6>добавить пост</h6>
                <form className="post-form rounded">
                  <label className="form-group">
                    <input type="text" required
                      onChange={e => this.setState({
                        addingPost: {
                          ...this.state.addingPost,
                          header: e.target.value
                        }
                      })}
                      value={this.state.addingPost.header.length
                        ? this.state.addingPost.header
                        : ''}
                      placeholder="заголовок поста (3 - 20 символов)"
                      className="form-control" />
                  </label>
                  <label className="form-group">
                    <textarea type="text" required
                      onChange={e => this.setState({
                        addingPost: {
                          ...this.state.addingPost,
                          description: e.target.value
                        }
                      })}
                      value={(this.state.addingPost.description && this.state.addingPost.description.length)
                        ? this.state.addingPost.description
                        : ''}
                      placeholder="описание поста (20 - 100 символов)"
                      className="form-control" />
                  </label>
                  <label className="form-group">
                    <textarea type="text" required
                      onChange={e => this.setState({
                        addingPost: {
                          ...this.state.addingPost,
                          post: e.target.value
                        }
                      })}
                      value={this.state.addingPost.post.length
                        ? this.state.addingPost.post
                        : ''}
                      placeholder="текст поста"
                      className="form-control" />
                  </label>
                  <div className="d-flex align-content-start align-items-start">
                    <label className="form-group mr-2">
                      <input type="button" value="Картинка" onClick={() => {
                        $('#file').click();
                      }} className="btn btn-info" />
                      <input type="file" id="file"
                        style={{ display: 'none' }}
                        onChange={e => this.setState({
                          addingPost: {
                            ...this.state.addingPost,
                            image: e.target.value
                          }
                        })}
                        value={this.state.addingPost.image.length
                          ? this.state.addingPost.image
                          : ''} />
                    </label>
                    {this.state.addLoading ?
                      <div className="ml-3 spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div> :
                      <button className="btn btn-primary"
                        onClick={e => this.addPost(e)} >
                        добавить
                    </button>
                    }
                  </div>
                </form>
              </div>

              {/* <div className="search-form text-center container py-2">
                <h6>найти пост</h6>
                <form className="">
                  <input type="number"
                    className="form-control mb-3"
                    onChange={e => this.setState({ postId: e.target.value })}
                    value={this.state.postId}
                    placeholder="post id" />
                  <button
                    className="btn btn-primary ml-lg-2 ml-md-0 mb-3"
                    onClick={e => this.getOnePost(e)}>
                    Get Post
                  </button>
                </form>
                <div>
                  <div className="">
                    {this.state.post && this.state.post.header ?
                      <div className="mt-4 alert alert-success">
                        <h5>Пост с id {this.state.post.id}</h5>
                        <div>{this.state.post.header}</div>
                        <div>{this.state.post.description}</div>
                        <div>{this.state.post.post}</div>
                        <div>
                          <img src={this.state.post.image}
                            alt={this.state.post.post} />
                        </div>
                      </div>
                      :
                      <div className="mt-3 font-weight-bold text-danger">{this.state.post.error}</div>
                    }
                  </div>
                </div>
              </div> */}
            </div>
            : null}
        </div>

        <div className="mt-5 container posts-wrapper pt-3 pb-5">
          <h3 className="text-center">Посты</h3>
          <ul className="list-group posts-list">
            {posts.length ?
              posts.map((post, ind) => {
                return (
                  <li key={ind} className={`list-group-item post post${post.id}`}>
                    {authHeader().Authorization && authHeader().Authorization.is_admin === 1 ?
                      <div>
                        <button
                          onClick={() => this.openChangePost(post.id)}
                          className="btn btn-secondary mr-3"
                          title="change" >&#x270E;</button>
                        <button
                          onClick={() => this.removePost(post.id)}
                          className="btn btn-secondary mr-3 wastebasket"
                          title="remove" >&#x1f5d1;</button>
                      </div>
                      : null}
                    {/* 🗑️ */}
                    <span className="post-id">{post.id}. </span>
                    <span className="post-header"> {post.header}</span>
                    <div className="post-image">
                      <img src={post.image} alt={post.post} />
                    </div>
                    <div className="post-description">
                      <p>{post.description}</p>
                    </div>

                    <div className={`change-post change-post${post.id}`}>
                      <h6>изменить пост</h6>
                      <form className="post-form rounded">
                        <label className="form-group">
                          <input type="text"
                            onChange={e => this.setState({
                              changingPost: {
                                ...this.state.changingPost,
                                header: e.target.value
                              }
                            })}
                            value={this.state.changingPost.header.length
                              ? this.state.changingPost.header
                              : ''}
                            placeholder="заголовок поста"
                            className="form-control" />
                        </label>
                        <label className="form-group">
                          <textarea type="text"
                            onChange={e => this.setState({
                              changingPost: {
                                ...this.state.changingPost,
                                description: e.target.value
                              }
                            })}
                            value={this.state.changingPost.description.length
                              ? this.state.changingPost.description
                              : ''}
                            placeholder="описание поста"
                            className="form-control" />
                        </label>
                        <label className="form-group">
                          <textarea type="text"
                            onChange={e => this.setState({
                              changingPost: {
                                ...this.state.changingPost,
                                post: e.target.value
                              }
                            })}
                            value={this.state.changingPost.post.length
                              ? this.state.changingPost.post
                              : ''}
                            placeholder="текст поста"
                            className="form-control" />
                        </label>
                        <div>
                          <label className="form-group">
                            <input type="button" value="Выберите файл" onClick={() => {
                              $('#change').click();
                            }} className="btn btn-info mr-2" />
                            <input type="file" id="change"
                              style={{ display: 'none' }}
                              onChange={e => this.setState({
                                changingPost: {
                                  ...this.state.changingPost,
                                  image: e.target.value
                                }
                              })}
                              value={this.state.changingPost.image.length
                                ? this.state.changingPost.image
                                : ''} />
                          </label>
                          <button
                            onClick={e => this.changePost(e, post.id, post.header, post.image, post.post, post.description)}
                            className="btn btn-secondary mr-3">change post</button>
                        </div>
                      </form>
                    </div>
                  </li>
                )
              })
              : <h5 className="text-center">Постов пока нет...</h5>
            }
          </ul>
        </div>
      </div >
    )
  }
}
