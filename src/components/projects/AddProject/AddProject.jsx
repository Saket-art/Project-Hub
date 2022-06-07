import React from "react";
import { Link } from "react-router-dom";

let AddProject = () => {
  return (
    <React.Fragment>
      <section className="add-project p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Project</p>
              <p className="fst-italic">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium laboriosam optio perspiciatis impedit mollitia
                corporis pariatur, ipsa dignissimos animi et quidem aperiam a
                amet dolores repellat aspernatur odio sapiente consequuntur.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Team Lead"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Technology"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Skill"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Client"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Progress"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Create"
                  />
                  {/* <Link to={"/projects/list"} className="btn btn-dark">
                    Close */}
                  <Link to={"/projects/list"} className="btn btn-dark ms-2">
                    Cancle
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddProject;
