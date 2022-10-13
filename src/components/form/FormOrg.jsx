import * as React from "react";
import "./formorg.scss";

const FormOrg = () => {
  return (
    <div class="dropdown-menu">
      <form class="form--container px-4 py-3">
        <div class="form-group">
          <label for="FormEmail">Organization</label>
          <select name="" id="">
            <option value="select">Select</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div class="form-group">
          <label for="Formusername">Username</label>
          <input
            type="text"
            class="form-control"
            id="formuser"
            placeholder="user"
          />
        </div>
        <div class="form-group">
          <label for="FormEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="Email1"
            placeholder="email"
          />
        </div>
        <div class="form-group">
          <div>
            <label for="formDate">Date</label>
          </div>

          <input
            type="date"
            class="form-control"
            id="formDate"
            placeholder="date"
          />
        </div>
        <div class="form-group">
          <label for="formPhone">Phone number</label>
          <input
            type="tel"
            class="form-control"
            id="formPhone"
            placeholder="phone number"
          />
        </div>
        <div class="form-group">
          <label for="formStatus">Status</label>
          <select name="" id="">
            <option value="select">Select</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>

        <button type="submit" class="btn reset-btn">
          Reset
        </button>
        <button type="submit" class="btn filter-btn">
          Filter
        </button>
      </form>
    </div>
  );
};

export default FormOrg;
