import React from "react";
import { Input, ButtonView, CardView } from "../../../controls";

const MobileNoForOtpView = ({ fields, errors, onChange, onSave }) => {
  return (
    <div className="otp-container">
      <CardView>
        <div className="mobileNo-container">
          <Input
            name="mobileNumber"
            label="Mobile Number"
            type="tel"
            value={fields.mobileNo}
            placeholder="Enter Mobile No"
            size="fluid"
            error={errors["mobileNo"]}
            isrequired={true}
            onChange={onChange("mobileNo")}
          />
          <div className="button-style">
            <ButtonView
              title={"Submit"}
              size="large"
              styles="primary"
              onClick={onSave}
            />
          </div>
        </div>
      </CardView>
    </div>
  );
};

export default MobileNoForOtpView;
