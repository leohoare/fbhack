import { MONITOR_TAB, MAP_TAB } from '../actions/TabConst';

const initialState = {
  ShowMonitor: true,
  ShowMap: false,
  ShowAnalysis: false
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case MONITOR_TAB:
      return {
        ...state,
        ShowMonitor: true,
        ShowMap: false,
        ShowAnalysis: false
      };
    case MAP_TAB:
      return {
        ...state,
        ShowMonitor: false,
        ShowMap: true,
        ShowAnalysis: false
      };
    default:
      return state;
  }
};

export default tabReducer;
