import React, { useState } from "react";
import "./AdminMain.css";
import OuterTabs from "./OuterTabs";
import BookingRequest from "./BookingRequests/BookingRequest";
import { useHistory } from "react-router-dom";
import SpecificReqModal from "./SpecificReqModal.js";
import { MdSettingsInputComponent } from "react-icons/md";


const AdminMain = () => {
  const history = useHistory();
  const [tabNumber, setTabNumber] = useState(1);
  function handleClick() {
    history.push("/adminview");
  }

  return (
    <div className="adminMain">
      <OuterTabs>
        <div tabName="Venue Management">Venue Management</div>
        <BookingRequest tabName="Booking Request" />
        <div tabName="Recurring Booking"> Recurring Booking</div>
        <div tabName="Calendar View">Calendar View</div>
      </OuterTabs>
    </div>
  );
};

export default AdminMain;
