# TS React로 Weather Web 클론 코딩

<img src="https://img.shields.io/badge/typescript-3776AB.svg?&style=for-the-badge&logo=Typescript&logoColor=white" /> <img src="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" />
<br />

Weather Open API Info : [Open Weather Map](https://openweathermap.org/)

```typescript
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

원래 코드는 JS React로 구성된 코드 였으나 Typescript에 익숙하게 사용 하기 위해서 TS React로 변경하여 코딩 하였습니다.

- JS에서는 데이터 타입을 정하지 않아도 자동으로 실행 되었지만, TS에서는 타입을 지정하지 않으면 에러 발생
- 특히 Object의 데이터 타입을 지정할때는 interface라는 특수한 객체를 사용해야 한다는 것을 알게 되었음

## 디렉터리 구성

- Style : 각각의 Component의 Style을 설정한 파일 (Component-styled로 만듦)
- components : App.tsx에서 불러 올 도시 컴포넌트와 날씨 컴포넌트의 코드 파일

## 어떻게 굴러가느냐??

### API 데이터 불러오기

- API URL
  ```typescript
  api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
  ```
- City Component의 input태그에서 event.target.value의 값을 city라는 변수에 저장하여 API URL의 city에 대입
- API_KEY는 .env로 구성하고 API URL의 API_KEY에 대입
  ```typescript
  const API_KEY = process.env.REACT_APP_API_KEY;
  ```
- axios 라이브러리를 사용하여 API데이터 로드
  ```typescript
  const fetchWeather = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  ```
