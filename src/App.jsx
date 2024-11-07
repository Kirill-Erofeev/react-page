import { useState, useRef } from 'react';
import './App.css';

export default function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <header>
        <h2>Habr</h2>
        <div className="flex-container">
          <h4>Новости</h4>
          <h4>Мессенджер</h4>
          <h4>Отзывы</h4>
          <h4>Контакты</h4>
          <h4>Настройки</h4>
        </div>
      </header>
      <center>
        <div className="timer">
          <h1>Прошедшее время: {secondsPassed.toFixed(3)}</h1>
          <button onClick={handleStart}>
            Start
          </button>
          <button onClick={handleStop}>
            Stop
          </button>
        </div>
          
        <div className="text">
          <h2>Аналитика</h2>
          <Panel
            title="Следящий софт: как показать сотруднику, что у вас цифровой концлагерь"
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
          >
            В начале 2023 года широко обсуждались возможные ограничения удалённой работы IT-специалистов из-за границы. Несмотря на то, что законодательство пока ещё не изменилось, некоторые законотворцы не теряют надежд, а российские IT-компании, такие, как Тинькофф, Билайн или VK, самостоятельно ввели ограничения для удалённой работы из других стран. Другие отечественные IT-компании тоже зря время не теряли и разработали софт для выявления удалёнщиков, уехавших из России. Существует множество программ для контроля сотрудников, и нашумевший этим летом «Стахановец» не единственный в своём роде. Мы провели опрос на Habr и в нашем Telegram-канале. Согласно результатам, 44% респондентов работали в IT-компаниях, которые используют приложения для слежки за своими сотрудниками.
          </Panel>
          <Panel
            title="Процедурная генерация уровней для двумерного платформера"
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
          >
            Привет, Хабр. Меня зовут Кирилл. Я увлекаюсь геймдевом в свободное от работы время. В этой статье я поделюсь опытом разработки процедурного генератора миров для своей инди-игры Unsigned Character. Игра представляет собой платформер с бесконечным процедурным миром, который достраивается по мере продвижения игрока. Я попытался реализовать процедурную генерацию, которая выдаёт интересный и разнообразный результат. И во многом это удалось.
          </Panel>
        </div>
        
        <nav>
        <button onClick={handleScrollToFirstCat}>
          Misha
        </button>
        <button onClick={handleScrollToSecondCat}>
          Max
        </button>
        <button onClick={handleScrollToThirdCat}>
          Kirill
        </button>
      </nav>
        <div className="misha">
          <ul>
            <li>
              <img
                src="https://avatars.mds.yandex.net/i?id=cbdd37b3501d5a86f394738b2eebafada03ae3fd-10595999-images-thumbs&n=13"
                alt="Tom"
                ref={firstCatRef}
              />
            </li>
            <li>
              <img
                src="https://dhs.dc.gov/sites/default/files/dc/sites/dhs/page_content/images/Benefits.jpg?itok=SxyheeKa"
                alt="Maru"
                ref={secondCatRef}
              />
            </li>
            <li>
              <img
                src="https://42mag.fr/wp-content/uploads/2023/01/homme-portant-des-lunettes-vr.jpg"
                alt="Jellylorum"
                ref={thirdCatRef}
              />
            </li>
          </ul>
        </div>
      </center>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}