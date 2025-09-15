import { useEffect, useContext, lazy, Suspense, useState } from "react";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Series = lazy(() => import("./Pages/Series"));
const Search = lazy(() => import("./Pages/Search"));
const Profile = lazy(() => import("./Pages/Profile"));
const MyList = lazy(() => import("./Pages/MyList"));
const SignIn = lazy(() => import("./Pages/Auth/SignIn"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const Welcome = lazy(() => import("./Pages/Welcome"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const Play = lazy(() => import("./Pages/Play"));
const LikedMovies = lazy(() => import("./Pages/LikedMovies"));
const History = lazy(() => import("./Pages/History"));

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Context/UserContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./componets/Loading/Loading";
import Sidebar from "./componets/Header/Sidebar";
import NavbarWithoutUser from "./componets/Header/NavbarWithoutUser";
import { ForgotPassword } from "./Pages/Auth/ForgotPassword";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import { EditProfile } from "./Pages/EditProfile";
import { SubscribePage } from "./Pages/SubscribeComponent/SubscribePage";

function App() {
  const { User, setUser } = useContext(AuthContext);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoadingAuth(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log("Current hash path:", location.pathname);
  }, [location]);

  if (loadingAuth) {
    return <Loading />;
  }

  const hideSidebarOn = ["/EditProfile", "/SubscribePage"];
  const shouldShowSidebar = User && !hideSidebarOn.includes(location.pathname);

  return (
    <div>
      {shouldShowSidebar && <Sidebar />}

      {!User && <NavbarWithoutUser />}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index path="/" element={User ? <Home /> : <Welcome />} />
          {User ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/EditProfile" element={<EditProfile />} />
              <Route path="/mylist" element={<MyList />} />
              <Route path="/liked" element={<LikedMovies />} />
              <Route path="/history" element={<History />} />
              <Route path="/SubscribePage" element={<SubscribePage />} />
              <Route path="/play/:id" element={<Play />} />
            </>
          ) : null}
          <Route path="/play/:id" element={<Play />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
