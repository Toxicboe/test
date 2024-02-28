import React from 'react';
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Template.css'

const Search = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <form className="card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faSearchengin} />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control form-control-lg form-control-borderless"
                                    type="search"
                                    placeholder="Search topics or keywords"
                                    style={{ border: "none" }}
                                />
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-lg btn-success rounded-pill" type="submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
