import React from "react";
import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from "../app/Home";
import BbsList from "../bbs/BbsList";
import BbsWrite from "../bbs/BbsWrite";
import BbsDetail from "../bbs/BbsDetail";
import BbsUpdate from "../bbs/BbsUpdate";
import BbsAnswer from "../bbs/BbsAnswer";
import Join from "../member/Join";
import Login from "../member/Login";
import Logout from "../member/Logout";
import RateWrite from "../rate/RateWrite";
import RateKt from "../rate/RateKt";
import RateSkb from "../rate/RateSkb";
import RateKtsat from "../rate/RateKtsat";
import NwBreakList from "../nwbreak/NwBreakList";
import NwBreakWrite from "../nwbreak/NwBreakWrite";
import NwBreakDetail from "../nwbreak/NwBreakDetail";
import NwBreakUpdate from "../nwbreak/NwBreakUpdate";
import NwBreakAnswer from "../nwbreak/NwBreakAnswer";
=======
import Home from "../app/Home"
import BbsList from "../bbs/BbsList"
import BbsWrite from "../bbs/BbsWrite"
import BbsDetail from "../bbs/BbsDetail"
import BbsUpdate from "../bbs/BbsUpdate"
import BbsAnswer from "../bbs/BbsAnswer"
import NwBreakList from "../nwbreak/NwBreakList"
import NwBreakWrite from "../nwbreak/NwbreakWrite"
import NwBreakDetail from "../nwbreak/NwBreakDetail"
import NwBreakUpdate from "../nwbreak/NwBreakUpdate"
import NwBreakAnswer from "../nwbreak/NwBreakAnswer"
import Join from "../member/Join"
import Login from "../member/Login"
import Logout from "../member/Logout"

>>>>>>> 7bf38e1d8cae11c6a0e730ea02bb7189dd975c80

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/bbslist" element={<BbsList />}></Route>
            <Route path="/bbswrite" element={<BbsWrite />}></Route>
            <Route path="/bbsdetail/:seq" element={<BbsDetail />}></Route>
            <Route path="/bbsupdate" element={<BbsUpdate />}></Route>
            <Route path="/bbsanswer/:parentSeq" element={<BbsAnswer />}></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/logout" element={<Logout />}></Route>

<<<<<<< HEAD
            <Route path="/nwbreaklist" element={<NwBreakList />}></Route>
            <Route path="/nwbreakwrite" element={<NwBreakWrite />}></Route>
            <Route
                path="/nwbreakdetail/:seq"
                element={<NwBreakDetail />}
            ></Route>
            <Route path="/nwbreakupdate" element={<NwBreakUpdate />}></Route>
            <Route
                path="/nwbreakanswer/:parentSeq"
                element={<NwBreakAnswer />}
            ></Route>

            <Route path="/ratewrite" element={<RateWrite />}></Route>
            <Route path="/ratekt" element={<RateKt />}></Route>
            <Route path="/rateskb" element={<RateSkb />}></Route>
            <Route path="/ratektsat" element={<RateKtsat />}></Route>
        </Routes>
    );
=======
				<Route path="/nwbreaklist" element={<NwBreakList />}></Route>
				<Route path="/nwbreakwrite" element={<NwBreakWrite />}></Route>
				<Route path="/nwbreakdetail/:seq" element={<NwBreakDetail />}></Route>
				<Route path="/nwbreakupdate" element={<NwBreakUpdate />}></Route>
				<Route path="/nwbreakanswer/:parentSeq" element={<NwBreakAnswer />}></Route>

				<Route path="/login" element={<Login />}></Route>
				<Route path="/join" element={<Join />}></Route>
				<Route path="/logout" element={<Logout />}></Route>
			</Routes>
	);
>>>>>>> 7bf38e1d8cae11c6a0e730ea02bb7189dd975c80
}

export default Router;
