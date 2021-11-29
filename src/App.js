import React from "react";
import './App.css'
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./views/home/header";
// import Footer from "./views/home/footer";
import HomeView from "./views/home/HomeView";

import GuestBook from "./views/guest/guestBook";

import AdminView from "./views/admin/adminView";
import Auth from "./views/admin/auth";
import OnPostBanner from "./views/banner/onPostBanner";

import OrganizationView from "./views/organization/organizationView";
import BannerView from "./views/banner/bannerView";
import ProfessorView from "./views/professor/professorView";

import OnPost from "./views/admin/onPost";
import UploadWorkImages from "./components/post/uploadWorkImages";
import UploadProfile from "./components/post/uploadProfile";

import WorksView from "./views/works/worksView";
import WorksList from "./views/works/worksList";


function App() {
    return (
            <div className="mainBody">
                <Header/>
                <div className="mainComponent">
                    <BrowserRouter>
                        <Route exact path="/" component={HomeView}/>

                        <Route path='/guest' component={GuestBook}/>
                        <Route path='/2021_KHU_dicon' component={OrganizationView}/>
                        <Route path='/banner' component={BannerView}/>
                        <Route path='/professor' component={ProfessorView}/>

                        <Route path='/auth/admin' component={Auth}/>
                        <Route path='/admin' component={AdminView}/>

                        <Route path='/write' component={OnPost}/>
                        <Route exact path="/works/:teamName/:urlId" component={WorksView}/>

                        <Route path='/post_banner' component={OnPostBanner}/>

                        <Route path='/upload' component={UploadWorkImages}/>
                        <Route exact path="/upload/:urlId" component={UploadProfile}/>

                        <Route exact path='/works/:teamName' component={WorksList}/>
                    </BrowserRouter>
                </div>
            </div>
  );
}

export default App;
