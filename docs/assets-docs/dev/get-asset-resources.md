---
sidebar_position: 2
displayed_sidebar: "assetsDocSidebar"
title: "asset 리소스 사용하기"
---

# asset 리소스 사용

개발 환경과 프로덕션 환경 모두에서 호환성을 보장하면서 프로젝트에서 정적 이미지를 처리하는 방법을 설명합니다.





## 개요
---

프로젝트에서 이미지를 사용하는 두 가지 주요 방법:

1.  **Public Assets**: `public` 폴더 사용하기.
2.  **Source Assets**: `src`에서 이미지 import하기.






## 1. Public Assets (전역 정적 파일)
---

`public` 디렉토리의 파일들은 개발 중에는 루트 경로 `/`에서 제공되고, 빌드 시에는 dist 디렉토리의 루트로 복사됩니다. 이 파일들은 번들러에 의해 처리되지 **않습니다** (해싱 없음, 최적화 없음).

**사용 사례:**

- 동적으로 참조되는 이미지 (예: API에서 받은 문자열 경로).
- `robots.txt`, `favicon.ico` 등.
- 번들링하고 싶지 않은 큰 파일들.

**사용 방법:**
특히 앱이 하위 디렉토리에 배포되는 경우 경로가 올바른지 확인하기 위해 항상 `import.meta.env.VITE_BASE_URL`을 사용하세요.

```tsx
// 예시: src/domains/example/MyComponent.tsx

export function MyComponent() {
  // VITE_BASE_URL이 base 경로를 처리합니다 (예: '/' 또는 '/app/')
  const imageUrl = `${import.meta.env.VITE_BASE_URL}images/my-image.png`;

  return (
    <img
      src={imageUrl}
      alt="My Image"
    />
  );
}
```

⚠️ _참고: 파일이 `public/images/my-image.png`에 존재하는지 확인하세요._






## 2. Source Assets (Import된 이미지)
---

`src` 내부의 이미지들 (예: `src/assets` 또는 컴포넌트와 함께 위치한 이미지)은 JavaScript 모듈처럼 import해야 합니다.

**사용 사례:**

- 컴포넌트에서 사용하는 아이콘, 일러스트, UI 요소들.
- 번들러에 의해 최적화되고 해싱되어야 하는 이미지들.

**사용 방법:**
이미지 파일을 직접 import하세요. 번들러가 해결된 URL을 반환합니다.

```tsx
// 예시: src/domains/example/MyComponent.tsx
import myImage from '@/assets/my-image.png'; // 전역 asset
// 또는
import localImage from './local-image.png'; // 함께 위치한 asset

export function MyComponent() {
  return (
    <div>
      <img
        src={myImage}
        alt="Global Asset"
      />
      <img
        src={localImage}
        alt="Local Asset"
      />
    </div>
  );
}
```

**장점:**

- **캐시 무효화(Cache Busting)**: 빌드 프로세스가 파일명에 해시를 추가하여 (예: `my-image.a1b2c3d4.png`), 배포 후 사용자가 항상 새 버전을 받도록 보장합니다.
- **최적화**: 작은 이미지들은 HTTP 요청을 줄이기 위해 base64 데이터 URI로 인라인 처리될 수 있습니다.
- **파일 누락 에러**: 파일명을 잘못 입력하면 빌드가 실패하여 즉시 오류를 알려줍니다.






## 권장사항
---

- 대부분의 컴포넌트 이미지에는 **방법 2 (Import 방식)를 선호합니다**. 더 나은 최적화와 안전성을 제공합니다.
- 동적 경로가 필요하거나 파일을 원본 그대로 유지해야 하는 특정 요구사항이 있는 경우에만 **방법 1 (Public)을 사용하세요**.
