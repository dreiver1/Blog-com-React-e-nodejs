import "./index.css";
export default function Controlers(){
   
    return(
        <div className='content'>
            <div className='Controlers'>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Title</label>
                    <input type="email" className="form-control input" id="Title" placeholder="Title"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword4">Description</label>
                    <input type="password" className="form-control input" id="Description" placeholder="Description"/>
                    </div>
                </div>
                <div className="form-group">
                <label for="inputAddress">Body</label>
                    <input type="text" className="form-control input body" id="Body" placeholder="Body"/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Image</label>
                    <input type="text" className="form-control input" id="Image" placeholder="Image"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputCity">Date</label>
                    <input type="date" className="form-control input" id="Date" placeholder="Date"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputState">Categorie</label>
                    <select id="inputState" className="form-control input">
                        <option selected>Choose...</option>
                        <option>Tutorial</option>
                        <option>Programing</option>
                        <option>Cousers</option>
                        <option>Carrer</option>
                        <option>Profissional</option>
                        <option>Teacher</option>
                        <option>Engenering</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label for="inputZip">AssocietLink</label>
                    <input type="text" className="form-control input" id="AssocietLink"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            </div>
        </div>
    )
}