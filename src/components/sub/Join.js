import Layout from "../common/Layout";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Join() {
  const history = useHistory();

  const initVal = {
    userid: "",
    pwd1: "",
    pwd2: "",
    email: "",
    comments: "",
    area: "",
    gender: null,
    agree: null,
  };

  const [Val, setVal] = useState(initVal);
  const [Err, setErr] = useState({});
  const [Success, setSuccess] = useState(false);
  const [Submit, setSubmit] = useState(false);

  const check = (Val) => {
    const errs = {};
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[~!@#$%^&*()_+]/;

    //userid인증처리
    if (Val.userid.length < 5) {
      errs.userid = "아이디를 5글자 이상 입력하세요";
    }

    //password인증처리
    if (
      Val.pwd1.length < 5 ||
      !eng.test(Val.pwd1) ||
      !num.test(Val.pwd1) ||
      !spc.test(Val.pwd1)
    ) {
      errs.pwd1 =
        "비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요";
    }
    if (Val.pwd1 !== Val.pwd2 || !Val.pwd2) {
      errs.pwd2 = "두개의 비밀번호를 동일하게 입력하세요";
    }

    //email인증처리
    if (Val.email.length < 8 || !/@/.test(Val.email)) {
      errs.email = "이메일은 8글자이상 @를 포함해 입력하세요";
    }

    if (!Val.gender) {
      errs.gender = "성별을 선택하세요";
    }

    if (Val.comments.length < 20) {
      errs.comments = "남기는 말은 10글자 이상 입력해주세요";
    }

    if (Val.area === "") {
      errs.area = "지역을 선택하세요";
    }

    if (!Val.agree) {
      console.log("체크안함");
      errs.agree = "이용에 동의해주세요";
    }

    return errs;
  };

  const handleReset = () => {
    setSubmit(false);
    setErr({});
    setVal(initVal);
  };

  const handleChange = (e) => {
    //2)입력하고 있는 input요소의 name, value값을 변수로 비구조화 할당
    const { name, value } = e.target;
    // console.log(`name:${name} / value: ${value}`);
    //3)비구조화 할당으로 받은 값을 Val스테이트에 저장
    // 이때 객체 리터럴 프로퍼티안에서 name값을 변수로 유지시키기 위해 []감싸줌
    setVal({ ...Val, [name]: value });
  };

  const handleRadio = (e) => {
    const { name } = e.target;
    const isCheck = e.target.checked;
    setVal({ ...Val, [name]: isCheck });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErr(check(Val));
  };

  const handleSelect = (e) => {
    const { name } = e.target;
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({ ...Val, [name]: isSelected });
  };

  const handleCheck = (e) => {
    const { name } = e.target;
    const isCheck = e.target.checked;
    setVal({ ...Val, [name]: isCheck });
  };

  useEffect(() => {
    const len = Object.keys(Err).length;
    if (len === 0 && Submit) {
      setSuccess(true);
      history.push("/");
    } else {
      setSuccess(false);
    }
  }, [Err]);

  return (
    <Layout name={"Join"}>
      <h1>JOIN US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        aliquam voluptatem odio consectetur non atque pariatur, placeat nemo
        reiciendis maxime.
      </p>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="hidden">회원가입 폼 양식</legend>
          <span className="title">회원정보</span>
          <table>
            <caption className="hidden">회원가입 정보입력</caption>
            <tbody>
              {/* userid */}
              <tr>
                <th scope="col">
                  <label htmlFor="userid">USER ID</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="userid"
                    name="userid"
                    placeholder="아이디를 입력해주세요."
                    //4)Val값이 변경될때마다 화면에 출력
                    value={Val.userid}
                    //1)인풋에 값 입력시
                    onChange={handleChange}
                  />
                  <span className="err">{Err.userid}</span>
                </td>
              </tr>

              {/* password */}
              <tr>
                <th scope="col">
                  <label htmlFor="pwd1">PASSWORD</label>
                </th>
                <td>
                  <input
                    type="password"
                    name="pwd1"
                    id="pwd1"
                    placeholder="비밀번호를 입력해주세요."
                    value={Val.pwd1}
                    onChange={handleChange}
                  />
                  <span className="err">{Err.pwd1}</span>
                </td>
              </tr>
              <tr>
                <th scope="col">
                  <label htmlFor="pwd2">PASSWORD</label>
                </th>
                <td>
                  <input
                    type="password"
                    name="pwd2"
                    id="pwd2"
                    placeholder="비밀번호를 동일하게 재입력해주세요."
                    value={Val.pwd2}
                    onChange={handleChange}
                  />
                  <span className="err">{Err.pwd2}</span>
                </td>
              </tr>

              {/* email */}
              <tr>
                <th scope="col">
                  <label htmlFor="email">E-MAIL</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="이메일주소를 입력해주세요."
                    value={Val.email}
                    onChange={handleChange}
                  />
                  <span className="err">{Err.email}</span>
                </td>
              </tr>

              {/* area */}
              <tr>
                <th scope="col">
                  <label htmlFor="area">AREA</label>
                </th>
                <td>
                  <select name="area" id="area" onChange={handleSelect}>
                    <option value="">지역을 선택해주세요</option>
                    <option value="seoul">서울특별시</option>
                    <option value="gyeonggi">경기도</option>
                    <option value="busan">부산광역시</option>
                    <option value="jeju">제주도</option>
                  </select>
                  <span className="err">{Err.area}</span>
                </td>
              </tr>

              {/* gender */}
              <tr>
                <th scope="col">GENDER</th>
                <td>
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    onChange={handleRadio}
                  />

                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    onChange={handleRadio}
                  />
                  <span className="err">{Err.gender}</span>
                </td>
              </tr>

              {/* comments */}
              <tr className="w100">
                <th scope="col">
                  <label htmlFor="comments">COMMENTS</label>
                </th>
                <td>
                  <textarea
                    name="comments"
                    id="comments"
                    cols="30"
                    rows="10"
                    placeholder="코멘트를 입력해주세요."
                    value={Val.comments}
                    onChange={handleChange}
                  ></textarea>
                  <span className="err">{Err.comments}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="terms">
            <span className="title">개인정보 수집 및 이용동의(필수)</span>
            <div className="text">
              <p>
                <b>
                  메이필드서울은 아래의 목적으로 개인 정보를 수집 및 이용하며,
                  회원의 개인정보를 안전하게 취급하는데 최선을 다합니다.
                </b>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eaque necessitatibus explicabo in labore culpa nulla modi
                accusamus nesciunt saepe perspiciatis itaque, eveniet sunt unde
                ullam ducimus voluptates reiciendis inventore pariatur quidem!
                Commodi delectus, cupiditate inventore unde impedit quis ab
                nulla non? Illum, quasi sed iste temporibus vero voluptate
                accusantium magni aliquid velit delectus! Quidem modi ipsa
                adipisci facere omnis, quam aliquam? Qui facere natus, ex sint
                ipsa, harum vitae dicta aspernatur nesciunt sapiente magni odio,
                voluptate ab. Dolorum nihil voluptatum voluptatibus voluptas
                maxime enim ab, quo debitis quod unde est veniam natus nesciunt
                ex odio labore rem pariatur ducimus! nulla non? Illum, quasi sed
                iste temporibus vero voluptate accusantium magni aliquid velit
                delectus! Quidem modi ipsa adipisci facere omnis, quam aliquam?
                Qui facere natus, ex sint ipsa, harum vitae dicta aspernatur
                nesciunt sapiente magni odio, voluptate ab. Dolorum nihil
                voluptatum voluptatibus voluptas maxime enim ab, quo debitis
                quod unde est veniam natus nesciunt ex odio labore rem pariatur
                ducimus!
              </p>
            </div>
            <div className="check-wrap">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                onChange={handleCheck}
              />
              <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
              <span className="err">{Err.agree}</span>
            </div>
          </div>

          <div className="btnSet">
            <input type="reset" value="입력내용 초기화" onClick={handleReset} />
            <input
              type="submit"
              value="가입하기"
              onClick={() => setSubmit(true)}
            />
          </div>
        </fieldset>
      </form>
    </Layout>
  );
}

export default Join;
