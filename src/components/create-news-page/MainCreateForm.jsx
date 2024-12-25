import {useCreateNews} from "../../hooks/useCreateNews.js";

export function MainCreateForm(){
    const {title, cardContent, mainContent, categories, image, error, success,isLoading, setTitle, setCardContent, setMainContent, setCategories, setImage,
        handleSubmit,
        handleReset,
    } = useCreateNews();
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" id="title" className="form-control" value={title} onChange={setTitle}/>
            </div>
            <div className="mb-3">
                <label htmlFor="cardContent" className="form-label">Card Content</label>
                <textarea id="cardContent" className="form-control" value={cardContent} onChange={setCardContent}/>
            </div>
            <div className="mb-3">
                <label htmlFor="mainContent" className="form-label">Main Content</label>
                <textarea id="mainContent" className="form-control" value={mainContent} onChange={setMainContent}/>
            </div>
            <div className="mb-3">
                <label htmlFor="categories" className="form-label">Category</label>
                <select id="categories" name="categories" className="form-select" value={categories}
                        onChange={setCategories} required>
                    <option value="">Select Category</option>
                    <option value="Sport">Sport</option>
                    <option value="Politics">Politics</option>
                    <option value="Technology">Technology</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input type="text" id="image" className="form-control" value={image} onChange={setImage}/>
            </div>
            {error && <div className="text-danger">{error}</div>}
            {success && <div className="text-success">{success}</div>}
            <div className="d-flex align-items-center gap-2">
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create News"}
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>
        </form>
    )
}