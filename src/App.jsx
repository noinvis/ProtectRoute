import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "./pages/Loading/Loading";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/dashboard/home/Home"));
const Payment = lazy(() => import("./pages/dashboard/payment/Payment"));
const Group = lazy(() => import("./pages/dashboard/group/Group"));
const Graph = lazy(() => import("./pages/dashboard/graph/Graph"));
const Rating = lazy(() => import("./pages/dashboard/rating/Rating"));
const Shop = lazy(() => import("./pages/dashboard/shop/Shop"));
const Lesson = lazy(() => import("./pages/dashboard/lesson/Lesson"));
const Settings = lazy(() => import("./pages/dashboard/settings/Settings"));
const About = lazy(() => import("./pages/dashboard/about/About"));
const Contact = lazy(() => import("./pages/dashboard/contact/Contact"));
const Jadval = lazy(() => import("./pages/dashboard/home/jadval/Jadval"));
const Kumushlar = lazy(() => import("./pages/dashboard/home/kumushlar/Kumushlar"));
const Paid = lazy(() => import("./pages/dashboard/payment/paid/Paid"));
const Unpaid = lazy(() => import("./pages/dashboard/payment/unpaid/Unpaid"));
const Active = lazy(() => import("./pages/dashboard/group/active/Active"));
const Neytral = lazy(() => import("./pages/dashboard/group/neytral/Neytral"));
const Result = lazy(() => import("./pages/dashboard/graph/result/Result"));
const All = lazy(() => import("./pages/dashboard/rating/all/All"));
const Frontend = lazy(() => import("./pages/dashboard/rating/frontend/Frontend"));
const MainShop = lazy(() => import("./pages/dashboard/shop/mainshop/MainShop"));
const AlreadyTaken = lazy(() => import("./pages/dashboard/shop/alreadytaken/AlreadyTaken"));

const App = () => {
  return (
    <div>
      <Suspense
        fallback={<Loading/>}
      >
        {useRoutes([
          {
            path: "/",
            element: <Login />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "home",
                element: (
                  <Home
                    first={"Kumushlar"}
                    second={"Dars jadvali"}
                    third={"Bosh sahifa"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <Kumushlar />,
                  },
                  {
                    path: "jadval",
                    element: <Jadval />,
                  },
                ],
              },
              {
                path: "payment",
                element: (
                  <Payment
                    first={"Paid"}
                    second={"Unpaid"}
                    third={"To'lovlarim"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <Paid />,
                  },
                  {
                    path: "unpaid",
                    element: <Unpaid />,
                  },
                ],
              },
              {
                path: "group",
                element: (
                  <Group
                    first={"Faol"}
                    second={"Tugagan"}
                    third={"Guruhlarim"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <Active />,
                  },
                  {
                    path: "neytral",
                    element: <Neytral />,
                  },
                ],
              },
              {
                path: "graph",
                element: (
                  <Graph
                    first={"Mening natijalarim"}
                    second={"Yig'ilgan natijalar"}
                    third={"Ko'rsatgichlarim"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <Kumushlar />,
                  },
                  {
                    path: "result",
                    element: <Result />,
                  },
                ],
              },
              {
                path: "rating",
                element: (
                  <Rating
                    first={"Umumiy"}
                    second={"Frontend N98"}
                    third={"Reyting"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <All />,
                  },
                  {
                    path: "frontend",
                    element: <Frontend />,
                  },
                ],
              },
              {
                path: "shop",
                element: (
                  <Shop
                    first={"Sotuvda"}
                    second={"Sotib olganlarim"}
                    third={"Do'kon"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <MainShop />,
                  },
                  {
                    path: "taken",
                    element: <AlreadyTaken />,
                  },
                ],
              },
              {
                path: "lesson",
                element: (
                  <Lesson
                    first={"Men"}
                    second={"Darsim"}
                    third={"Qo'shimcha darslar"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <Kumushlar />,
                  },
                  {
                    path: "active",
                    element: <Active />,
                  },
                ],
              },
              {
                path: "settings",
                element: (
                  <Settings
                    first={"Bugun"}
                    second={"Natija"}
                    third={"Sozlamalar"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <Jadval />,
                  },
                  {
                    path: "result",
                    element: <Result />,
                  },
                ],
              },
              {
                path: "contact",
                element: (
                  <Contact
                    first={"Bog'lanish uchun to'lang"}
                    second={"Bepul"}
                    third={"Sozlamalar"}
                  />
                ),
                children: [
                  {
                    index: true,
                    element: <Paid />,
                  },
                  {
                    path: "taken",
                    element: <AlreadyTaken />,
                  },
                ],
              },
              {
                path: "about",
                element: (
                  <About first={"Info"} second={"Profil"} third={"Haqimizda"} />
                ),
                children: [
                  {
                    index: true,
                    element: <Neytral />,
                  },
                  {
                    path: "me",
                    element: <Kumushlar />,
                  },
                ],
              },
            ],
          },
        ])}
      </Suspense>
    </div>
  );
};

export default App;
