import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // 에디터 스타일 적용
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // 다크모드 적용 플러그인
import colorSyntax from "@toast-ui/editor-plugin-color-syntax"; // 글자색 변경 플러그인
import "tui-color-picker/dist/tui-color-picker.css"; // 글자색 변경 플러그인
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css"; // 글자색 변경 플러그인
import Button from "@mui/material/Button"; // react mui Button import
import { useRef, useState } from "react";

function App() {
  const editorRef = useRef<any>(null);
  const [initalValue, setIntialValue] = useState("please enter text");
  const handleSave = () => {
    let markDownContent = editorRef.current.getInstance().getHTML();
    setIntialValue(markDownContent);
    console.log(markDownContent);
  };

  return (
    <>
      <Editor
        ref={editorRef}
        height="500px"
        previewStyle="vertical"
        theme="dark"
        initialValue={initalValue}
        plugins={[colorSyntax]}
      />
      <Button onClick={handleSave} sx={{ m: 1 }} variant="contained">
        저장하기
      </Button>
    </>
  );
}

export default App;
