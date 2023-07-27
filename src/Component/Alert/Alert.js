import { toast } from "react-toastify";
import { showAlert, hideAlert } from "../../Redux/Alert/alertSlice";
import { store } from "../../Store/store";
toast.configure();

// toast for error
export const errorFunction = (error) => {
  const alertMessage = "ffff"
  // const alertMessage = store.getState().alert.alertMessage;
  const errorMessage = typeof error === "string" ? error : "error";
  if (alertMessage !== errorMessage) {
    store.dispatch(showAlert(errorMessage));
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose() {
        store.dispatch(hideAlert());
      },
    });
  }
};

// toast for success
export const successFunction = (data) => {
  const successMessage = typeof data === "string" ? data : "success";
  toast.success(successMessage, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

//toast for info
export const infoFunction = (data) => {
  const infoMessage = typeof data === "string" ? data : "success";
  toast.info(infoMessage, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
