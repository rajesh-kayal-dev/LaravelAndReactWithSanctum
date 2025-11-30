import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import api from '../api/api'

const EditPost = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState();

    useEffect(() => {
        getPostById();
    }, []);

    const getPostById = async () => {
        try {
            const response = await api.get(`/edit-post/${id}`);
            setFormData({
                title: response.data.post.title || '',
                author: response.data.post.author || '',
                category: response.data.post.category || '',
                status: response.data.post.status || '',
                content: response.data.post.content || '',
                id: response.data.post.id || ''
            });
        } catch (error) {
            console.error("Error fetching post details:", error);
        }
    }

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        status: '',
        content: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await api.post(`/update-post/${id}`, formData);
            navigate('/');


        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.message);
            } else {
                setErrors("An unexpected error occurred. Please try again later.");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="mb-4">Edit New Post</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Edit Post</li>
                        </ol>
                    </nav>

                    {errors &&
                        <div className="alert alert-danger" role="alert">{errors}</div>
                    }
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Post Details</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" value={formData.title} onChange={handleChange} name="title" placeholder="Enter post title" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="author" className="form-label">Author</label>
                                        <input type="text" className="form-control" value={formData.author} onChange={handleChange} name="author" placeholder="Enter author name" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <select className="form-select" value={formData.category} onChange={handleChange} name="category">
                                            <option value="">Select category</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="programming">Programming</option>
                                            <option value="design">Design</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-select" value={formData.status} onChange={handleChange} name="status">
                                            <option value="Published">Published</option>
                                            <option value="Draft">Draft</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">Content</label>
                                    <textarea className="form-control" value={formData.content} onChange={handleChange} name="content" rows="8" placeholder="Enter post content"></textarea>
                                </div>

                                <div className="d-flex justify-content-end gap-2">
                                    <Link to="/" type="button" className="btn btn-secondary">Cancel</Link>
                                    {isSubmitting ?
                                        <button className="btn btn-primary" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Creating...
                                        </button>
                                        :
                                        <button type="submit" className="btn btn-primary">Update Post</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditPost