# Toast UI Editor

- 공식사이트 : <https://nhn.github.io/tui.editor/latest/>
  React 에서 Toast UI 에디터를 사용하기 위한 방법은 다음과 같다.

## 사용방법

1. 설치

```
npm install @toast-ui/react-editor

yarn add @toast-ui/react-editor
```

2. import 및 Editor 컴포넌트 활용

```
import React from "react";

import Box from "@mui/material/Box";

// Toast UI Editor
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const App = () => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <h1>Toast UI Editor</h1>
        <Editor
          height="400px"
          placeholder="Please Enter Text."
        />
      </Box>
    </div>
  );
};

export default App;
```

참고로 위 코드에서 import 문 중 editor css가 있는데 이를 import 하지 않으면.. 상당히 이상한 모양의 편집기가 된다..

3. 옵션 종류엔 여러개가 있지만 자주 사용되는 것들은 아래와 같다.

- previewStyle (마크다운 - vertical or tab 옵션)

- initialEditType (처음 편집 타입 설정 wysiwyg or markdown)

- hideModeSwitch (하단 바 숨김 여부)

- toolbarItems (툴바 옵션)

- dark theme (다크 테마 적용)

- useCommandShortcut (키보드 입력 컨트롤 방지)

- usageStatistics (통계 수집)

4. 다크모드 적용

- 다크모드를 적용하려면 아래 css를 import 해야 한다.

```
// Dark Theme 적용
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
```

5. 글자색 변경 플러그인 추가

- 먼저, color-syntax 플러그인을 설치한다.

  ```
  npm install @toast-ui/editor-plugin-color-syntax
  ```

- 플러그인을 사용하려면 아래의 css와 colorsyntax를 import 하여야 한다.

```
// Color Syntax Plugin
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
```

- Editor에 plugins에 colorSyntax를 추가한다. 이때, 배열로 넣어야하는 것을 주의!
  ```
  plugins={[colorSyntax]}
  ```

6. 에디터 값 저장

- initalValue 옵션 : Editor에 initalValue옵션을 넣어주면 해당 내용으로 에디터가 실행된다.

- useRef로 콘텐츠 내용 가져오기 : useRef를 이용하여 현재 에디터의 내용을 HTML 또는 Markdown으로 가져올 수 있다.

```
const editorRef = useRef(null);
```

- 에디터의 ref에 useRef 로 만든 editorRef 추가

```
  <Editor
  ref={editorRef}
  initialValue={initContents}
```

- 아래 함수를 추가하면 HTML과 Markdown을 얻을 수 있다.

```
  const handleSave = () => {
  let markDownContent = editorRef.current.getInstance().getMarkdown();
  let htmlContent = editorRef.current.getInstance().getHTML();

  console.log(markDownContent);
  console.log("================================================");
  console.log(htmlContent);
};
```

# React Material UI

- 공식사이트 : <https://mui.com/>

mui는 컴포넌트를 만들 때 UI적으로 깔끔한 디자인이 입혀진 것들을 가져가 쓰고 싶을 경우 사용한다.

## 사용방법

```
//npm 이용시
npm install @mui/material @emotion/react @emotion/styled

//yarn이용시
yarn add @mui/material @emotion/react @emotion/styled
```

설치 후엔 사이트에가서 원하는 컴포넌트 UI를 고른다음 import 코드를 복사해서 사용한다.

### 예시

```
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
```
