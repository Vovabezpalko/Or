

  export   function setPlays(playing) {
   
    return { type: "SET_PLAY",
    payload: playing}
  }

  export function setUrls(url) {

    return { type: "SET_URL",
    payload: url}
  }
  export function setStates(state) {
   
    return { type: "SET_STATE",
    payload: state}
  }

  export function setNames(names) {

    return { type: "SET_NAMES",
    payload: names}
  }

