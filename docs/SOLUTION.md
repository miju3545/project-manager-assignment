## 0. 설정

- `vite`로 프로젝트를 시작합니다.
- `eslint, prettier`로 code formatting을 적용합니다.
- `lint-staged, husky`로 git commit 전 `eslint`와 `prettier`을 자동으로 실행합니다.

## 1. 스타일

- `material-ui`로 아이콘 및 버튼, 카드 ui를 작성합니다.
- 그 외의 스타일은 `emotion`로 작성합니다.

## 2. routes

- 전체 layout 안에 nested-routes 되는 형태로 구현하여 `/pages` 폴더 내의 파일로 전체 라우터를 확인할 수 있도록 합니다.

## 3. 상태 관리

- `redux`로 모든 리스트 및 카드 정보롤 전역 객체로 관리합니다.
- `localStorage`로 페이지 새로 고침해도 리스트가 그대로 유지되도록 합니다.

## 4. components

-`lists` > `list` > `cards`의 계층을 가집니다.

- 리스트와 카드 생성은 내용만 다른 동일한 ui를 가지고 있기 때문에 각 타입(리스트 또는 카드)에 대한 정보는 `/data/actionButtonData.ts`에 상수로 분리합니다.
- 처음엔 버튼 형태이지만 액션이 가해지면(`onClick`) `form` 형태으로 변경됩니다.

## 5. form

- 여러 input이 같이 있을 때 랜더링 문제를 해결하기 위해서 비제어 방식인 ref를 사용하고자 했지만 `forwardRef`로 감싸야 한다는 불편함이 있어 `react-hook-form`를 사용합니다.
- `submit`의 방법은 버튼 클릭 외에도 `enter`도 포함합니다.

## 6. drag & drop

- 리스트 및 카드의 위치를 바꾸기 위해서 `react-beautiful-dnd`를 활용하였고, 바뀐 위치(인덱스)를 찾아 action dispatch를 통해 전역 객체 내 리스트 및 카드의 인덱스를 변경합니다.

## 7. 삭제 모달

- 리스트 및 카드를 삭제할 때는 바로 삭제를 진행하기 보다 안내 모달을 먼저 띄운 후 해당 액션을 가할 수 있도록 합니다.
