import React from 'react'

const CreateNewPost = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="mb-4">Create New Post</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Create Post</li>
                        </ol>
                    </nav>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Post Details</h5>
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" placeholder="Enter post title" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="author" className="form-label">Author</label>
                                        <input type="text" className="form-control" id="author" placeholder="Enter author name" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <select className="form-select" id="category">
                                            <option selected>Select category</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="programming">Programming</option>
                                            <option value="design">Design</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-select" id="status">
                                            <option value="Published" selected>Published</option>
                                            <option value="Draft">Draft</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">Content</label>
                                    <textarea className="form-control" id="content" rows="8" placeholder="Enter post content"></textarea>
                                </div>

                                <div className="d-flex justify-content-end gap-2">
                                    <button type="button" className="btn btn-secondary">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Create Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewPost