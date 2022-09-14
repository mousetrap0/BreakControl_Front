import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

const NwBreakWrite = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const { headers, setHeaders } = useContext(HttpHeadersContext);

    const navigate = useNavigate();

    /*     const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); */

    const [lineId, setLineId] = useState("");
    const [facilityGround, setFacilityGround] = useState("");
    const [facilityName, setFacilityName] = useState("");
    const [breakTime, setBreakTime] = useState("");
    const [recoveryTime, setRecoveryTime] = useState("");
    const [breakManager, setBreakManager] = useState("");
    const [breakReason, setBreakReason] = useState("");
    const [writer, setWriter] = useState("");

    /*     const changeTitle = (event) => {
        setTitle(event.target.value);
    };
    const changeContent = (event) => {
        setContent(event.target.value);
    }; */

    const changeLineid = (event) => {
        setLineId(event.target.value);
    };
    const changeFacilityground = (event) => {
        setFacilityGround(event.target.value);
    };

    const changeFacilityname = (event) => {
        setFacilityName(event.target.value);
    };
    const changeBreaktime = (event) => {
        setBreakTime(event.target.value);
    };

    const changeRecoverytime = (event) => {
        setRecoveryTime(event.target.value);
    };

    const changeBreakmanager = (event) => {
        setBreakManager(event.target.value);
    };
    const changeBreakreason = (event) => {
        setBreakReason(event.target.value);
    };
    const changeWriter = (event) => {
        setWriter(event.target.value);
    };

    /* [POST /nwbreak]: 게시글 작성 */
    const createNwBreak = async () => {
        const req = {
            /*             id: localStorage.getItem("id"),
            title: title,
            content: content,
 */
            breakId: localStorage.getItem("breakId"),
            lineId: lineId,
            facilityGround: facilityGround,
            facilityName: facilityName,
            breakTime: breakTime,
            recoveryTime: recoveryTime,
            breakManager: breakManager,
            breakReason: breakReason,
            writer: writer,
        };
        console.log(req);

        await axios
            .post("http://localhost:3000/nwbreak", req, { headers: headers })
            .then((resp) => {
                console.log("[NwBreakWrite.js] createNwBreak() success :D");
                console.log(resp.data);

                alert("새로운 게시글을 성공적으로 등록했습니다 :D");
                navigate(`/nwbreakdetail/${resp.data.seq}`); // 새롭게 등록한 글 상세로 이동
            })
            .catch((err) => {
                console.log("[NwBreakWrite.js] createNwBreak() error :<");
                console.log(err);
            });
    };

    useEffect(() => {
        if (!auth) {
            alert("로그인 한 사용자만 게시글을 작성할 수 있습니다 !");
            navigate(-1);
        }
    }, []);

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th className="table-primary">작성자</th>
                        <td>
                            {/*  <input
                                type="text"
                                className="form-control"
                                value={localStorage.getItem("id")}
                                size="50px"
                                readOnly
                            /> */}

                            <input
                                type="text"
                                className="form-control"
                                value={writer}
                                onChange={changeWriter}
                                size="50px"
                            />
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">Line ID</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                value={lineId}
                                onChange={changeLineid}
                                size="50px"
                            />
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">시설위치</th>

                        <td>
                            <input
                                type="text"
                                className="form-control"
                                value={facilityGround}
                                onChange={changeFacilityground}
                                size="50px"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">시설명</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                value={facilityName}
                                onChange={changeFacilityname}
                                size="50px"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">Break 시간</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                value={breakTime}
                                onChange={changeBreaktime}
                                size="50px"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">해소 시간</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                value={recoveryTime}
                                onChange={changeRecoverytime}
                                size="50px"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">Break 담당자</th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                value={breakManager}
                                onChange={changeBreakmanager}
                                size="50px"
                            />
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">Break 원인</th>
                        <td>
                            <textarea
                                className="form-control"
                                value={breakReason}
                                onChange={changeBreakreason}
                                rows="10"
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="my-5 d-flex justify-content-center">
                <button
                    className="btn btn-outline-secondary"
                    onClick={createNwBreak}
                >
                    <i className="fas fa-pen"></i> 등록하기
                </button>
            </div>
        </div>
    );
};

export default NwBreakWrite;
