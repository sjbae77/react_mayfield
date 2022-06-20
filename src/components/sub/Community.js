import Layout from "../common/Layout";
import { useRef, useState, useEffect } from "react";

function Community() {
  const input = useRef(null);
  const textarea = useRef(null);
  const inputEdit = useRef(null);
  const textareaEdit = useRef(null);
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let formatDay =
    ("00" + month.toString()).slice(-2) +
    "." +
    ("00" + day.toString()).slice(-2);

  const getLocalData = () => {
    const data = localStorage.getItem("post");
    const dummyPosts = [
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
    ];

    if (data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }
  };

  const [Posts, setPosts] = useState(getLocalData());
  const [Allowed, setAllowed] = useState(true);

  //글 초기화 함수
  const resetPost = () => {
    input.current.value = "";
    textarea.current.value = "";
    if (inputEdit.current) {
      inputEdit.current.value = "";
      textareaEdit.current.value = "";
    }
  };

  //글 저장 함수
  const createPost = () => {
    if (!input.current.value.trim() || !textarea.current.value.trim()) {
      resetPost();
      return alert("제목과 본문을 모두 입력하세요");
    }
    setPosts([
      { title: input.current.value, content: textarea.current.value },
      ...Posts,
    ]);

    resetPost();
  };

  const onCreate = () => {
    if (window.confirm("게시글을 등록하시겠습니까?")) createPost();
  };

  //글 삭제 함수
  const deletePost = (index) => {
    // console.log(index);
    setPosts(Posts.filter((_, idx) => index !== idx));
  };

  const onRemove = (idx) => {
    if (window.confirm("정말 삭제하시겠습니까?")) deletePost(idx);
  };

  //실제 글 수정 함수
  const updatePost = (index) => {
    setAllowed(true);
    if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
      resetPost();
      return alert("수정할 제목과 본문을 모두 입력하세요");
    }

    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) {
          post.title = inputEdit.current.value;
          post.content = textareaEdit.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    );
  };

  //글 수정모드 변경함수
  const enableUpdate = (index) => {
    if (!Allowed) return;
    setAllowed(false);
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = true;
        return post;
      })
    );
  };

  //출력모드 변경함수
  const disableUpdate = (index) => {
    setAllowed(true);
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = false;
        return post;
      })
    );
  };

  useEffect(() => {
    // console.log(Posts);
    localStorage.setItem("post", JSON.stringify(Posts));
  }, [Posts]);

  return (
    <Layout name={"Community"}>
      <h1>COMMUNITY</h1>
      <div className="inputBox">
        <input type="text" placeholder="제목을 입력하세요" ref={input} />
        <br />
        <textarea
          cols="30"
          rows="10"
          placeholder="본문을 입력하세요"
          ref={textarea}
        ></textarea>
        <br />

        <div className="btnSet">
          <button onClick={resetPost}>
            <span>초기화</span>
          </button>
          <button onClick={() => onCreate()}>
            <span>등록하기</span>
          </button>
        </div>
      </div>

      <div className="showBox">
        {Posts.map((post, idx) => {
          return (
            <article key={idx}>
              {post.enableUpdate ? (
                //수정모드
                <>
                  <div className="editTxt">
                    <input
                      type="text"
                      defaultValue={post.title}
                      ref={inputEdit}
                    />
                    <br />
                    <textarea
                      cols="30"
                      rows="5"
                      defaultValue={post.content}
                      ref={textareaEdit}
                    ></textarea>
                  </div>

                  <div className="btnSet">
                    <button onClick={() => disableUpdate(idx)}>취소</button>
                    <button onClick={() => updatePost(idx)}>저장</button>
                  </div>
                </>
              ) : (
                //출력
                <>
                  <div className="date">
                    <em>{year}</em>
                    <span>{formatDay}</span>
                  </div>
                  <div className="txt">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>

                  <div className="btnSet">
                    <button onClick={() => enableUpdate(idx)}>수정</button>
                    <button onClick={() => onRemove(idx)}>삭제</button>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>
    </Layout>
  );
}

export default Community;
