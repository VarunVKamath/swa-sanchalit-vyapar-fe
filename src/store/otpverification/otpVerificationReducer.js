import { actionTypes } from "./otpVerificationActions";

const {
  VERIFY_MOBILE_NO_PENDING,
  VERIFY_MOBILE_NO_SUCCESS,
  VERIFY_MOBILE_NO_ERROR,

  VERIFY_OTP_NO_PENDING,
  VERIFY_OTP_NO_SUCCESS,
  VERIFY_OTP_NO_ERROR,
} = actionTypes;
const initialState = {
  generateOtpPending: false,
  generateOtpSuccess: false,
  generateOtpError: null,

  verifyOtpPending: false,
  verifyOtpSuccess: false,
  verifyOtpError: null,

  mobileNo: "",
};

export default function otpVerification(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VERIFY_MOBILE_NO_PENDING:
    case VERIFY_MOBILE_NO_SUCCESS:
    case VERIFY_MOBILE_NO_ERROR:
      return Object.assign({}, state, payload);

    case VERIFY_OTP_NO_PENDING:
    case VERIFY_OTP_NO_SUCCESS:
    case VERIFY_OTP_NO_ERROR:
      return Object.assign({}, state, payload);

    default:
      return state;
  }
}
