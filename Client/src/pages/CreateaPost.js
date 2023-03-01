import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <form
    // onSubmit={createNewPost}
    >
      <input
        type="title"
        placeholder={"Title"}
        // value={title}
        // onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        // value={summary}
        // onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="file"
        //   onChange={(ev) => setFiles(ev.target.files)}
      />
      <ReactQuill />
      <button style={{ marginTop: "5px" }}>Create post</button>
    </form>
  );
}
