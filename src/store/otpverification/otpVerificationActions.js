import Api from "../../service/api";
import { showAlert } from "../alert/alertActions";
import { showLoader, hideLoader } from "../loader/loaderActions";
import { history, getState } from "../../store/configure/configureStore";
import { HOME } from "../../navigation/routes";
// import { AUTH_SUCCESS } from "../auth/authReducer";
export const actionTypes = {
  VERIFY_MOBILE_NO_PENDING: "VERIFY_MOBILE_NO_PENDING",
  VERIFY_MOBILE_NO_SUCCESS: "VERIFY_MOBILE_NO_SUCCESS",
  VERIFY_MOBILE_NO_ERROR: "VERIFY_MOBILE_NO_ERROR",

  VERIFY_OTP_NO_PENDING: "VERIFY_OTP_NO_PENDING",
  VERIFY_OTP_NO_SUCCESS: "VERIFY_OTP_NO_SUCCESS",
  VERIFY_OTP_NO_ERROR: "VERIFY_OTP_NO_ERROR",
  AUTH_SUCCESS: "AUTH_SUCCESS",
};

export function generateOtp(number) {
  return (dispatch) => {
    const data = {
      userIdentifier: number,
    };
    dispatch(showLoader());
    dispatch({
      type: actionTypes.VERIFY_MOBILE_NO_PENDING,
      payload: {
        generateOtpPending: true,
        generateOtpSuccess: false,
        generateOtpError: null,
      },
    });

    Api.post("auth/otp/generate", data)
      .then((response) => {
        console.log(response);
        if (response.data) {
          dispatch(hideLoader());
          dispatch({
            type: actionTypes.VERIFY_MOBILE_NO_SUCCESS,
            payload: {
              generateOtpPending: false,
              generateOtpSuccess: true,
              generateOtpError: null,
              mobileNo: data.userIdentifier,
            },
          });
          history.push("/verifyotp");
          dispatch(
            showAlert({
              isOpen: true,
              title: "Success",
              type: "success",
              msg: response.message,
            })
          );
        } else {
          dispatch(hideLoader());
          dispatch({
            type: actionTypes.VERIFY_MOBILE_NO_ERROR,
            payload: {
              generateOtpPending: false,
              generateOtpSuccess: true,
              generateOtpError: null,
            },
          });
          dispatch(
            showAlert({
              isOpen: true,
              title: "Error",
              type: "danger",
              msg: "Enter Valid Credential",
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoader());
        dispatch({
          type: actionTypes.VERIFY_MOBILE_NO_ERROR,
          payload: {
            generateOtpPending: false,
            generateOtpSuccess: true,
            generateOtpError: null,
          },
        });
        dispatch(
          showAlert({
            isOpen: true,
            title: "Error",
            type: "danger",
            msg: "Enter Valid Credential",
          })
        );
      });
  };
}

export function verifyOtp(otp) {
  return (dispatch) => {
    const mobileNo = getState().otpVerification.mobileNo;

    const data = {
      userIdentifier: mobileNo,
      otp: otp,
    };
    dispatch(showLoader());
    dispatch({
      type: actionTypes.VERIFY_OTP_NO_PENDING,
      payload: {
        verifyOtpPending: true,
        verifyOtpSuccess: false,
        verifyOtpError: null,
      },
    });

    Api.post("auth/otp/verify", data)
      .then((response) => {
        console.log("response:", response);
        if (response.data) {
          dispatch(hideLoader());
          dispatch({
            type: actionTypes.VERIFY_OTP_NO_SUCCESS,
            payload: {
              verifyOtpPending: false,
              verifyOtpSuccess: true,
              verifyOtpError: null,
            },
          });

          dispatch(
            showAlert({
              isOpen: true,
              title: "Success",
              type: "success",
              msg: response.message,
            })
          );

          dispatch({
            type: actionTypes.AUTH_SUCCESS,
            payload: {
              accessToken: response.data.accessToken,
              refreshToken: response.data.accessToken,
            },
          });
          history.push(HOME);
        } else {
          dispatch(hideLoader());
          dispatch({
            type: actionTypes.VERIFY_OTP_NO_ERROR,
            payload: {
              verifyOtpPending: false,
              verifyOtpSuccess: true,
              verifyOtpError: true,
            },
          });
          dispatch(
            showAlert({
              isOpen: true,
              title: "Error",
              type: "danger",
              msg: response.message,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoader());
        dispatch({
          type: actionTypes.VERIFY_OTP_NO_ERROR,
          payload: {
            verifyOtpPending: false,
            verifyOtpSuccess: true,
            verifyOtpError: true,
          },
        });
        dispatch(
          showAlert({
            isOpen: true,
            title: "Error",
            type: "danger",
            msg: "Invalid OTP",
          })
        );
      });
  };
}

export function verifyOtpErrorNull() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.VERIFY_OTP_NO_ERROR,
      payload: {
        verifyOtpError: null,
      },
    });
  };
}
