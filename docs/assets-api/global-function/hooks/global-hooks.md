---
sidebar_position: 1
displayed_sidebar: 'apiDocSidebar'
title: 'hooks'
---

# hooks
**entec-react-assets** 프로젝트에서 공통으로 제공하는 **hook** 함수 목록입니다.

:::warning 공통 hook 함수 사용 시 주의사항
* Hook 함수도 일반 Hook의 규칙을 따라야 합니다 (함수 컴포넌트 최상위에서만 호출 등).
* 공통 훅을 호출할 때마다 내부 state는 독립적으로 생성됩니다.
* 같은 커스텀 훅을 여러 곳에서 사용해도 state는 공유되지 않습니다.
:::





## 전체 목록
---
| Hook Name                                        | 설명                        |
| :----------------------------------------------- | :------------------------- |
| **[useAPI](./global-hooks#useapi)**    | 업무 화면에서 **REST API**를 호출하고 결과값을 클라이언트 상태에 저장하는 함수. (상황에 따라 상태관리 라이브러리를 원하는 라이브러리로 사용하기 위한 공통 함수.)   |
| **[useInterval](./global-hooks#useinterval)**    | 안전한 인터벌 관리를 이한 hook. 타이머, 폴링 등에 사용.   |
| **[useLocalStorage](./global-hooks#uselocalstorage)**    | 로컬스토리지 관리. 사용자설정, 테마, 토큰 등의 저장 시 유용.   |
| **[useReduxAPI](./global-hooks#usereduxapi)**    | 업무 화면에서 **REST API**를 호출하고 결과값을 Redux State에 저장하는 함수.   |
| **[useWindowSize](./global-hooks#usewindowsize)**    | 윈도우 크기 추적. 반응형 디자인의 화면 크기 처리용 hook함수.   |






## useAPI
---
업무 화면에서 클라이언트 상태관리나, 서버상태관리를 **useAPI** 훅을 이용하여 쉽게 사용하기 위한 hook 함수입니다.


#### ◉ 사용 예제
#### ◉ 사용법
#### ◉ API 참조







## useInterval
---
안전한 인터벌 관리를 이한 hook. 타이머, 폴링 등에 사용.

#### ◉ 사용 예제
#### ◉ 사용법
#### ◉ API 참조







## useLocalStorage
---
로컬스토리지 관리. 사용자설정, 테마, 토큰 등의 저장 시 유용.

#### ◉ 사용 예제
#### ◉ 사용법
#### ◉ API 참조







## useReduxAPI
---
업무 화면 컴포넌트에서 **REST API**를 호출하고 결과값을 전역 Redux State에 저장하는 함수.

:::info <span class="admonition-title">Redux Toolkit</span>을 사용한 전역 상태 데이터 관리
* **REST API response** 데이터를 **Redux-Toolkit** 상태 관리 라이브러리를 사용하여 관리합니다.
* [Redux-Toolkit공식문서 : https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
* **REST API** 호출 및 결과 데이터 사용을 위한 **useReduxAPI** 훅을 사용하면 원하는 api url에서 비동기 데이터를 가져오고 클라이언트 전역 State에 저장합니다.
:::

#### ◉ 사용 예제
* [useReduxAPI 훅 예제 이동](http://example.com/entec/react_assets/ex/#/example/use-redux-api-ex)

#### ◉ 사용법
:::tip <span class="admonition-title">useReduxAPI</span> 훅 사용을 위한 사전 준비 사항
* **useReduxAPI** 훅을 사용하여 **REST API**를 호출 하려면 몇가지 먼저 설정해줘야할 사항이 있습니다.
  - **API url 등록** : 업무 도메인의 **api 폴더**에, 사용할 api **url**을 등록해야 합니다. api url은 업무 백앤드 개발자에게 전달 받아야합니다.
  - **action 등록** : **url**이 등록 되었다면, **store 폴더**에 해당 url에 해당하는 **action**을 등록합니다.
* **url**과 **action** 이 모두 등록된 후 화면에서 실제로 사용하는 방법 예제는 [REST API 호출하기](../../../assets-docs/dev/use-rest-api.md) 에서 순서대로 확인할 수 있습니다.
:::

##### 1. `api/url.ts`파일에 api url 등록하기
* `api/url.ts` 파일은 REST API의 url 을 모아놓은 파일입니다. 각 업무 도메인 내부에 **api 폴더**가 존재합니다.
* 사용해야할 API url이 https://app.domain.com/api/v1/search 라고 가정했을 때 도메인(https://app.domain.com)은 빼고 하위 url만 입력합니다.
* 도메인(https://app.domain.com)은 추후 공통 영역(공통 개발자)에서 따로 설정합니다.
* API 이름은 **대문자**로 입력합니다.
  ```ts
  // api/url.ts파일
  // TEST 라는 api를 사용한다고 가정.

  // url의 타입을 선언
  export type TUrl = (typeof url)[keyof typeof url];

  const url = {
    TEST: '/api/v1/search',
    // 필요한 api url을 이곳에 계속 등록할 수 있습니다.
  } as const;
  export default url;
  ```

##### 2. `store/index.ts`파일에 action 등록
* `store/index.ts`파일은 REST API의 action을 생성하는 파일입니다.
* `url.ts`파일에 생성한 TEST API를 사용하여 다음 코드와 같이 test Action을 만듭니다.
  ```ts
  import type { IActionObject, IRootState } from '@/app/types/store';
  import url from '@/domains/example/api/url';

  export interface IExampleStore<T = IRootState> {
    test: T;
  }

  // Example Action 객체 ==============================================
  // 생성할 Store state의 이름을 정하고, 값으로 actionType과 url을 입력한다.
  // API호출이 아닌 경우에는 url을 입력 하지 않아도 된다.
  // actionType은 '{업무도메인 store이름}/{action이름}' 조합으로 생성합니다.
  const exampleAction: IExampleStore<IActionObject> = {
    test: { actionType: 'exampleStore/test', url: url.TEST },
  } as const;

  export default exampleAction;
  ```
  :::info 설명
  * `import url from '@/domains/example/api/url';` 이전에 생성한 url을 가져옵니다.
  * `export interface IExampleStore<T = IRootState> {}` Action의 구조를 타입(typescript)으로 설정한 부분, 타입명은 각 업무에 맞게 자유롭게 작성합니다. **action**이 하나 생성될 때 똑같이 타입도 하나 생성합니다.
  * `const accountAction: IAccountStore<IActionObject> = {` action 타입(IExampleStore)을 `IExampleStore<IActionObject>` 형태로 연결합니다.
  * `test: { actionType: 'exampleStore/test', url: url.TEST },` test Action을 한 줄 생성합니다.
    * **action 객체**는 **actionType**과 **url**로 이루어져 있습니다.
    * **actionType**은 `/src/shared/store/app-store-redux.ts`파일에 연결한 **store명**과 위에 입력한 **action이름**을 "/"로 조합하여 생성합니다. ex) "exampleStore/test"
    * **url**은 `api/url.ts`파일에 생성한 url을 가져와서 추가합니다 ex) url.TEST
    * 만약 REST API를 사용하지 않고 그냥 **전역 상태 관리를 위한 데이터만 저장**, 사용할 경우에는 **url**을 입력하지 않습니다.
  * `export default exampleAction;` 생성된 example업무의 exampleAction을 export default 합니다.
  :::

##### 3. 등록된 action을 이용하여 useReduxAPI 훅 사용 예제
* 화면 컴포넌트에서 **useReduxAPI** 훅을 사용하기 위한 기본 코드는 다음과 같습니다.
  ```tsx showLineNumbers
  import type { IComponent } from '@/app/types/common';
  import { JSX } from 'react';

  // useReduxAPI 훅 가져오기
  // highlight-start
  import { useReduxAPI } from '@/app/hooks';
  // highlight-end

  interface ISamplePageProps {
    test?: string;
  }

  const SamplePage: IComponent<ISamplePageProps> = (): JSX.Element => {
    // useReduxAPI 함수 파라미터로 actionType값을 입력합니다.
    // highlight-start
    const { data, fetch, setData } = useReduxAPI('exampleStore/test');
    // highlight-end

    return (
      <>
        <div>New Sample Page!!</div>
      </>
    );
  };

  SamplePage.displayName = 'SamplePage';
  export default SamplePage;
  ```

#### ◉ API 참조
* **타입**
  ```typescript
  interface IUseReduxAPI {
    data: { value: any, status: 'Loading' | 'Complete' | 'Fail' | '' };
    fetch: (arg: object): Promise<any>;
    setData: (data: any): void;
  };

  function useReduxAPI(actionType: string): IUseReduxAPI;
  ```

* **매개변수** 

  | Parameter            | Type    | 설명                        |
  | :------------------- | :------ | :------------------------- |
  | actionType           | string  | `/src/shared/store/app-store-redux.ts`파일에 연결한 **store명**과 **action이름**을 "/"로 조합하여 생성<br /> ex) 'exampleStore/test'   |

* **반환값**  
**useReduxAPI** 훅을 사용하면 `data`, `fetch`, `setData`를 가지는 Object를 반환합니다. ex) `{ data, fetch, setData }`

  | return object value    | Type    | 설명                        |
  | :------------------- | :------ | :------------------------- |
  | data           | \{ value: any, status: 'Loading' \| 'Complete' \| 'Fail' \| '' \};  | `fetch()` 호출 후 response 데이터와 status값이 들어있는 object 데이터   |
  | fetch           | \(arg: object\): Promise\<any\>;  | REST API를 호출하는 함수.   |
  | setData           | \(data: any\): void;  | REST API와는 상관없이 전역 상태(state)에 값을 저장하는 함수.    |










## useWindowSize
---
윈도우 크기 추적. 반응형 디자인의 화면 크기 처리용 hook함수.

#### ◉ 사용 예제
#### ◉ 사용법
#### ◉ API 참조







