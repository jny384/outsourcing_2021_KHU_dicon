import React from "react";
import './App.css'
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./views/home/header";
import Footer from "./views/home/footer";
import HomeView from "./views/home/HomeView";
import OnPost from "./views/admin/onPost";
import GuestBook from "./views/guest/guestBook";
import WorksView from "./views/works/worksView";
import UploadWorkImages from "./components/works/uploadWorkImages";
// import GetProfileImage from "./components/works/getProfileImage";
import UploadProfile from "./components/works/uploadProfile";

function App() {
    return (
            <div className="mainBody">
                <Header/>
                <BrowserRouter>
                    <Route exact path="/" component={HomeView}/>
                    <Route path='/write' component={OnPost}/>
                    <Route path='/guest' component={GuestBook}/>
                    <Route exact path="/works/:urlId" component={WorksView}/>

                    <Route exact path="/upload/:urlId" component={UploadProfile}/>
                    <Route path='/upload' component={UploadWorkImages}/>
                </BrowserRouter>
                <Footer/>
            </div>
  );
}

export default App;
