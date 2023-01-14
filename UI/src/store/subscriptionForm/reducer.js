import { APILoadingStatus } from "../constants";
import { SUBSCRIBE, SUBSCRIBE_SUCCESS, SUBSCRIBE_FAILED } from "./actions";
const initialSubscribeState = {
  loadingState: APILoadingStatus.NOT_STARTED,
};

export const subscribeReducer = (
  state = initialSubscribeState,
  { type, payload }
) => {
  switch (type) {
    case SUBSCRIBE:
      return { ...state, loadingState: APILoadingStatus.STARTED };
    case SUBSCRIBE_SUCCESS:
      return { ...state, loadingState: APILoadingStatus.SUCCESS, ...payload };
    case SUBSCRIBE_FAILED:
      return {
        ...state,
        loadingState: APILoadingStatus.FAILED,
        error: payload,
      };
    default:
      return state;
  }
};
