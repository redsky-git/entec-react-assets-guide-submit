# ENTEC React Assets Guide

ENTEC React Assets 프레임워크의 개발 가이드 문서 사이트입니다.  
이 웹사이트는 [Docusaurus](https://docusaurus.io/)를 사용하여 구축되었습니다.

## 📋 사전 요구사항

프로젝트를 실행하기 전에 다음 항목들이 설치되어 있어야 합니다:

- **Node.js**: 20.0 이상 (권장: LTS 버전)
- **npm** 또는 **yarn**: 패키지 관리자

### Node.js 버전 확인

```bash
node --version
```

버전이 20.0 미만이거나 설치되지 않은 경우, [Node.js 공식 웹사이트](https://nodejs.org/)에서 다운로드하여 설치하세요.

## 🚀 프로젝트 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone <repository-url>
cd entec-react-assets-guide-submit
```

### 2. 의존성 패키지 설치

npm을 사용하는 경우:

```bash
npm install
```

### 3. 로컬 개발 서버 실행

npm을 사용하는 경우:

```bash
npm run start
```


이 명령어는 로컬 개발 서버를 시작하고 자동으로 브라우저를 엽니다.  
기본적으로 `http://localhost:3000`에서 실행됩니다.  
대부분의 변경사항은 서버를 재시작하지 않아도 실시간으로 반영됩니다.

## 📦 빌드

프로덕션용 정적 파일을 생성하려면:

npm을 사용하는 경우:

```bash
npm run build
```


이 명령어는 `build` 디렉토리에 정적 콘텐츠를 생성합니다.  
생성된 파일은 정적 호스팅 서비스를 통해 배포할 수 있습니다.

### 빌드 결과 로컬 확인

빌드된 결과물을 로컬에서 확인하려면:

npm을 사용하는 경우:

```bash
npm run serve
```



## 🔧 추가 명령어

- **캐시 정리**: `npm run clear` 또는 `yarn clear`
- **타입 체크**: `npm run typecheck` 또는 `yarn typecheck`



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
