import {useEditNews} from "../../hooks/useEditNews.js";

export function MainEditNewsForm({id}) {
    const { news, handleChange, handleSubmit } = useEditNews(id);
    return (
        <form onSubmit={handleSubmit} className="rounded-4 border border-dark-subtle p-4">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" id="title" name="title" className="form-control" value={news.title}
                       onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cardContent" className="form-label">Card Content</label>
                <textarea id="cardContent" name="cardContent" className="form-control" rows="2"
                          value={news.cardContent} onChange={handleChange} required>
                        </textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="mainContent" className="form-label">Main Content</label>
                <textarea id="mainContent" name="mainContent" className="form-control" rows="6"
                          value={news.mainContent} onChange={handleChange} required>
                        </textarea>
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input type="text" id="image" name="image" className="form-control mb-4 border" value={news.image}
                       onChange={handleChange} required/>
                {news.image && (<img src={news.image} alt="Preview" className="mt-2 edit-img border-black rounded-4"/>)}
            </div>
            <div className="mb-3">
                <label htmlFor="categories" className="form-label">Category</label>
                <select id="categories" name="categories" className="form-select" value={news.categories}
                        onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="Sport">Sport</option>
                    <option value="Politics">Politics</option>
                    <option value="Technology">Technology</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="text" id="date" name="date" className="form-control" value={news.date}
                       onChange={handleChange} required/>
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
    )
}