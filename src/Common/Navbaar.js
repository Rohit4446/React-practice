import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbaar = () => {
  return (
    <>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12 text-center">
          <Navbar>
            <Link
              to="/hookreducer"
              className="nav-link btn btn-outline-success"
            >
              HookReducer
            </Link>

            <Link
              to="/lifecycleinclassC"
              className="nav-link btn btn-outline-success"
            >
              LifeCycleInClassC
            </Link>
            <Link to="/classc" className="nav-link btn btn-outline-success">
              counter
            </Link>
            <Link
              to="/logincontrol"
              className="nav-link btn btn-outline-success"
            >
              logincontrol
            </Link>
            <Link to="/page" className="nav-link btn btn-outline-success">
              page show hide
            </Link>
            <Link
              to="/listandkeys"
              className="nav-link btn btn-outline-success"
            >
              List and Key
            </Link>
            <Link to="/forms" className="nav-link btn btn-outline-success">
              TOdo
            </Link>

            <Link
              to="/childtoparent"
              className="nav-link btn btn-outline-success"
            >
              childtoparent
            </Link>

            <Link to="/state" className="nav-link btn btn-outline-success">
              State & Props
            </Link>

            <Link to="/notes" className="nav-link btn btn-outline-success">
              Notes App
            </Link>
            <Link to="/eventbind" className="nav-link btn btn-outline-success">
              Event Binding
            </Link>
            <Link to="/refform" className="nav-link btn btn-outline-success">
              Ref
            </Link>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Navbaar;
