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

### 와이어 프레임

- [각 페이지 와이어프레임](./References/wireframe.md)

### 테스트 배포 주소

- 일부 로직 미구현 부분은 하드코딩으로 되어 있음.
- 백엔들 개발자확인용
- [테스트 보러가기](https://perfectmatching.netlify.com/)

---

### URL 명세

#### 메인페이지

| URL                       | 페이지 이름                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| /home                     | [메인 페이지](https://perfectmatching.netlify.com/home)                             |
| /join                     | [가입 페이지](https://perfectmatching.netlify.com/join)                             |
| /projects                 | [프로젝트 리스트](https://perfectmatching.netlify.com/projects)                     |
| /project/:idx             | [프로젝트 상세페이지](https://perfectmatching.netlify.com/project/1)                |
| /project/:idx/application | [프로젝트 지원페이지](https://perfectmatching.netlify.com/projects/1/application)   |
| /new/project              | [프로젝트 개설페이지](https://perfectmatching.netlify.com/new/project)              |
| /my                       | [마이페이지](https://perfectmatching.netlify.com/my)                                |
| /my/edit                  | [정보 수정페이지](https://perfectmatching.netlify.com/my/edit)                      |
| /my/projects              | [나의 프로젝트 페이지](https://perfectmatching.netlify.com/my/projects)             |
| /my/projects/:idx         | [프로젝트 관리 페이지](https://perfectmatching.netlify.com/my/projects/1)           |
| /my/projects/:idx/edit    | [프로젝트 수정 페이지](https://perfectmatching.netlify.com/my/projects/1/edit)      |
| /my/projects/:idx/done    | [프로젝트 완료 폼 페이지](https://perfectmatching.netlify.com/my/projects/1/done)   |
| /new/done                 | [진행했던 프로젝트 추가 페이지](https://perfectmatching.netlify.com/new/done)       |
| /my/done/:idx/edit        | [진행했던 프로젝트 수정 페이지](https://perfectmatching.netlify.com/my/done/1/edit) |
| /profile/:idx             | [유저 상세페이지](https://perfectmatching.netlify.com/profile/1)                    |
