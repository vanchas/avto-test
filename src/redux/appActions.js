export const SET_LANGUAGE = "SET_LANGUAGE";
export const SHOW_SUCCESS = "SHOW_SUCCESS";

export const setCurrentLanguage = (lang) => async (dispatch) => {
  const response = await fetch("/api", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=utf-8",
      "X-localization": lang,
    },
  });
  response
    .json()
    .then((data) => {
      return dispatch({ type: SET_LANGUAGE, payload: data });
    })
    .catch((err) => console.error("Error:", err));
};

export const showSuccess = (text) => async (dispatch) => {
  dispatch({ type: SHOW_SUCCESS, payload: text });
  setTimeout(() => {
    dispatch({ type: SHOW_SUCCESS, payload: null });
  }, 3000);
};
