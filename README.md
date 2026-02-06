# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# 프로젝트 폴더구조

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
