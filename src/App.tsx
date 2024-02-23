import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

function App() {
  return (
    <>
      <Editor
        height="500px"
        previewStyle="vertical"
        theme="dark"
        initialValue="글 작성"
      />
    </>
  );
}

export default App;
