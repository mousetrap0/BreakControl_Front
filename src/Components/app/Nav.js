import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Nav() {
    const { auth, setAuth } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container">
                <div
                    className="navbar-collapse collapse justify-content-between"
                    id="navbar-content"
                >
                    <ul className="navbar-nav mr-auto">
                        {/* 메인 화면 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>

                        {/* 게시판 */}
                        <li className="nav-item dropdown">
                            <div
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fas fa-clipboard-list"></i>
                                장애게시판
                            </div>

                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <Link className="dropdown-item" to="/bbslist">
                                    글목록
                                </Link>
                                <Link className="dropdown-item" to="/bbswrite">
                                    글추가
                                </Link>
                            </div>
                        </li>

                        {/* Nw Break 게시판 */}
                        <li className="nav-item dropdown">
                            <div
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Break 게시판
                            </div>

                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <Link
                                    className="dropdown-item"
                                    to="/nwbreaklist"
                                >
                                    글목록
                                </Link>
                                <Link
                                    className="dropdown-item"
                                    to="/nwbreakwrite"
                                >
                                    글추가
                                </Link>
                            </div>
                        </li>

                        {/* 지표 게시판 */}

<<<<<<< HEAD
                        <li className="nav-item dropdown">
                            <div
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fas fa-file-signature"></i> 지표
                            </div>
=======
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/bbslist">글목록</Link>
								<Link className="dropdown-item" to="/bbswrite">글추가</Link>
							</div>
						</li>

						{/* Nw Break 게시판 */}
						<li className="nav-item dropdown">

							<div className="nav-link dropdown-toggle" id="navbarDropdown"
								role="button" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false">Break 게시판</div>

							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/nwbreaklist">글목록</Link>
								<Link className="dropdown-item" to="/nwbreakwrite">글추가</Link>
							</div>
						</li>

					</ul>
					<ul className="navbar-nav ml-auto">
>>>>>>> 7bf38e1d8cae11c6a0e730ea02bb7189dd975c80

                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <Link className="dropdown-item" to="/ratewrite">
                                    지표작성
                                </Link>
                                <Link className="dropdown-item" to="/ratekt">
                                    KT
                                </Link>
                                <Link className="dropdown-item" to="/rateskb">
                                    SKB
                                </Link>
                                <Link className="dropdown-item" to="/ratektsat">
                                    KTsat
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {auth ? (
                            <>
                                {/* 회원 정보 */}
                                <li className="nav-item">
                                    <span className="nav-link">
                                        {" "}
                                        {auth} 님 반갑습니다{" "}
                                        <i className="fab fa-ello"></i> &nbsp;{" "}
                                    </span>
                                </li>

                                {/* 로그아웃 */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                        <i className="fas fa-sign-out-alt"></i>{" "}
                                        로그아웃
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                {/* 로그인 */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        로그인
                                    </Link>
                                </li>

                                {/* 회원가입 */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/join">
                                        회원가입
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
