import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import api from '../api/api';
import moment from 'moment';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Home = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [allPost, setAllPosts] = useState([]);
    const [deletePostId, setDeletePostId] = useState(0);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {
        setIsLoading(true);
        try {

            const response = await api.get('/get-all-post');
            setAllPosts(response.data.posts);


        } catch (err) {
            console.error("Error fetching posts:", err);
        } finally {
            setIsLoading(false);

        }
    }

    const deleteModal = async (id) => {
        setDeletePostId(id);

    }

const deletePost = async () => {
    await api.post('/delete-post', { id: deletePostId });
    getAllPosts();
    setDeletePostId(0);
    const modal = bootstrap.Modal.getInstance(document.getElementById('deletePostModal'));
    modal.hide();
}

    return (
        <>

            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Posts</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <Link to={'/create-new-post'} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Create New</span></Link>
                                </div>
                            </div>
                        </div>
                        {isLoading ? <center>Loading posts...</center> :
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allPost.map((item, index) => (


                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td><Link to="#" className="post-title">{item.title}</Link></td>
                                            <td>{item.author}</td>
                                            <td>{item.category}</td>
                                            <td>
                                                {item.status === 'Published' ?
                                                    <span className="status draft badge bg-success text-light">{item.status}</span>
                                                    : item.status === 'Draft' ?
                                                        <span className="status published badge bg-danger text-light">{item.status}</span>
                                                        :
                                                        <span className="status pending badge bg-warning text-light">{item.status}</span>
                                                }
                                            </td>
                                            <td>{moment(item.created_at).format('MMM D, YYYY h:mm A')}</td>
                                            <td>
                                                <Link to={`/edit-post/${item.id}`} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                                <a href="#deletePostModal" onClick={() => deleteModal(item.id)} className="delete" data-bs-toggle="modal" data-bs-target="#deletePostModal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        }
                    </div>
                </div>



                <div class="modal fade" id="deletePostModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletePostModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header bg-danger text-white">
                                <h1 class="modal-title fs-5" id="deletePostModalLabel" >Confirm Deletion</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete this post?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={deletePost} class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Home;