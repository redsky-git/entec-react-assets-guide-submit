---
sidebar_position: 1
displayed_sidebar: "taskDocSidebar"
title: "React-assets 작업과정정리"
---

# React-assets 작업과정정리

- ENTEC react-assets 프로젝트 셋팅과정을 정리합니다.
  - 모든 앱은 **Vite**로 프로젝트를 생성하여 기본구조를 셋팅합니다.








## React 프로젝트 생성하기(프로젝트 최초 생성)
---

:::info Vite(빌드도구)를 이용한 프로젝트 생성

- 빠른 개발 서버, 빠른 빌드, 최소화된 설정 등을 제공하는 **Vite**를 사용하여 프로젝트 환경을 구성합니다.
- [Vite공식문서: https://ko.vitejs.dev/](https://ko.vitejs.dev/)
  :::
- terminal 창을 열고 원하는 폴더 위치로 이동하여 최초 프로젝트를 생성합니다.
- `npm create vite@latest` 명령어를 실행하여 첫 Vite 프로젝트 생성을 진행합니다.

```sh
npm create vite@latest
```

- [1] "Ok to proceed?"는 npm이 패키지 설치를 진행해도 되는지 확인하는 질문입니다.
  - 한 번 더 확인하는 차원이라 생각하시면 됩니다.
  - `y` 또는 `yes`를 입력하여 Vite 설치를 진행합니다.  
    ![프로젝트 진행여부 재확인](../assets/config-task/first-config01.png)

- [2] Project name 셋팅.
  - 프로젝트 이름은 **entec-react-assets**로 정하고 다음 과정을 진행합니다.  
    ![프로젝트 이름설정](../assets/config-task/first-config02.png)

- [3] frontend 프레임워크 선택
  - 프론트앤드 프레임워크는 **React**를 선택하고 다음 과정을 진행합니다.  
    ![프론트앤드 프레임워크 선택](../assets/config-task/first-config03.png)

- [4] variant는 **Typescript + SWC**를 선택
  - **TypeScript**는 Javascript의 상위 집합이라고 할 수 있으며, **JavaScript**에 정적 타입 시스템을 추가한 프로그래밍 언어입니다.
  - **SWC**는 **Rust**로 작성된 초고속 **JavaScript/TypeScript** 컴파일러입니다. 기존에 많이 쓰는 **Babel**보다 훨씬 빠르므로 대규모 프로젝트에서 컴파일 시간이 크게 단축됩니다.  
    ![프론트앤드 variant 선택](../assets/config-task/first-config04.png)

- [5] rolldown-vite의 사용여부는 **No**를 선택
  - **Vite** 프로젝트에서 **번들러** 선택지로 `Rollup`과 `Rolldown`을 선택할 수 있습니다. 기본은 `Rollup`이며 상황에 따라 `Rolldown`을 선택할 수 있습니다.
  - **Rolldown**은 Rust로 작성된 고성능 번들러입니다. 기존의 Rollup보다 훨씬 빠릅니다. **rolldown-vite**는 Rolldown과 Vite를 함께 사용하겠다는 의미입니다.
  - **rolldown-vite**를 선택하면 빌드 속도가 더 빠르고, 만약 **No**를 선택하면 더 안정적이고 검증된 Rollup을 사용하게 됩니다. Rolldown은 상대적으로 최신 기술이므로, 안정성을 원하면 **No**를 선택하여 기본값인 Rollup을 선택합니다.  
    ![프론트앤드 rolldown선택여부](../assets/config-task/first-config05.png)

- [6] Vite설치 완료 후 로컬 서버를 바로 띄울건지 선택
  - **Yes**를 선택하면 해당 프로젝트의 모든 의존성 라이브러리가 설치되며, 프로젝트 로컬 서버가 띄워집니다.
  - 만약 직접 로컬 서버를 띄우려면 먼저 해당 프로젝트 루트에서 `npm install` 명령어를 실행하여 의존성 라이브러리를 먼저 설치 해야합니다.  
    ![vite설치와 함께 프로젝트를 실행할지 여부](../assets/config-task/first-config06.png)

- 최종 완료된 프로젝트가 띄워지면 다음과 같이 로컬 서버가 띄워집니다. `npm run dev`명령어를 실행하여 띄울 수도 있습니다.  
  ![vite프로젝트 완료 후 브라우저확인](../assets/config-task/first-config07.png)
  ![vite프로젝트 완료 후 브라우저확인](../assets/config-task/first-config08.png)









## VSCode(Visual Studio Code) 설정
---

### settings.json 셋팅 (VSCode 설정)

<span class="react-color">Frontend (React)</span> 개발을 위해 **VSCode**를 활용할 것입니다. 따라서 개발자의 통일된 코드 작성을 위하여 **VSCode**의 환경설정을 **settings.json**파일에 적용합니다.

#### settings.json 설정

> - **settings.json 파일열기** : f1 ⤍ settings 입력 ⤍ Preferences: Open Workspace Settings (JSON) 클릭.  
>   위와같이 열면 프로젝트 루트에 **.vscode** 디렉토리가 생성되고 **settings.json**파일이 생성됩니다.
> - **settings(설정)가 적용되는 우선 순위** : .vscode settings.json ⤇ settings.json ⤇ defaultSetting.json(<span class="text-color-red">수정하지 않는 파일.</span>)  
>   <span class="text-color-red">defaultSetting.json은 모든 설정내용이 다 들어있는 기본 설정 파일입니다. 수정은 하지 않는 파일입니다.</span>
> - **.vscode** 디렉토리에 생성된 **settings.json** 파일에 아래 내용 입력합니다.

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.insertSpaces": false,
  "editor.renderWhitespace": "all",
  "editor.comments.insertSpace": false,
  "files.associations": {
    "*.json": "jsonc"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.workingDirectories": [{ "mode": "auto" }],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.useFlatConfig": true
}
```

:star: 이렇게 `settings.json` 파일로 **VSCode** 설정을 하면 **메뉴(File ⤍ Preferences ⤍ Settings)** 로 설정한것 보다 우선순위가 높게 적용됩니다.

:::info 설명
- **"editor.formatOnSave"** : 파일 저장 시 자동으로 코드 서식을 정리합니다.
- **"editor.codeActionsOnSave" ⤍ "source.fixAll.eslint"** : 파일 저장 시 ESLint가 감지한 모든 문제를 자동으로 수정합니다.
- **"editor.tabSize"** : 탭 크기를 몇칸으로 설정할지 지정합니다.
- **"editor.detectIndentation"** : VSCode가 파일의 들여쓰기를 자동으로 감지하는 기능을 활용할지 여부 입니다.
- **"editor.insertSpaces"** : 탭 키를 누를 때 공백 대신 탭 문자를 삽입합니다.
- **"editor.renderWhitespace"** : 공백 문자를 시각적으로 표시합니다.
- **"editor.comments.insertSpace"** : 주석 기호(//, /\*) 뒤에 자동으로 공백을 삽입할지 여부 입니다.
- **"files.associations" ⤍ "\*.json": "jsonc"** : .json 파일을 jsonc(주석이 있는 JSON) 형식으로 인식하도록 설정합니다.
- **"eslint.validate": \["javascript", "javascriptreact", "typescript", "typescriptreact"\]** : ESLint가 TypeScript, React, JavaScript 파일을 검사하도록 설정합니다.
- **"eslint.workingDirectories"** : \[\{"mode":"auto"\}\] : ESLint 작업 디렉토리를 자동으로 감지하도록 설정합니다.
- **"editor.defaultFormatter": "esbenp.prettier-vscode"** : VSCode의 기본 코드 포맷터로 Prettier를 사용합니다.
- **"eslint.useFlatConfig"** : ESLint의 설정방식이 `v8.21.0` 부터 **Flat Config**를 지원하면서, 구성 형식을 **Flat Config**으로 할지 여부 설정.
:::

:::tip <span class="admonition-title">ESLint</span> 설정방식에 대하여

- **ESLint**가 `v8.21.0` 부터 새로운 구성방식인 플랫 구성(Flat Config) 시스템을 지원합니다. 기존 방식은 `.eslintrc` 파일을 이용한 구성 방식이었습니다.
- `v9.0.0`부터는 기본 구성방식이 플랫 구성(Flat Config) 시스템으로 바뀌게 됩니다.
:::









## ESLint 설정
---

**ESLint**는 **JavaScript/TypeScript** 코드에서 **문법적 오류, 스타일 규칙, 버그 가능성** 등을 찾아내는 **정적 코드 분석 도구** 입니다. 코드의 품질 유지와 스타일의 일관성을 위하여 사용됩니다.

:::tip <span class="admonition-title">ESLint</span> 설정방식의 변경!
- **ESLint v8.21.0**부터 소개된 새로운 구성 형식으로 `eslint.config.js` 파일을 사용할 수 있습니다.
- 기존에는 **.eslintrc** 파일을 사용하는 형식이었습니다.
:::

:::tip <span class="admonition-title">ESLint 플랫 구성(Flat Config)</span> 시스템에 대하여
- **ESLint**의 플랫 구성(Flat Config) 시스템은 ESLint v8.21.0부터 도입되고 v9.0.0에서 완전히 기본이 될 새로운 구성 방식입니다. 이 시스템은 기존의 구성 방식에 비해 여러 가지 개선점을 제공합니다.

- **플랫 구성의 주요 특징**

  1. **표준 JavaScript 모듈 사용**

  - ESM(ECMAScript 모듈) 형식을 사용
  - eslint.config.js 파일에 배열로 구성 내보내기
  - 객체 확장 대신 배열 연결 사용

  2. **간소화된 구성 구조**

  - 계층적인 특수 키워드(extends, overrides 등) 제거
  - 플러그인 직접 가져오기(import)
  - 단순한 배열 기반 병합 메커니즘

  3. **명확한 파일 매칭**

  - 글로브 패턴 기반 파일 매칭(files, ignores 속성)
  - 기본 무시 패턴의 명시적 제어 가능

  4. **향상된 성능**

  - 더 효율적인 구성 로딩 및 캐싱
  - 더 빠른 규칙 확인

- **주요 변경 사항**

  1. **플러그인 처리 방식**  
     기존: 문자열로 참조 (plugins: ['react'])  
     플랫: 직접 가져와서 사용 (import reactPlugin from 'eslint-plugin-react')
  2. **확장 방식**  
     기존: extends 속성으로 상속  
     플랫: 배열에 직접 추가 또는 스프레드 연산자 사용
  3. **파일별 설정**  
     기존: overrides 배열 안에 설정  
     플랫: 배열의 각 항목에 files 속성 추가
  4. **언어 옵션**  
      기존: parserOptions, env 등으로 설정  
      플랫: languageOptions 객체 내에서 통합 관리  
:::

- **package.json** 파일에 lint `scripts`를 추가합니다.

  ```json
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
  ```

  -> `npm run lint`을 실행하면 현재 eslint로 체크한 오류 결과를 표시해줍니다.

- **ESLint**의 추가 **rules**를 각 프로젝트 상황에 맞게 설정해봅니다.  
  ⤍ 여러가지 추가 **rules**는 [ESLint Rules Reference](https://eslint.org/docs/latest/rules/) 와 [typescript-eslint rules](https://typescript-eslint.io/rules/) 에서 참조할 수 있습니다.  
  ⤍ 현재 프로젝트에서는 아래와 같이 `eslint.config.js`설정 파일에 **rules**옵션에 추가 하였습니다.

  ```javascript
  //.....
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "jsx-quotes": ["error", "prefer-double"],
    semi: ['error', 'always'],
  },
  //.....
  ```

  :::info 설명
  - "@typescript-eslint/no-explicit-any" ⤍ "off" : typescript의 any 타입을 허용합니다.
  - "jsx-quotes" ⤍ \["error", "prefer-double"\] : jsx코드에는 double quotes를 사용하게 적용합니다.
  - semi ⤍ \['error', 'always'\] : 소스코드 문장 마지막에 항상 세미콜론을 사용합니다.
  :::

- `react/*`로 시작하는 **React Rules**를 적용하기 위해서는 `eslint-plugin-react` 패키지를 설치해야합니다.

  ```sh
  npm i -D eslint-plugin-react
  ```

  ⤍ `eslint.config.js`에 불러와 플러그인으로 세팅합니다.

  ```JavaScript
  import react from "eslint-plugin-react";

  // ...
  plugins: {
    react: react,
  },
  // ...
  ```

  ⤍ 이제 **React Rules**를 적용합니다.

  ```javascript
  //.....
  rules: {
    "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
  },
  //.....
  ```

  :::info 설명
  - "react/jsx-max-props-per-line" ⤍ \["error", \{ maximum: 1 \}\] : jsx 엘리먼트의 속성이 하나일 때만 한 줄로 표시합니다.
  :::










## Prettier 설정
---
:::tip <span class="admonition-title">Prettier</span> 참조 내용
* **Prettier**는 작성된 JS 코드의 스타일을 중점적으로 수정해주는 코드 스타일링 도구입니다.
* **ESLint**와 차이점
  * **ESLint**는 Formatting, Code Quality등 코드의 전반적인 에러 방지 및 수준을 높여주는 역할을 하고, **Prettier**는 코드의 스타일링에 특화 되어 있어, Formatter 역할 만 합니다.
* 사용이유
  * 개발자 마다 다른 코드 스타일을 가지고 협업을 진행할 경우, 코드의 일관성이 떨어지고 유지보수 측면에도 좋지 않은 결과를 초래하므로 작성된 코드의 일관성을 지정하기 위함입니다.
:::
:::warning 주의할 점
* **ESLint**에도 Formatting 기능이 있기 때문에 ESLint와 함께 사용하게 되면 상호 간의 충돌이 발생하는 경우가 있습니다. 그래서 **Prettier**와 함께 **ESLint**를 사용할 때는 ESLint의 Formatting Rule을 전부 Disabled 처리 합니다.
* 아래 두가지 라이브러리를 설치하여 적용 해 줍니다.
  * `eslint-config-prettier`는 Prettier와 충돌 가능성이 있는 옵션을 전부 Off 해줍니다.
  * `eslint-plugin-prettier`는 eslintrc의 plugins에 포함하고 rules에 prettier/prettier를 설정할 수 있습니다.(<span class="text-color-red">현재 프로젝트에서는 사용하지 않습니다.</span>)
:::

* 필요한 패키지를 설치합니다.
```sh
npm install -D prettier eslint-config-prettier
```
* **Prettier** 설정 파일인 `.prettierrc`, `.prettierrc.cjs`, `prettier.config.js` 파일과 같이 여러가지 형식의 설정파일을 생성하여 사용할 수 있습니다.
* 파일을 프로젝트 루트에 생성하고 다음과 같이 **설정** 및 **rules** 옵션을 작성합니다.

:::info <span class="admonition-title">.prettierrc 설정 파일 관련</span> [<span class="admonition-title">https://prettier.io/docs/configuration</span>](https://prettier.io/docs/configuration)
* .prettierrc 파일은 `.prettierrc`, `.prettierrc.cjs`, `prettier.config.js` 등과 같이 여러가지 파일 형식으로 생성할 수 있습니다.
  * `.prettierrc` : 순수 **json** 형태로 단순하게 값을 설정하는 방식.
  * `.prettierrc.cjs` : JavaScript 형식으로 디테일하게 설정하기위한 방식.
  * `prettier.config.js` : JavaScript 형식으로 설정할 수 있는 방식.
* **prettier** 의 다양한 옵션은 [https://prettier.io/docs/options](https://prettier.io/docs/options) 에서 참조합니다.
:::
```javascript
const prettierOptions = {
  /**
   * @template: printWidth: <int>
   * @description: 코드 한줄의 개수
   * 추천) 가독성을 위해 80자 이상을 사용하지 않는 것이 좋습니다.
   * 추천) 코드 스타일 가이드에서 최대 줄 길이 규칙은 종종 100 또는 120으로 설정됩니다.
   */
  printWidth: 120,

  /**
   * @template: tabWidth: <int>
   * @description: 들여쓰기 너비 수(탭을 사용할 경우 몇칸을 띄워줄지)
   */
  tabWidth: 2,

  /**
   * @template: useTabs: <bool>
   * @description: 탭 사용 여부 (미사용 시 스페이스바로 간격조정을 해야함.)
   */
  useTabs: true,

  /**
   * @template: semi: <bool>
   * @description: 명령문의 끝에 세미콜론(;)을 인쇄합니다.
   * true: (;)를 추가함
   * false: (;)를 지움
   */
  semi: true,

  /**
   * @template: singleQuote: <bool>
   * @description: 큰따옴표("") 대신 작은따옴표('')를 사용여부
   * true: 홀따옴표로 사용
   * false: 큰따옴표로 사용
   */
  singleQuote: true,

  /**
   * @template: jsxSingleQuote: <bool>
   * @description: JSX내에서 큰따옴표("") 대신 작은따옴표('')를 사용여부
   * true: 홀따옴표로 사용
   * false: 큰따옴표로 사용
   */
  jsxSingleQuote: false,

  /**
   * @template: trailingComma: "<es5|none|all>"
   * @description: 객체나 배열을 작성하여 데이터를 넣을때, 마지막에 후행쉼표를 넣을지 여부
   * es5: 후행쉼표 제외
   * none: 후행쉼표 없음
   * all: 후행쉼표 포함
   */
  trailingComma: "all",

  /**
   * @template: jsxBracketSameLine: <bool> [Deprecated](대신 bracketSameLine 사용)
   * @description: ">" 다음 줄에 혼자 있는 대신 여러 줄 JSX 요소를 마지막 줄 끝에 넣습니다
   * true: 줄넘김하지 않음
   * false: 줄넘김을 수행
   */
  //jsxBracketSameLine: false,
  bracketSameLine: false,

  /**
   * @template: bracketSpacing: <bool>
   * @description: 개체 리터럴에서 대괄호 사이의 공백을 넣을지 여부
   * true: 공백을 넣음 { foo: bar }
   * false: 공백을 제외 {foo: bar}
   */
  bracketSpacing: true,
  /**
   * @template: singleAttributePerLine: <bool>
   * @description: HTML, Vue 및 JSX에서 한 줄에 하나의 속성을 적용할지 여
   * true: 속성이 한개 이상일경우 multi속성 적용
   * false: 적용하지 않음
   */
  singleAttributePerLine: true,
  endOfLine: "auto",
};

export default prettierOptions;
```

* **VSCode** 설정 추가
  * 기본 포멧터를 Prettier로 하고, 저장 시 포멧을 적용한다는 의미 입니다.
  * 이미 적용 되어 있다면 건너뜁니다.
  ```javascript
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
  ```
  * 이와같이 작성하면 파일 수정 후 저장 시 Prettier형식에 맞게 포멧팅이 자동 변경되어 저장 됩니다.  
만약 저장 시 포맷 자동 적용을 빼고 싶다면 `editor.formatOnSave: false` 로 적용하면 됩니다. 대신 파일 저장 시 자동 포멧팅이 되지 않으므로 직접 일일이 수정 해주어야 합니다.  
이 부분은 프로젝트 상황에 따라 자동 저장을 할것인지, 아닌지 정하여 설정합니다.

* **package.json**에 Prettier 스트립트를 추가합니다.
  * 이미 적용 되어 있다면 건너뜁니다.
  * `package.json`파일의 `scripts` 섹션에 다음과 같이 추가 합니다.
  * Prettier 포멧을 체크하고, 적용하는 스크립트 입니다.
  ```javascript
  "format": "prettier --check ./src",
  "format:fix": "prettier --write ./src"
  ```

* `.prettierignore`(선택사항) 파일을 프로젝트 루트 위치에 생성합니다.
  * `.prettierignore` 파일은 포맷팅을 적용하지 않을 파일이나 디렉토리를 지정하는 파일입니다. 상황에 따라 내용을 추가 할 수 있습니다.
  ```sh
  node_modules
  dist
  build
  ```
  * 참조 문서 : [https://prettier.io/docs/ignore#ignoring-files-prettierignore](https://prettier.io/docs/ignore#ignoring-files-prettierignore)

* **Prettier** 포멧 체크 해보기
  ```sh
  npm run format
  ```
  * 실행하면 아래와 같이 Pretter 설정 포멧에 어긋나는 파일 리스트를 확인할 수 있습니다.
  ```sh
  Checking formatting...
  [warn] jsxBracketSameLine is deprecated.
  [warn] src/App.css
  [warn] src/App.tsx
  [warn] src/index.css
  [warn] src/main.tsx
  [warn] Code style issues found in 4 files. Run Prettier with --write to fix. 
  ```
* **Prettier** 포멧 적용하기
  ```sh
  npm run format:fix
  ```
  * 실행하면 아래와 같이 Prettier 설정 포멧에 맞게 적용 되었다는 리스트가 나옵니다.
  ```sh
  [warn] jsxBracketSameLine is deprecated.
  src/App.css 29ms
  src/App.tsx 51ms
  src/index.css 6ms
  src/main.tsx 4ms
  src/vite-env.d.ts 3ms (unchanged)
  ```
:::danger ESLint와 Prettier 설정의 충돌
* **ESLint**와 **Prettier**는 모두 포멧팅 룰이 있어서 서로 겹치는 설정 값이 있습니다.  이것을 각각 옵션을 따로 설정 하다 보면 충돌이 발생하는 경우가 있습니다. 이럴때는 같은 기능을 하는 옵션을 서로 같은 결과가 나오게 수정해 주어야 합니다.
* 예를 들어 ESLint의 `semi`값은 `'never'`이고, Prettier의 `semi`값은 `true`라고 설정하면 서로 충돌이 발생합니다.
:::








## VSCode에 `ESLint`,`Prettier` Extensions 설치
---
* VSCode 코드편집기 자체에서 ESLint, Prettier를 사용하고 적용할 수 있는 EXtensions가 있습니다. 이것을 설치하면 VSCode에서 파일 수정 후 저장 시 코드 포멧팅이 적용 됩니다.
* VSCode Extensions 설치 방법은 [여기(아직링크없음)](./first-set-proj.md)를 참조합니다.
  * **ESLint**
  * **Prettier - Code formatter**
  ![VSCode Extensions 설치(ESLint, Prettier) 예제 이미지](../assets/config-task/first-config09.png)
* 이미 **VSCode**의 `settings.json`파일에 아래 내용이 적용 되어 있기 때문에, 파일 수정, 저장 시 자동으로 ESLint, Pretter 가 작동 됩니다.
```javascript
 "editor.formatOnSave" : true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.useFlatConfig": true
```










## @types폴더 사용법 (Typescript 관련)
---
* 프로젝트 루트에 **@types**폴더를 생성한다. 폴더 내부에는 기본 **index.d.ts**파일을 생성합니다.
* **index.d.ts**파일의 용도는 전체 **App**의 전역 type을 설정하는 용도의 파일입니다. 나중에 전역 컴포넌트, 전역함수를 만들고 타입을 설정할때 **index.d.ts**파일에 전역 타입 설정을 하게 됩니다.
* 그 외 써드파티 라이브러리 중 **@types/...** 가 제공되지 않는 경우에 **@types**폴더 안에 해당 라이브러리 ***.d.ts**파일을 선언해주는 용도로 사용하면 됩니다.
* 만약 **prismjs** 라이브러리의 ***.d.ts**파일을 선언한다고 가정했을 때 아래와 같이 생성하여 만들어 줍니다.
```sh
// 'prismjs'라는 라이브러리 types를 선언한 예시
...
@types
  ├─ index.d.ts
  ├─ prismjs.d.ts  // prismjs.d.ts파일을 생성한다.
...
```
* prismjs.d.ts파일의 소스 예제
```ts
declare module 'prismjs';
```
:::tip <span class="admonition-title">tsconfig.json</span> 설정
* tsconfig.json에는 **typeRoots**를 아래와 같이 설정합니다.
```js
"compilerOptions": {
  "typeRoots": ["./node_modules/@types", "./@types"]
},
"include": ["src", "@types/index.d.ts"], // 컴파일 할 파일 경로
```
* 내가 만든 `@types` 타입 루트를 인식하기 위해 tsconfig.json의 **typeRoots**옵션에 설정해줘야 합니다.
* './node_modules/@types'는 원래 기본 타입루트이며, 내가 설정한 새로운 타입루트가 설정되면 명시적으로 함께 넣어줘야 합니다.
:::








## cross-env 사용 (필요한 경우에만 사용)
---
:::tip <span class="admonition-title">cross-env</span> 란?
* cross-env 모듈은 프로젝트 참여자 각각이 MacOS, Windows, Linux 등 다양한 OS 마다 환경변수를 설정하는 방법이 다르기 때문에 이것에 대한 대책을 마련한 모듈입니다.  
그래서 **corss-env** 패키지를 사용하면 동적으로 `process.env`(환경 변수)를 변경할 수 있으며 모든 운영체제에서 동일한 방법으로 환경 변수를 변경할 수 있게 됩니다.
:::
* **OS**상관없이 동일하게 커맨드 명령어로 환경설정을 할 수 있습니다.(필요한 경우에만 사용)
* `npm install -D cross-env` 설치 후 아래와 같이 사용.
```js
cross-env NODE_ENV=production ... ...
```
* package.json `scripts`에 작성 예시
```js
{
  "scripts": {
    ...
    "serve": "cross-env NODE_ENV=development node server",
    ...
  }
}
```










## src 폴더 '@'별칭 만들기
---
* 코드 작성 시 좀 더 편의를 제공하기 위해 **src**폴더의 위치를 **'@'** 별칭으로 만들어 사용할 수 있습니다.
* **tsconfig.json** **'@'** 별칭 세팅 (TypeScript용 별칭)
```json
// tsconfig.json 파일의 baseUrl옵션과 paths옵션을 설정 한다.
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
* **vite.config.ts** **@** 별칭 세팅 (번들링 시 사용되는 별칭)
	- **fileURLToPath**와 **URL**을 사용하기 위해 먼저 "@types/node"를 설치 하고 아래 코드를 작성합니다.
	```sh
	npm i -D @types/node
	``` 
```javascript
import { fileURLToPath, URL } from 'node:url';

// vite.config.ts 파일의 alias옵션을 설정한다.
export default definConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
});
```










## Vite 프로젝트 폴더구조
---

- 최초 폴더구조는 다음과 같습니다.

```sh
entec-react-assets
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts <-- 최근 Vite 설치 시에는 생성되지 않음.
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

:::tip

- `node_modules` 폴더는 `npm install` 명령어를 통해서 의존성 라이브러리가 설치 되었을 때 생성됩니다.
- 최근 Vite 버전에서는 `vite-env.d.ts`파일이 기본으로 생성되지 않는 이유는 **TypeScript**의 타입 정의 방식이 개선되고 표준화되었기 때문입니다.
  - 최근변경된방식 : `tsconfig.app.json`의 `compilerOptions.types`에 **vite/client** 값이 설정됩니다.
  - 필요하다면 수동으로 프로젝트 루트에 `vite-env.d.ts`파일을 생성하고 다음내용을 추가하면 됩니다.
    ```typescript
    /// <reference types="vite/client" />
    ```
:::


### 애플리케이션(entec-react-assets) 폴더구조 만들기
* 최초 프로젝트 기본 폴더 구조를 생성하기 위해 필요없는 폴더, 파일들을 삭제하고 가장 기본이 되는 다음과 같은 폴더 구조로 레이아웃을 만듭니다. **src** 폴더 구조만 설명합니다.
* **router**, **redux** 등 기본으로 필요한 라이브러리는 아래쪽 기본 코드 진행 하면서 설치 합니다.
### 기본 폴더 구조
```sh
//... 기타 기본 프로젝트 파일들
src
  ├─ App.tsx
  ├─ main.tsx
  ├─ app
  │  ├─ api
  │  ├─ common
  │  ├─ components
  │  ├─ hooks
  │  ├─ router
  │  ├─ store
  │  └─ types
  ├─ assets
  │  ├─ fonts
  │  ├─ images
  │  └─ styles
  │     └─ app.css // APP 루트 스타일 파일
  ├─ shared // 각 업무 domain 개발로 인해 유동적으로 공통관련 코드를 수정해야하는 경우 shared 폴더에서 작성합니다.
  │  ├─ components
  │  ├─ constants
  │  └─ router
  ├─ domains
  │  ├─ main  // main 업무 도메인
  │  │  ├─ api
  │  │  ├─ components
  │  │  ├─ pages
  │  │  ├─ router
  │  │  ├─ store
  │  ├─ example  // example 업무 도메인
  │  │  ├─ api
  │  │  ├─ components
  │  │  ├─ pages
  │  │  ├─ router
  │  │  ├─ store
  │  ├─ // 각 업무 상황에 따라 domain을 추가/삭제 할 수 있음.
//... 기타 기본 프로젝트 파일들
```
* <span class="text-green-bold">app</span>폴더는 Frontend 애플리케이션 전체 공통 관련 파일들이 있습니다. 공통개발자 이 외 업무개발자는 작업하지 않는 공간입니다.
* <span class="text-green-bold">assets</span>폴더는 모든 정적 파일들(font, image, css파일 등)을 모아놓은 폴더입니다.
* <span class="text-green-bold">shared</span>폴더는 각 업무 domain 개발 시 유동적으로 공통관련 코드를 수정해야하는 경우 shared 폴더에서 작성합니다.
* <span class="text-green-bold">domains</span>폴더에는 각 업무별 domain들이 있고, 그 하위에는 일률적으로 <span class="text-blue-normal">api, components, pages, router, store, types</span>폴더를 가질 수 있습니다. 각 개별 폴더는 업무 상황에 따라 생성하여 사용합니다. 사용하지 않는 폴더는 없어도 상관없습니다.  
  - <span class="text-blue-normal">api</span> : REST API URL과 request, response의 type을 정의합니다.
  - <span class="text-blue-normal">components</span> : 업무 화면에서 사용하는 컴포넌트들을 모아놓은 폴더.
  - <span class="text-blue-normal">pages</span> : 해당 도메인의 업무화면 *.tsx파일들.
  - <span class="text-blue-normal">router</span> : 업무화면의 라우터를 작성하는 폴더.
  - <span class="text-blue-normal">store</span> : api를 통하여 화면에 보여줄 데이타를 사용할 swr관련(전역 데이터), 정리를 하는 폴더.
  - <span class="text-blue-normal">types</span> : 해당 업무에서 사용하는 모든 type을 정리하는 폴더.







## Sass 설치
---
* **entec-react-assets** 프로젝트에서 `.scss` `.sass`파일을 사용하기 위한 **Sass** 컴파일을 위한 npm패키지를 설치합니다.
  ```sh
  npm i -D sass
  ```
  :::tip <span class="admonition-title">sass 와 sass-embedded</span> 패키지 설명
  * sass
    - Node.js 바인딩으로 작동하는 순수 JavaScript 구현
    - 설치 시 바이너리를 다운로드하지 않음
    - 더 가볍고 설치가 빠름
    - 호환성이 좋고 가장 널리 사용됨
    - 번들 크기가 다소 클 수 있음
  * sass-embedded
    - Dart Sass의 최적화된 버전
    - C++ 바인딩으로 컴파일 성능이 더 빠름
    - 초기 설치 시 플랫폼별 바이너리 다운로드 (용량이 더 큼)
    - 성능이 더 좋지만 설치가 느릴 수 있음
    - 더 최신 기술 스택
  * 선택 기준
    - 성능이 중요한 큰 프로젝트: sass-embedded 추천
    - 빠른 설치, 간단한 프로젝트: sass 추천
    - 대부분의 일반적인 프로젝트: sass면 충분함
  :::
* **entec-react-assets** 프로젝트에서는 `sass`를 설치할 것입니다. 설치도 빠르고 성능 차이도 실무에서 체감하기 어렵기 때문입니다.
* **Sass**는 프로젝트 상황에 따라 사용할 수도 있고 사용하지 않아도 상관없습니다. 아래쪽에 추가된 **TailwindCSS + shadcn/ui** 사용으로 `.scss` `.sass`이 아닌. `.css`를 우선 사용할 것입니다.







## Router 설정
---
* **React Router**는 React 애플리케이션에서 페이지 네비게이션 처리와 URL 관리를 처리하는 라이브러리입니다.
* [React Router 공식문서: https://reactrouter.com/home](https://reactrouter.com/home)
:::info <span class="admonition-title">Router 모드</span>에 대하여
* React Router는 3가지 모드를 지원합니다.
  * **Declarative(선언적) 모드** : React Router의 가장 기본적이고 전통적인 방식입니다. `<Routes>`와 `<Route>` 컴포넌트를 사용하며, **UI구조**에 라우팅 로직이 직접 포함됩니다.
    ```tsx
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    ```
  * **Data(데이터 중심) 모드** : 라우트 설정을 배열이나 객체 형태로 따로 정의하고, 데이터 로딩을 분리합니다. `loader`와 `action`함수를 사용하여 라우트 전환에 필요한 데이터를 미리 로드할 수 있습니다.
    ```ts
    // route를 따로 배열로 선언
    const routes = [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const data = await fetchHomeData();
          return data;
        }
      }
    ];
    ```
  * **Framework 모드** : React Router를 Next.js나 Remix 같은 풀 스택 프레임워크처럼 사용하는 방식입니다.
:::

### 설치
* **entec-react-assets** 에서는 라우터를 **Data 모드** 형식으로 **RouterProvider** 와 **createBrowserRouter, createHashRouter**를 사용할 것입니다.
  ```sh
  npm i react-router
  ```
  :::info
  * **RouterProvider** : 라우터 구성을 애플리케이션에 제공하는 가장 최상위 컴포넌트 입니다.  
   최상위 루트(보통 index.ts 또는 main.ts)에 RouterProvider를 추가하고, router객체를 등록합니다.
  * **createBrowserRouter** : 기본 웹 프로젝트 라우터 객체 형식.
    * 동적인 페이지에 적합
    * 검색엔진 최적화(SEO)
  * **createHashRouter** : 전체 URL이 아닌 #(hash)를 사용하는 라우터 객체 형식.
    * 정적인 페이지에 적합(개인 포트폴리오)
    * 검색 엔진으로 읽지 못함(#값 때문에 서버가 읽지 못하고 서버가 페이지의 유무를 모름)
  :::

  :::tip <span class="admonition-title">TypeScript를 사용하는 React Component 선언 시 React.FC</span> 타입을 사용하지 않는 이유
  * **불필요한 children 속성**: FC 타입은 자동으로 children 속성을 포함합니다. 그러나 모든 컴포넌트가 children을 필요로 하는 것은 아니며, 명시적으로 children을 사용할 때만 타입에 포함하는 것이 더 명확합니다.
  * **제네릭 지원 문제**: 이전 버전의 React TypeScript 정의에서는 FC와 제네릭을 함께 사용할 때 문제가 있었습니다.
  * **명시적인 반환 타입**: 일반 함수 선언으로 컴포넌트를 정의하면 JSX.Element 또는 React.ReactNode 등의 반환 타입을 명시적으로 지정할 수 있어 타입 안전성이 향상됩니다.
  * **React 팀의 권장사항**: React 팀은 더 이상 FC 타입 사용을 권장하지 않으며, 일반 함수 선언을 선호합니다.
  :::

### `App.tsx`에 Router연결(RouterProvider를 이용하여 router 연결)
  ```tsx
  import type { IComponent } from '@/app/types/common';
  import { RouterProvider } from 'react-router';
  import router from '@/app/router';

  const App: IComponent = () => {
    return (
      <>
        {/* TODO: 추가 html 요소가 있으면 추가. */}
        <RouterProvider router={router} />
      </>
    );
  };

  export default App;
  ```
* 위와같이 설정한 `RouterProvider`에 연결할 **루트 라우터(@/app/router)** 가 현재는 없으므로 **@/app/router**에 라우터 생성합니다.
`src/app/router/index.ts` 파일을 생성하고 다음과 같이 코드를 작성합니다.
```javascript
// 프로젝트 상황에 맞게 createBrowserRouter, createHashRouter 두 개중에 하나를 사용합니다.
import { createAppRouter } from './app.common.router.ts';
import routes from '@/shared/router';

const router = createAppRouter(routes, {
	basename: import.meta.env.VITE_ROUTER_BASENAME,
});

export * from './app.common.router.ts';
export default router;
```
:::info 설명
* `import { createAppRouter } from './app.common.router.ts';`
  - `app.common.router.ts`파일을 생성하고 다음 코드를 작성합니다. 프로젝트 상황에 맞게 createBrowserRouter, createHashRouter 두 개중에 하나를 사용하여 라우터를 생성하는 `createAppRouter`함수입니다.
  ```js
  import { createBrowserRouter, type DOMRouterOpts } from 'react-router';
  import type { TNovaRoute } from '@/app/types/router';

  export const createAppRouter = (routes: TNovaRoute[], opts?: DOMRouterOpts) => {
    return createBrowserRouter(routes, opts);
  };
  ```
* **createBrowserRouter**로 라우터를 설정했다면 나중에 Frontend 빌드 후 웹서버에 배포하는 위치의 **웹서버 루트 설정**이 되어 있어야 합니다. 그렇지 않다면  **createHashRouter**를 사용하여 라우터 설정을 해야합니다.
* `const router = createAppRouter(routes ...`
  - `createAppRouter` 함수를 이용하여 전체 라우터를 생성합니다.
:::
* 전체 라우터 배열인 선언된 `src/shared/router/index.tsx`파일이 없으므로 생성합니다.
  :::tip <span class="admonition-title">*.tsx 파일과 *.ts</span> 확장자 파일의 차이
  * 파일 내부 소스 코드에 **JSX** 코드가 있는지 여부에 따라서 확장자를 다르게 선언 해줍니다.
  :::
  - `src/shared/router/index.tsx`파일을 **shared** 폴더 아래 따로 생성하는 이유는 **domain(업무)** 이 유동적으로 계속 생성/추가 되면서 라우터 또한 계속 새롭게 생성/추가 되므로, 수정이 자주 일어날 소지가 많기 때문에 **shared** 폴더 내부의 router폴더에 생성 하였습니다.
  ```tsx
  import type { TNovaRoute } from '@/app/types/router';

  // main layout 가져오기 -----------
  import LayoutMainIndex from '@/shared/components/layout/LayoutMainIndex';

  // main router 가져오기 ----------------
  import MainRouter from '@/domains/main/router';
  //import ExampleRouter from '@/domains/example/router';

  const routes: TNovaRoute[] = [
    {
      path: '/',
      element: <LayoutMainIndex />,
      children: MainRouter,
    },
    // 추 후 추가될 domain(업무) 라우터를 같은 방법으로 추가합니다.
    //{
    //	path: 'example',
    //	element: <LayoutMainIndex />,
    //	children: ExampleRouter,
    //},
    {
      path: '*',
      element: (
        <LayoutMainIndex
          message="죄송합니다. 현재 시스템에 일시적인 문제가 발생했습니다."
          subMessage="잠시 후 다시 접속해주세요.
                    <br />
                    문제가 지속되면 아래 고객센터로 문의해주세요."
        />
      ),
    },
  ];

  export default routes;
  ```
* `LayoutMainIndex.tsx` 레이아웃 컴포넌트 파일의 생성.
  * 애플리케이션 전체 레이아웃을 설정하는 `src/app/shared/components/layout/LayoutMainIndex.tsx` 파일이 없으므로 생성해줍니다.
  * 레이아웃의 구조는 각 프로젝트에 맞게 퍼블리싱 하여 작업 합니다.
  ```tsx
  import type { IComponent } from '@/app/types/common';
  import loadable from '@loadable/component';
  import { Outlet } from 'react-router';
  import { useEffect, useState } from 'react';

  const Header = loadable(() => import('@/shared/components/layout/LayoutHeader'));
  const Footer = loadable(() => import('@/shared/components/layout/LayoutFooter'));
  const Lnb = loadable(() => import('@/shared/components/layout/LayoutLnb'));
  const ErrorComponents = loadable(() => import('@/shared/components/layout/LayoutError'));

  interface ILayoutMainIndexProps {
    message?: string;
    subMessage?: string;
    isHeader?: boolean;
    isSidebar?: boolean;
    isLNB?: boolean;
    isFooter?: boolean;
  }

  const LayoutMainIndex: IComponent<ILayoutMainIndexProps> = ({
    message = '',
    subMessage = '',
    isHeader = true,
    //isSidebar = false,
    isLNB = false,
    isFooter = true,
  }) => {
    //const navigate = useNavigate();
    //const location = useLocation();

    const [showHeader, setShowHeader] = useState<boolean>(isHeader);
    //const [showSidebar, setShowSidebar] = useState<boolean>(isSidebar);
    const [showLNB, setShowLNB] = useState<boolean>(isLNB);
    const [showFooter, setShowFooter] = useState<boolean>(isFooter);

    useEffect(() => {
      setShowHeader(true);
      //setShowSidebar(false);
      setShowLNB(true);
      setShowFooter(true);
    }, []);

    return (
      <>
        <div className={`default-layout`}>
          {showHeader ? <Header /> : null}
          {showLNB ? <Lnb /> : null}
          <div className={`sidebar-left`} />
          <div className={`page-wrapper basic`}>
            {/* Start Page Content ============= */}
            {message ? (
              <ErrorComponents
                message={message}
                subMessage={subMessage}
              />
            ) : (
              <Outlet />
            )}
            {/* End Page Content ================ */}
          </div>
          {showFooter ? <Footer /> : null}
        </div>
      </>
    );
  };

  LayoutMainIndex.displayName = 'LayoutMainIndex';
  export default LayoutMainIndex;
  ```
* **MainRouter**를 연결하기 위하여 **Main업무**의 라우터를 `src/domains/main/router/index.tsx`에 파일 생성 후 Main업무의 라우터를 설정합니다.
  * **path**속성에 **MainIndex**업무의 라우터를 작성합니다.(최초 홈 화면이므로 '/'로 설정).
  * 진입 페이지인 **MainIndex.tsx**페이지 컴포넌트를 `src/domains/main/pages`폴더에 만들고 **element**속성에 바인딩 합니다.
  ```tsx
  import type { TNovaRoute } from '@/app/types/router';
  import loadable from '@loadable/component';

  // main 도메인 업무 페이지 가져오기
  const MainIndex = loadable(() => import('@/domains/main/pages/MainIndex'));

  const routes: TNovaRoute[] = [
    {
      path: '/',
      element: <MainIndex />,
      name: 'MainIndex',
    },
  ];

  export default routes;
  ```
  ```tsx
  // src/domains/main/pages/MainIndex.tsx 
  import type { IComponent } from '@/app/types/common';

  interface IMainIndexProps {
    test?: string;
  }

  const MainIndex: IComponent<IMainIndexProps> = () => {
    return (
      <>
        <div className={`default-layout`}>MainIndex</div>
      </>
    );
  };

  MainIndex.displayName = 'MainIndex';
  export default MainIndex;
  ```








## TailwindCSS + shadcn/ui 설정
---
* TailwindCSS 란?
  * Utility-first CSS 프레임워크로, 미리 정의된 작은 CSS 클래스들을 조합하여 스타일링합니다.
* Utility-first CSS 프레임워크 의 의미는?
  * Utility-first CSS 프레임워크는 미리 정의된 작은 단위의 유틸리티 클래스들을 조합하여 스타일을 구성하는 방식을 의미합니다.
  * 핵심 개념
    * 전통적인 CSS 프레임워크(예: Bootstrap)는 .btn, .card, .navbar 같은 완성된 컴포넌트 클래스를 제공합니다. 반면 Utility-first 방식(예: Tailwind CSS)은 m-4 (margin), text-lg (폰트 크기), bg-blue-500 (배경색) 같은 원자적 단위의 클래스를 제공합니다.
:::info <span class="admonition-title">TailwindCSS + Shadcn/ui</span>의 장점 요약
| 장점        | 설명                        |
| :--------- | :------------------------- |
| 개발 속도    | 빠른 UI 개발, 코드 작성 최소화   |
| 번들 크기    | 사용하지 않는 스타일 자동 제거     | 
| 유지보수     | 컴포넌트 코드 직접 소유, 쉬운 수정 | 
| 접근성      | Radix UI 기반으로 WCAG 표준 준수 | 
| TypeScript | 완벽한 타입 안정성             | 
| 커뮤니티     | 빠르게 성장하는 커뮤니티         | 
| 자유도      | 완전한 커스터마이징 가능         |
:::

### Vite환경에서 TailwindCSS 설치
* TailwindCSS 설치
  ```sh
  npm install tailwindcss @tailwindcss/vite
  ```
* `vite.config.ts` 설정파일에 TailwindCSS 플러그인 연결
  ```ts
  import { defineConfig } from 'vite';
  import tailwindcss from '@tailwindcss/vite';

  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  });
  ```
* **entec-react-assets** 프로젝트 메인 css파일에서 **TailwindCSS**를 **import** 합니다.
  * 프로젝트 루트 파일인 `main.tsx`파일에 연결된 `src/assets/styles/app.css` 파일에 `@import 'tailwindcss';` 추가합니다.


### shadcn 세팅
* `tsconfig.json` `tsconfig.app.json` 두개의 설정파일에 **path**를 정의합니다.
  ```js
  {
    "compilerOptions": {
      // ...
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "./src/*"
        ]
      }
      // ...
    }
  }
  ```
* `vite.config.ts` 파일에 alias path 경로 설정
  ```js
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import tailwindcss from '@tailwindcss/vite';
  import { fileURLToPath, URL } from 'node:url';

  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  });
  ```
* **shadcn** 설치
  ```sh
  npx shadcn@latest init

  # 각자의 취향것 고릅니다.
  Which color would you like to use as base color? › Neutral

  # 이 과정에 src/assets/styles/app.css 의 설정값이 변경되었을 것입니다.
  ```
* **shadcn** 설치 후 생성된 `components.json` 설정파일을 수정합니다.
  - **shadcn** 컴포넌트를 관리 할 폴더를 재정의 해서 원하는 폴더 위치로 세팅합니다. **entec-react-assets** 프로젝트에서는 다음과 같은 위치로 **shadcn** 경로를 변경하였습니다.
    ```js
    {
      "$schema": "https://ui.shadcn.com/schema.json",
      "style": "new-york",
      // highlight-start
      "rsc": false, // react server component로 사용 가능하게 생성할지 여부 (현재 프로젝트는 CSR이므로 false로 변경)
      // highlight-end
      "tsx": true,
      "tailwind": {
        "config": "",
        // highlight-start
        "css": "src/assets/styles/app.css",
        // highlight-end
        "baseColor": "neutral",
        "cssVariables": true,
        "prefix": ""
      },
      "iconLibrary": "lucide",
      // highlight-start
      "aliases": {
        "components": "@/app/components/shadcn",
        "utils": "@/app/components/shadcn/lib/utils",
        "ui": "@/app/components/shadcn/ui",
        "lib": "@/app/components/shadcn/lib",
        "hooks": "@/app/components/shadcn/hooks"
      },
      // highlight-end
      "registries": {}
    }
    ```

* **shadcn** 사용
  * **button** 컴포넌트를 사용한다고 했을 때 다음 명령어를 실행합니다.
    ```sh
    npx shadcn@latest add button
    ```
  * 실행하면 `src/app/components/shadcn/ui/button.tsx` 파일이 생성됩니다.
  * 생성된 **button.tsx**파일을 랩핑한 버튼 컴포넌트를 만들고 한 곳에서 관리하기 위하여 다음과 같이 따로 랩핑 Button 컴포넌트를 생성합니다.
    - `src/app/components/ui`폴더 아래에 **shadcn** 컴포넌트를 랩핑한 모든 컴포넌트를 생성하여 관리합니다.
  * 화면에서 사용할 때는 다음과 같이 사용합니다.
    ```tsx
    // highlight-start
    import { Button } from '@/app/components/ui';
    // highlight-end

    interface ISamplePageProps {
      test?: string;
    }

    const SamplePage: IComponent<ISamplePageProps> = () => {
      return (
        <>
          // highlight-start
          <Button>Click me!</Button>
          // highlight-end
        </>
      );
    };

    SamplePage.displayName = 'SamplePage';
    export default SamplePage;
    ```
    ![Shadcn 버튼 컴포넌트 화면 예제 이미지](../assets/config-task/first-config10.png)
