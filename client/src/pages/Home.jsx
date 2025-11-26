import React from 'react';
import { Link } from 'react-router';

const Home = () => {
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
                                <tr>
                                    <td>1</td>
                                    <td><a href="#" className="post-title">Getting Started with Bootstrap 5</a></td>
                                    <td>John Doe</td>
                                    <td>Web Development</td>
                                    <td><span className="status published">Published</span></td>
                                    <td>2023-07-15</td>
                                    <td>
                                        <a href="#editPostModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deletePostModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;