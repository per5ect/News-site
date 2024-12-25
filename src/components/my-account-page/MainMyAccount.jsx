import { useAccount } from "../../hooks/useAccount.js";

export function MainMyAccount() {
    const {formData, successMessage, handleInputChange, handleSubmit} = useAccount();

    return (
        <main className="mt-5 mb-5">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="form-wrapper-acc d-flex justify-content-center align-items-center flex-column border border-dark-subtle p-3 rounded-3">
                <h2 className="mb-4 fw-bold">My Account</h2>
                    <form onSubmit={handleSubmit} className="d-flex align-items-center flex-column w-100">
                        {formData.avatar !== "" ?
                            <img src={formData.avatar} className="my-account-avatar rounded-circle border border-black" alt=""/> : null
                        }
                        <div className="mb-3 w-100">
                            <label htmlFor="avatar" className="form-label">Avatar</label>
                            <input type="text" id="avatar" name="avatar" className="form-control" value={formData.avatar}
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="d-flex flex-row column-gap-3 w-100">
                            <div className="mb-3 w-100">
                                <label htmlFor="name" className="form-label">First Name</label>
                                <input type="text" id="name" name="name" className="form-control" value={formData.name}
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="mb-3 w-100">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" id="lastName" name="lastName" className="form-control"
                                       value={formData.lastName}
                                       onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="mb-3 w-100">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-control" value={formData.email}
                                   onChange={handleInputChange}/>
                        </div>
                        <button type="submit" className="btn btn-dark w-100 btn-lg">Save Changes</button>
                    </form>
                    {successMessage && <p className="mt-3">{successMessage}</p>}
                </div>
            </div>
        </main>
    );
}
