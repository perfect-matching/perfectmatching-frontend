# perfectmatching-frontend

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 진행상황

### 와이어 프레임

- [각 페이지 와이어프레임](./References/wireframe.md)

### 테스트 배포 주소

- 일부 로직 미구현 부분은 하드코딩으로 되어 있음.
- 백엔들 개발자확인용
- [테스트 보러가기](https://perfectmatching.netlify.com/)

## Git 컨벤션

### 공통사항

- 프론트, 백엔드 각각 레포지토리를 따로 만들어 개발을 진행합니다.
  - 협업 flow 방식은 프론트, 백엔드 레포지토리를 따로 만들어 협업하는 사람들 끼리 원하는 방식을 정해 사용합니다.
- 프론트, 백엔드가 서로 의견 나눌 사항이 있으면 레포지토리 issue에 남깁니다. ex) 이슈, 제안, 어떠한 사항이든

### 프론트엔드 레포지토리

- 공용 레포지토리를 fork하여 fork한 레포지토리에서 개발을 진행합니다.
- 개발할 내용을 issue에 등록을 합니다.
- issue 등록한 내용을 기준으로 개발을 진행하고 진행중이라면 project 탭에서 해당 이슈를 Doing 컬럼에 넣어 어떤 작업을 하고 있는 중인지 알려주어야 합니다.
- 개발이 끝난 이슈는 close 하며, project탭의 카드도 done으로 이동시킵니다.
- `모든 개발`은 `dev` 브랜치에서 개발을 진행합니다.
- `배포를 할 때`는 dev브랜치의 내용을 `master` 브랜치에 병합합니다. master 브랜치를 배포용 브랜치로 사용을 합니다.
- commit 방식은 `동사: 대상파일, 내용` 형태로 작성합니다.

  ```bash
  git commit -m "Update: HomeView, add login button"
  git commit -m "Add: LoginModal.vue"
  ```
