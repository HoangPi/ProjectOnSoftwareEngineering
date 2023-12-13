import React, { useEffect, useState } from "react";
import { GetCategories } from "../api/generalAPI";

export const AddCourseStep1 = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await GetCategories();
      setCategories(response.categories);
      console.log("Fetching categories:", response.categories[0].namecategory);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleNameOnChange = (ev) => {
    props.setcoursename(ev.target.value);
  };

  const handleLevelOnChange = (ev) => {
    props.setlevel(ev.target.value);
  };

  const handleDescriptionOnChange = (ev) => {
    props.setdescription(ev.target.value);
  };

  const handleCategoryOnChange = (ev) => {
    props.setcategory(ev.target.value);
  };

  return (
    <div>
      <div style={{ paddingLeft: "22%" }} className="col-lg-9 col-md-8 col-12">
        {/* <!-- Card --> */}
        <div className="card">
          {/* <!-- Card header --> */}
          <div className="card-header">
            <h3 className="mb-0">Your New Course</h3>
            <p className="mb-0">You can change it later.</p>
          </div>
          {/* <!-- Card body --> */}
          <div className="card-body">
            <div>
              <h4 className="mb-0">Basic Information</h4>
              <p className="mb-4">Edit what everyone sees on their first look.</p>
              {/* <!-- Form --> */}
              <form className="row gx-3 needs-validation" noValidate="">
                {/* <!-- First name --> */}
                <div className="mb-3 col-12 col-md-6" style={{ width: "100%" }}>
                  <label className="form-label" htmlFor="fname">
                    Course Name
                  </label>
                  <input
                    value={props.coursename}
                    onChange={handleNameOnChange}
                    type="text"
                    id="fname"
                    className="form-control"
                    placeholder="Course Name"
                    required=""
                  />
                  <div className="invalid-feedback">Please enter a course name.</div>
                </div>
                {/* <!-- Category --> */}
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="fname">
                    Category
                  </label>
                  <select onChange={handleCategoryOnChange} className="form-select" id="inputGroupSelect01">
                    {categories.map((category) => (
                      <option key={category._id} value={category.namecategory} selected={category.namecategory === props.defaultcat}>
                        {category.namecategory}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <!-- Level --> */}
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="editState">
                    Level
                  </label>
                  <select onChange={handleLevelOnChange} className="form-select" id="editState" required="">
                    <option value="Starter" selected={props.defaultlevel === "Starter"}>
                      Starter
                    </option>
                    <option value="Intermediate" selected={props.defaultlevel === "Intermediate"}>
                      Intermediate
                    </option>
                    <option value="Expert" selected={props.defaultlevel === "Expert"}>
                      Expert
                    </option>
                  </select>
                  <div className="invalid-feedback">Please choose a level.</div>
                </div>
                {/* <!-- Country --> */}
                <div className="mb-3 col-12 col-md-6" style={{ width: "100%" }}>
                  <label className="form-label" htmlFor="editState">
                    Short description
                  </label>
                  <div className="input-group">
                    <textarea
                      value={props.des}
                      onChange={handleDescriptionOnChange}
                      className="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  {/* <!-- Button --> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};