import Layout from "../common/Layout";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Community() {
  const input = useRef(null);
  const textarea = useRef(null);
  const inputEdit = useRef(null);
  const textareaEdit = useRef(null);

  const getLocalData = () => {
    const data = localStorage.getItem("post");
    const dummyPosts = [
      { title: "Hello5", content: "Here comes description in detail." },
      { title: "Hello4", content: "Here comes description in detail." },
      { title: "Hello3", content: "Here comes description in detail." },
      { title: "Hello2", content: "Here comes description in detail." },
      { title: "Hello1", content: "Here comes description in detail." },
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

  //글 삭제 함수
  const deletePost = (index) => {
    // console.log(index);
    setPosts(Posts.filter((_, idx) => index !== idx));
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
          <button onClick={resetPost}>초기화</button>
          <button onClick={createPost}>등록하기</button>
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
                    <button onClick={() => disableUpdate(idx)}>CANCEL</button>
                    <button onClick={() => updatePost(idx)}>SAVE</button>
                  </div>
                </>
              ) : (
                //출력
                <>
                  <div className="date">
                    <em>2022</em>
                    <span>06.12</span>
                  </div>
                  <div className="txt">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>

                  <div className="btnSet">
                    <button onClick={() => enableUpdate(idx)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                      수정
                    </button>
                    <button onClick={() => deletePost(idx)}>
                      <FontAwesomeIcon icon={faX} />
                      삭제
                    </button>
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
