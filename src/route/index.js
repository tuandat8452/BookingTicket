import DetailMovie from "../container/HomeTemplate/Detail";
import Home from "../container/HomeTemplate/Home";


export const routeHome = [
    {
        exact:true,
        path: "/",
        component : Home
    },
    {
        exact:false,
        path: "/chi-tiet-phim/:id",
        component : DetailMovie
    },

];