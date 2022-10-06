import React from "react";
import { Routes, Route } from "react-router-dom";

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
import NwBreakWrite from "../nwbreak/NwbreakWrite";
import NwBreakDetail from "../nwbreak/NwBreakDetail";
import NwBreakUpdate from "../nwbreak/NwBreakUpdate";
import NwBreakAnswer from "../nwbreak/NwBreakAnswer";
import LineList from "../line/LineList";
import BreakChart from "../chart/BreakChart";

function Router() {
    return (
        <Routes>
            {/* 홈 */}
            <Route path="/" element={<Home />}></Route>
            {/* Bbs 게시판 */}
            <Route path="/bbslist" element={<BbsList />}></Route>
            <Route path="/bbswrite" element={<BbsWrite />}></Route>
            <Route path="/bbsdetail/:seq" element={<BbsDetail />}></Route>
            <Route path="/bbsupdate" element={<BbsUpdate />}></Route>
            <Route path="/bbsanswer/:parentSeq" element={<BbsAnswer />}></Route>
            {/* 로그인 */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            {/* 장애게시판 */}{" "}
            <Route path="/nwbreakchart" element={<BreakChart />}></Route>
            <Route path="/nwbreaklist" element={<NwBreakList />}></Route>
            <Route path="/nwbreakwrite" element={<NwBreakWrite />}></Route>
            <Route
                path="/nwbreakdetail/:breakId"
                element={<NwBreakDetail />}
            ></Route>
            <Route path="/nwbreakupdate" element={<NwBreakUpdate />}></Route>
            <Route
                path="/nwbreakanswer/:parentSeq"
                element={<NwBreakAnswer />}
            ></Route>
            {/* 선번장 */}
            <Route path="/linelist" element={<LineList />}></Route>
            {/* 지표 */}
            <Route path="/ratewrite" element={<RateWrite />}></Route>
            <Route path="/ratekt" element={<RateKt />}></Route>
            <Route path="/rateskb" element={<RateSkb />}></Route>
            <Route path="/ratektsat" element={<RateKtsat />}></Route>
        </Routes>
    );
}

export default Router;
