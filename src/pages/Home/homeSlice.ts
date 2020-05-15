import { createSlice } from "@reduxjs/toolkit";
import Home from "@material-ui/icons/Home";
import DataUsage from "@material-ui/icons/DataUsageOutlined";
import Settings from "@material-ui/icons/Settings";
import Info from "@material-ui/icons/Info";


const slice = createSlice({
  name: "home",
  initialState: {
    drawerList: [
      { id: 0, name: "主页", icon: Home, to: "/home/main" },
      { id: 1, name: "数据", icon: DataUsage, to: "/home/data" },
      { id: 2, name: "设置", icon: Settings, to: "/home/setting" },
      { id: 3, name: "关于", icon: Info, to: "/home/about" },
    ],
  },
  reducers: {},
});

export const selectorStore = (state: any) => state.home;

export default slice.reducer;
