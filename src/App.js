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
import UploadProfile from "./components/works/uploadProfile";
import WorksList from "./views/works/worksList";

function App() {
    return (
            <div className="mainBody">
                <Header/>
                <BrowserRouter>
                    <Route exact path="/" component={HomeView}/>
                    <Route path='/write' component={OnPost}/>
                    <Route path='/guest' component={GuestBook}/>
                    <Route exact path="/works/:teamName/:urlId" component={WorksView}/>

                    <Route exact path="/upload/:urlId" component={UploadProfile}/>
                    <Route path='/upload' component={UploadWorkImages}/>

                    <Route exact path='/works/:teamName' component={WorksList}/>
                </BrowserRouter>
                <Footer/>
            </div>
  );
}

export default App;
