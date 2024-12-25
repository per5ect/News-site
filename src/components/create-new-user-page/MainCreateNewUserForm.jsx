import {useCreateUser} from "../../hooks/useCreateUser.js";

export function MainCreateNewUserForm() {
    const {formData, error, success, handleChange, handleSubmit,} = useCreateUser();
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">First Name</label>
                <input type="text" id="name" name="name" className="form-control" value={formData.name}
                       onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName}
                       onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-control" value={formData.email}
                       onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="password" className="form-control"
                       value={formData.password} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="avatar" className="form-label">Avatar URL</label>
                <input type="text" id="avatar" name="avatar" className="form-control"
                       value={formData.avatar}
                       onChange={handleChange}/>
            </div>
            {error && <div className="text-danger">{error}</div>}
            {success && <div className="text-success">{success}</div>}
            <div className="d-flex align-items-center gap-2">
                <button type="submit" className="btn btn-primary">Create User</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
            </div>
        </form>
    )
}