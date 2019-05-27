import Dashboard from "views/Dashboard/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlert.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import DichVu01 from "views/Charts/DichVu01.jsx";
import DichVu02 from "views/Charts/DichVu02.jsx";
import DichVu03 from "views/Charts/DichVu03.jsx";
import DichVu04 from "views/Charts/DichVu04.jsx";
import DichVu05 from "views/Charts/DichVu05.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import pagesRoutes from "./pages.jsx";
import SuaDieuHoa from "views/Charts/SuaDieuHoa.jsx";
import SuaTv from "views/Charts/SuaTv.jsx";
import BinhNongLanh from "views/Charts/BinhNongLanh.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Apps from "@material-ui/icons/Apps";
import GridOn from "@material-ui/icons/GridOn";
import Place from "@material-ui/icons/Place";
import WidgetsIcon from "@material-ui/icons/Widgets";
import DateRange from "@material-ui/icons/DateRange";

var pages = [
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/sua_dieu_hoa",
    component: SuaDieuHoa,
  },
  {
    path: "/sua_tv",
    component: SuaTv,
  },
  {
    path: "/binh_nong_lanh",
    component: BinhNongLanh,
  },
  {
    path: "/thiet_bi_gia_dinh",
    component: DichVu01,
  },
  {
    path: "/xay_dung_dien_nuoc",
    component: DichVu02,
  },
  {
    path: "/dich_vu_van_phong",
    component: DichVu03,
  },
  {
    path: "/o_to_xe_dien_xe_may",
    component: DichVu04,
  },
  {
    path: "/dich_vu_gia_dinh",
    component: DichVu05,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    collapse: true,
    path: "-page",
    name: "Pages",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: Apps,
    views: [
      {
        path: "/components/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons
      },
      {
        path: "/components/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/components/panels",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/components/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert
      },
      {
        path: "/components/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications
      },
      { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
      {
        path: "/components/typography",
        name: "Typography",
        mini: "T",
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: "content_paste",
    views: [
      {
        path: "/forms/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/forms/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/forms/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      { path: "/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
    ]
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: GridOn,
    views: [
      {
        path: "/tables/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables
      },
      {
        path: "/tables/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/tables/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: "/maps",
    name: "Maps",
    state: "openMaps",
    icon: Place,
    views: [
      {
        path: "/maps/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps
      },
      {
        path: "/maps/full-screen-maps",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap
      },
      {
        path: "/maps/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap
      }
    ]
  },
  { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  { path: "/charts", name: "Widgets", icon: WidgetsIcon, component: Charts },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  // { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
