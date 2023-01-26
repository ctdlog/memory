## Memory 

#### 사람들은 저마다의 기억과 기록을 남기며 살아갑니다.

### ✔️ Tasks
- [x] 햄버거 아이콘 및 로고를 포함한 헤더를 만든다.
- [x] Google Map API를 사용하여 헤더 아래에 지도로 화면 전체를 채운다.
- [x] ~~지도를 특정 좌표를 클릭하면 마커가 표시된다.~~
- [x] Firebase의 firestore DB를 연결한다.
- [x] 표시된 마커의 좌표를 Firestore DB에 저장한다.
- [ ] 지도의 특정 좌표를 클릭하면 기록 생성 모달이 나타난다.
- [ ] 기록 생성 모달에는 제목, 설명, 사진 및 영상 등을 기록할 수 있다.
- [ ] 저장하기 버튼을 누르면 해당 위치의 마커가 저장된다.
- [ ] 저장된 마커를 클릭하면 기록했던 내용을 다시 볼 수 있으며, 수정이 가능하다.
- [ ] 지도의 확대/축소에 따라 주변의 마커가 하나로 합쳐지거나, 나눠서 보여진다.

---

### 👥 Made By

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/73215539?v=4" width="100px;" alt="최형욱"/>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/ctdlog">
        <div>ctdlog</div>
      </a>
    </td>
  </tr>
</table>

---

### 🔍 사용한 패키지와 버전
```
"react": "^18.2.0",
"react-dom": "^18.2.0",
"next": "12.3.1",
"@emotion/react": "^11.10.4",
"firebase": "9.13.0",
"graphql": "^16.6.0"
"typescript": "^4.9.4",
"axios": "^1.1.3",
```

### ⚙️ 프로젝트 실행 방법
```
1. git clone
2. yarn
3. yarn install
4. yarn dev
```

### 🔒 env
```
# Firebase firestore
NEXT_PUBLIC_API_KEY=...
NEXT_PUBLIC_AUTH_DOMAIN=...
NEXT_PUBLIC_PROJECT_ID=...
NEXT_PUBLIC_STORAGE_BUCKET=...
NEXT_PUBLIC_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_APP_ID=...
NEXT_PUBLIC_MEASUREMENT_ID=...

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
```
