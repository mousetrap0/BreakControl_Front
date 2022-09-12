import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

const RateWrite = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const { headers, setHeaders } = useContext(HttpHeadersContext);

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };

    const changeContent = (event) => {
        setContent(event.target.value);
    };

    /* [POST /bbs]: 게시글 작성 */
    const createBbs = async () => {
        const req = {
            id: localStorage.getItem("id"),
            title: title,
            content: content,
        };

        await axios
            .post("http://localhost:3000/bbs", req, { headers: headers })
            .then((resp) => {
                console.log("[BbsWrite.js] createBbs() success :D");
                console.log(resp.data);

                alert("새로운 게시글을 성공적으로 등록했습니다 :D");
                navigate(`/bbsdetail/${resp.data.seq}`); // 새롭게 등록한 글 상세로 이동
            })
            .catch((err) => {
                console.log("[BbsWrite.js] createBbs() error :<");
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
                        <th className="table-primary">통신사</th>
                        <td>
                            <div className="form-row">
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="KT"
                                        value="KT"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="KT"
                                    >
                                        KT
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="SKB"
                                        value="SKB"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="SKB"
                                    >
                                        SKB
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="KTsat"
                                        value="KTsat"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="KTsat"
                                    >
                                        KTsat
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">회선공사 사전 미공지</th>
                        <td>
                            <div className="form-row">
                                <div className="col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="공사일자"
                                    />
                                </div>
                                <div className="col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="공사이름"
                                    />
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="work1"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="work1"
                                    >
                                        서류/조치사항 부적절
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">고지서 지연/오류</th>

                        <td>
                            <div className="form-row">
                                <div className="col-4">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="해당 월"
                                        size="50px"
                                    />
                                </div>
                                <div className="col-4">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="고지서 이름"
                                        size="50px"
                                    />
                                </div>
                                <div className="col  form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="toll1"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="toll1"
                                    >
                                        지연
                                    </label>
                                </div>
                                <div className="col  form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="toll2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="toll2"
                                    >
                                        오류
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">
                            통신요금 관련 업무 협조
                        </th>
                        <td>
                            <div className="form-row">
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="eval1"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="eval1"
                                    >
                                        상(5점)
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="eval2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="eval2"
                                    >
                                        중(3점)
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="eval3"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="eval3"
                                    >
                                        하(0점)
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">회선 관리</th>
                        <td>
                            <div className="form-row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="장비 지원 날짜"
                                        size="50px"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="월간 점검 횟수"
                                        size="50px"
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">교육 및 훈련</th>
                        <td>
                            <div className="form-row">
                                <div className="col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="실시 날짜"
                                        size="50px"
                                    />
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="edu1"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="edu1"
                                    >
                                        기술 교육
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="edu2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="edu2"
                                    >
                                        국사 방문{" "}
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="edu3"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="edu3"
                                    >
                                        협동 훈련{" "}
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="edu4"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="edu4"
                                    >
                                        기타{" "}
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-primary">업무 협력</th>
                        <td>
                            <div className="form-row">
                                <div className="col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="간담회 날짜"
                                        size="50px"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="업무 적극성 ->"
                                        size="50px"
                                        disabled
                                    />
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="coop1"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="coop1"
                                    >
                                        상(5점)
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="coop2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="coop2"
                                    >
                                        중(3점)
                                    </label>
                                </div>
                                <div className="col form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="coop3"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="coop3"
                                    >
                                        하(0점)
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">기타 사항</th>
                        <td>
                            <textarea
                                className="form-control"
                                value={content}
                                onChange={changeContent}
                                rows="10"
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="my-5 d-flex justify-content-center">
                <button
                    className="btn btn-outline-secondary"
                    onClick={createBbs}
                >
                    <i className="fas fa-pen"></i> 등록하기
                </button>
            </div>
        </div>
    );
};

export default RateWrite;
