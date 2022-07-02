import React from "react";
import "./styles.css";
import LoginControl from "./Conditional-Rendering/Conditional-Rendering";
import Parent from "./PropsDrilling/Parent";
import LifeCycleInClassC from "./LifeCycle-mehods/LifeCycleInClassC";
import Page from "./Preventing-Rendering/Prevent-Renderong";
import ListAndKeys from "./List-and-Keys/ListAndKeys";
import Forms from "./Forms/Forms";
import ClassC from "./LifeCycle-mehods/ClassC";
import { Container, Row, Col } from "react-bootstrap";
import Menubar from "./Common/Menubar";
import Navbaar from "./Common/Navbaar";
import Home from "./Home";
import ChildToParent from "./DataFromChildToParent/ChildToParent";
import EMI from "./EMI/EMI";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import HookReducer from "./Hooks/HookReducer";
import State from "./State-and-props/State";
import Notes from "./Notes-app/Notes";
import EventBind from "./Components/EventBind";
import RefForm from "./Ref/RefForm";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Navbaar />
        <Routes>
          <Route path="/emi" element={<EMI />} />
          <Route path="/hookreducer" element={<HookReducer />} />
          <Route path="/lifecycleinclassC" element={<LifeCycleInClassC />} />
          <Route path="/" element={<Home />} />
          <Route path="/classc" element={<ClassC />} />
          <Route path="/logincontrol" element={<LoginControl />} />
          <Route path="/page" element={<Page />} />
          <Route path="/listandkeys" element={<ListAndKeys />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/childtoparent" element={<ChildToParent />} />
          <Route path="/state" element={<State />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/eventbind" element={<EventBind />} />
          <Route path="/refform" element={<RefForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
