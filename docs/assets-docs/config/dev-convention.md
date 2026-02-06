---
sidebar_position: 2
displayed_sidebar: "assetsDocSidebar"
title: "개발구조및규칙"
---

# 개발구조및규칙


## Folder Structure
---
:::tip DDD(<span class="admonition-title">Domain Driven Design</span>)
* Frontend영역 개발의 기본 폴더 구조는 <span class="text-blue-normal">DDD(Domain Driven Design)</span> 설계 방법론을 따릅니다.  
* **DDD**에서 말하는 Domain은 **비지니스 Domain**입니다. 즉 유사한 업무의 집합으로 구성하여, 애플리케이션의 모듈간의 의존성을 최소화하고, 비지니스 응집성을 최대화 합니다.
* 업무가 복잡한 대형 프로젝트에 적합한 구조입니다.
* `domains`폴더에 각각 업무(**domain**)별로 분리되어 영향도와 의존성이 적고 확장성이 용이해서 유지보수가 쉽습니다.
* 각 업무 담당 개발자는 자신이 맡은 업무 영역에서만 코딩 작업을 진행하며, 서로 다른 업무간에 충돌 가능성이 적어집니다.
* 부득이하게 자신의 업무 외 상위 업무나 공통 업무에 접근 해야하는 상황이라면 Frontend공통 개발자와 상의하여 **shared**를 통해 공유 하거나 app공통 객체를 통해 소통합니다.
:::



### entec-react-assets 폴더 구조
```sh
//...
@types
src
  ├─ App.tsx
  ├─ main.tsx
  ├─ vite-env.d.ts
  ├─ app
  │  ├─ api
  │  ├─ common
  │  ├─ components
  │  ├─ router
  │  ├─ store
  │  └─ types
  ├─ assets
  │  ├─ styles
  │  ├─ fonts
  │  └─ images
  ├─ domains // 모든 업무 파일들이 모여있는 폴더
  │  ├─ home
  │  │  ├─ api
  │  │  ├─ common
  │  │  ├─ components
  │  │  ├─ pages
  │  │  ├─ router
  │  │  ├─ store
  │  │  └─ types
  │  ├─ example
  │  │  ├─ api
  │  │  ├─ common
  │  │  ├─ components
  │  │  ├─ pages
  │  │  ├─ router
  │  │  ├─ store
  │  │  └─ types
  │  
  └─ shared // app 공통 영역과 연결 되어야 하고, 업무별로 수정이 이루어지는 코드를 작성.
.env.development
.env.production
//... // 기타 설정파일들
```
:::info 설명
* <span class="text-green-bold">app</span>폴더는 Frontend관련 전체 공통 관련 파일들이 있습니다. 공통개발자 이 외 업무개발자는 작업하지 않는 공간입니다.
* <span class="text-green-bold">assets</span>폴더는 모든 정적 파일들(font, image, css파일 등)을 모아놓은 폴더입니다.
* <span class="text-green-bold">domains</span>폴더에는 각 업무별 domain들이 있고, 그 하위에는 일률적으로 <span class="text-blue-normal">api, components, common, pages, router, store, types</span>폴더를 가질 수 있습니다. 각 개별 폴더는 업무 상황에 따라 생성하여 사용합니다. 사용하지 않는 폴더는 없어도 상관없습니다.  
  - <span class="text-blue-normal">api</span> : REST API URL과 request, response의 type을 정의합니다.
  - <span class="text-blue-normal">common</span> : 해당 업무에서 사용하는 javascript 공통함수나 공통적인 요소의 모듈을 모아놓은 폴더.
  - <span class="text-blue-normal">components</span> : 업무 화면에서 사용하는 컴포넌트들을 모아놓은 폴더.
  - <span class="text-blue-normal">pages</span> : 해당 도메인의 업무화면 *.tsx파일들.
  - <span class="text-blue-normal">router</span> : 업무화면의 라우터를 작성하는 폴더.
  - <span class="text-blue-normal">store</span> : api를 통하여 화면에 보여줄 데이타를 사용할 redux나 react-query관련(전역 데이터), 정리를 하는 폴더.
  - <span class="text-blue-normal">types</span> : 해당 업무에서 사용하는 모든 type을 정리하는 폴더.
:::







## Code Convention
---
많은 개발자들의 협업으로 인하여 개발자 개개인 마다 코딩 스타일이 달라서 유지보수가 어려워지고 코드의 품질이 떨어질 수 있습니다.
그래서 다음과 같은 <span class="text-blue-normal">코딩 스타일</span>을 정의하여 따르도록 합니다.


### Folder convention(<span class="text-blue-normal">폴더명</span>)
* 모든 폴더명은 **kebab-case**로 생성합니다.
* **camelCase**보다 가독성이 좋고 node_modules의 모든 프로젝트들도 **kebab-case**를 사용하므로 그대로 따르기로 합니다.
```sh
# 폴더명 적용 예시
src
  ├─ main.tsx
  ├─ App.tsx
  ├─ components
  │  ├─ common
  │  │  ├─ header-left  # 폴더명 kebab-case
  │  │  │  ├─ DefaultLeft.tsx
  │  │  ├─ header-right # 폴더명 kebab-case
  │  │  ├─ header-center # 폴더명 kebab-case
  │  ├─ ui
  │  │  ├─ dialog
  │  │  │  ├─ dialog-alert  # 폴더명 kebab-case
  │  │  │  ├─ dialog-confirm  # 폴더명 kebab-case
  │  │  │  ├─ dialog-prompt # 폴더명 kebab-case
  │  └─ ...
```



### File convention (<span class="text-blue-normal">파일명</span>)
* <span class="text-blue-normal">*.tsx</span>파일, 모든 컴포넌트 파일명은 **PascalCase**로 만듭니다.
* HTML 엘리먼트와의 차별성과 충돌 방지 차원.
* 되도록이면 **컴포넌트 명**은 두 단어가 합쳐진 **합성어를 사용**합니다.
```sh
# 컴포넌트 *.tsx 파일명 예시
TodoItem.tsx
```
* <span class="text-blue-normal">*.ts, *.js, *.scss, *.css</span> 등 일반 파일명은 **kebab-case**로 만듭니다.
```sh
todo-system.ts
todo-style.css
```


### TypeScript convention
* Frontend개발 시  **Typescript**를 사용하므로 관련 convention을 정의합니다.
* **Interface**명은 관례적으로 앞에 '**I**'를 붙이고 **PascalCase**로 만듭니다.
```js
// TypeScript의 Interface명
interface ITodoList {
  id: number;
  content: string;
  completed: boolean;
}
```
* **type, enum**명은 앞에 '**T, E**'을 붙이고 **PascalCase**로 만듭니다.
```js
// TypeScript의 Enum명
enum EDirection {
  Up = 1,
  Down,
  Left,
  Right,
}
// Type명
type TPerson = {
  name: string;
  age: number;
}
```


### Router convention
* **path**는 **kebab-case**로 만듭니다.
* **element, children**은 **PascalCase**로 만듭니다.
```js
{
  path: '/ui-button',
  element: <LayoutIndex />,
},
```
