// Import React
import React from "react";

import styled, { keyframes } from 'styled-components';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Layout,
  Fit,
  Fill,
  Image,
  CodePane,
  Code
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#FFF",
  secondary: "#000000",
  tertiary: "#FFF",
  quarternary: "#FFFFFF"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


const keyFrameExampleOne = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }`;

const keyFrameCloud = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0);
  }`;

const jdunX = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate3d(1, 0, 0, 360deg)
  }`;

const jdunY = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate3d(0, 1, 0, 360deg)
  }`;

const jdunZ = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg)
  }`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide", "fade"]} transitionDuration={500} theme={theme} progress={"pacman"} contentHeight={'100%'} contentWidth={'100%'}>
        {/* обложка1 */}
        <Slide
          transition={["fade"]}
          bgImage="https://1.downloader.disk.yandex.ru/preview/fa82b20704d0f31d30416c5a4c19b29c48bb5a503467d67af73aa2d7517d0c2c/inf/qjtMMnUZb8D4fgYO-r2Nl70HrTVYj2dsf-y2ulwU51vQ-Ct2UynBSSU4jSTNd6M4mp9R6vYjg8Rje6F5dFl7AQ%3D%3D?uid=0&filename=coding_school_0092.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
        >
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', backgroundImage: 'linear-gradient(135deg, rgba(13,71,161,1) 0%,rgba(91,151,211,0) 80%,rgba(125,185,232,0) 100%)' }}>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              color: 'fff',
              textAlign: 'left' ,
              padding: '25px',
              border: '1px solid #fff'
            }}>
              <Text textColor="#fff" caps textSize={'80px'}>
                <span style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>
                  Фронтенд-ликбез <span style={{ animation: `${keyFrameExampleOne} 1.5s infinite ease`, color: '#fff', fontWeight: 'bold', fontSize: '100px' }}>|</span>
                </span>
              </Text>
              <Text textColor="#fff" textSize={'50px'}>
                Людмила Мжачих, Mail.Ru
              </Text>
            </div>
          </div>
        </Slide>

        {/* moscowcss */}
        <Slide
          bgColor="#fff"
          transition={["slide", "fade"]}
          bgImage={"./assets/images/moscowcss.png"}
          bgSize={"contain"}
          bgPosition={"top center"}
          bgRepeat={"no-repeat"}
        >
        </Slide>

        {/* курсы */}
        <Slide
          bgColor="#fff"
          transition={["slide", "fade"]}
        >
          <Image
            height={700}
            src="./assets/myPhotos/meTeaching.jpg"
          />
        </Slide>

        {/* спойлер и мем */}
        <Slide>
          <Heading size={2} textColor={"#1A237E"} caps>Спойлер!</Heading>
        </Slide>
        <Slide>
          <Image
            height={500}
            src="./assets/images/mem.jpg"
          />
        </Slide>

        {/* MCS */}
        <Slide
          bgColor="#fff"
          transition={["slide", "fade"]}
        >
          <Image
            src="./assets/images/moscodingLogo.jpg"
          />
        </Slide>

        {/* coding girls */}
        <Slide
          bgColor="#fff"
          transition={["slide", "fade"]}
        >
          <Heading size={3} textColor="#1A237E" caps>Coding girls</Heading>
          <Image
            height={500}
            src="./assets/images/codingGirlsLogo.jpg"
          />
        </Slide>



        {/* chapter cover */}
        <Slide
          transition={["fade"]}
          bgImage="https://1.downloader.disk.yandex.ru/preview/b463982bed610882937c50e0c4eb2811740ddff71c42f6c78181f9f395e7f530/inf/qjtMMnUZb8D4fgYO-r2Nl8LthfRQhZJlbZM5KS4D6z39v08V5Dy_TwE-EUdppPOZIvLSqOyO0jDOSBzEEgPUHw%3D%3D?uid=0&filename=Coding_for_girls_027.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
        >
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '400px', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
            <Text textColor="#fff" caps textSize={'50px'}>
                <span style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>
                  Учебный <br />процесс <span style={{ animation: `${keyFrameExampleOne} 1.5s infinite ease`, color: '#fff', fontWeight: 'bold', fontSize: '80px' }}>|</span>
                </span>
            </Text>
          </div>
        </Slide>

        {/* Shedule */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>О курсе</Heading>
          <div style={{ height:'50px' }}></div>
          <div style={{ width: '70%', margin: '0 auto' }}>
            <Layout>
              <List textColor="#fff">
                <div>
                  <div style={{ margin: '0 40px 20px' }}>
                    <ListItem>
                      Начальный уровень
                    </ListItem>
                  </div>
                  <div style={{ margin: '0 40px 20px' }}>
                    <ListItem>
                      30 часов
                    </ListItem>
                  </div>
                  <div style={{ margin: '0 40px 20px' }}>
                    <ListItem>Офлайн</ListItem>
                  </div>
                  <div style={{ margin: '0 40px 20px' }}>
                    <ListItem>Сб, Вс - 5 часов / Пн, Ср, Пт - 3 часа</ListItem>
                  </div>
                </div>
              </List>
            </Layout>
          </div>
        </Slide>

        {/* Телеграф */}
        <Slide
          bgImage="./assets/images/telegraph.jpg"
          bgSize="cover"
        >
          <div style={{ marginBottom: '450px' }}>
            <Heading size={3} textColor="#000" caps>Площадка</Heading>
          </div>
        </Slide>

        {/* Команда */}
        <Slide
          bgColor={"#fff"}
        >
          <Heading size={3} textColor="#1A237E" caps>К - команда!</Heading>
          <div style={{ height: "30px" }}></div>
          <Layout>
            <Image
              height={"500px"}
              src="https://1.downloader.disk.yandex.ru/preview/1a9d4c37f68715a4123f8a7e5175afbe296f264283c2688b0145ebe4c272ded4/inf/qjtMMnUZb8D4fgYO-r2Nl6p_jdMkPe2O-bSJeARaGK1DXnPy7-dGv1SaJK4n0ilLekthby3fCUi43XrxstpyOg%3D%3D?uid=0&filename=coding_school_0020.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
            ></Image>
            <Image
              height={"500px"}
              src="https://1.downloader.disk.yandex.ru/preview/508292f3bb2a6ddb9818379918dc7f028e699bdbb3387f540449ba7d678cd883/inf/qjtMMnUZb8D4fgYO-r2Nl2oPNbauXZERnRuz8Y14cPhOaphJTmBd9oUNliAKAgk2V61byNH3BKlPJh4RDgGlcA%3D%3D?uid=0&filename=Coding_for_girls_053.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1000x691"
            ></Image>
          </Layout>
        </Slide>

        {/* Mary */}
        <Slide
          transition={["spin", "zoom"]}
        >
          <Layout>
            <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '30%', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
              <Text textColor="#fff" caps textSize={'30px'}>
                <span style={{ fontWeight: 'bold' }}>
                  Знакомьтесь,<br />это Маша!<br />Маша крутой<br />ассистент!
                </span>
              </Text>
            </div>

            <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="./assets/photos/mary.jpg"
                height={"700px"}
              />
            </div>
          </Layout>
        </Slide>

        {/* github */}
        <Slide>
          <Layout>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="./assets/images/metoda.png"
                height={"500px"}
              >
              </Image>
            </div>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="./assets/images/metoda1.png"
                height={"500px"}
              >
              </Image>
            </div>

          </Layout>
        </Slide>



        {/* chapter cover */}
        <Slide
          transition={["fade"]}
          bgImage="https://2.downloader.disk.yandex.ru/preview/7fdcda7ec0550ce45b47f8f831bafcfe1195a09a5bf61a8dc033667f7623bc0a/inf/qjtMMnUZb8D4fgYO-r2Nl0xhCdv3FQowFiTyGRKBE1aYVhKXrews1aplmd0jxxqDIuUdpRFUxu4qAqhYLoZHYg%3D%3D?uid=0&filename=Coding_for_girls_081.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
        >
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '450px', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
            <Text textColor="#fff" caps textSize={'50px'}>
                <span style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>
                  Программа <br />курса <span style={{ animation: `${keyFrameExampleOne} 1.5s infinite ease`, color: '#fff', fontWeight: 'bold', fontSize: '80px' }}>|</span>
                </span>
            </Text>
          </div>
        </Slide>

        {/* модуль1 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 1: Знакомство<br />с интернет-миром</Heading>
          <div style={{ height:'40px' }}></div>
          <div style={{ maxWidth: '70%', margin: '0 auto' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Основные понятия</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Принципы работы браузера, frontend и backend</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>devtools</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>IDE</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>VCS</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Github</ListItem>
              </div>
            </List>
          </div>
        </Slide>

        {/* модуль2 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 2: Основы HTML</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '50%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Основные понятия</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Теги и атрибуты</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Основные элементы страницы</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Заголовки</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Ссылки</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Изображения</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Списки</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Таблицы</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Формы</ListItem>
              </div>
            </List>
          </div>
        </Slide>
        <Slide>
          <Heading size={3} textColor="#1A237E" caps>Пример задания</Heading>
          <div style={{ height:'20px' }}></div>
          <Image
            src="./assets/images/task11.png">
          </Image>
        </Slide>
        <Slide>
          <Heading size={3} textColor="#1A237E" caps>Ура! я умею верстать странички!</Heading>
          <div style={{ height:'20px' }}></div>
          <Image
            src="./assets/images/example.png">
          </Image>
        </Slide>
        <Slide>
          <Image
            src="./assets/images/katesWork.png"
            height={700}
          >
          </Image>
        </Slide>
        {/* цитата */}
        <Slide transition={["spin", "zoom"]}
               bgImage={"https://2.downloader.disk.yandex.ru/preview/4121e833af9f5c24231afc4422bf446f5c4dfb12b0c88a6ba2f2326232cd789f/inf/qjtMMnUZb8D4fgYO-r2Nl1exJcDHGHjNxLQd0RZdGjtq3CiDIlYGhhKRv5wXD24fef7HCSTGpzeJ3IQjc_fk5g%3D%3D?uid=0&filename=coding_school_0024.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"}
        >
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '30%', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
            <BlockQuote>
              <Quote>
                <Text margin="15px 0 0" textColor="primary">
                  <div style={{ fontSize: '30px', lineHeight: '40px' }}>
                    Cтрашно приступить к его изучению. Казалось,
                    что не получится, что все это очень сложно, и еще находилось очень много разных других причин.
                  </div>
                </Text>
              </Quote>
              <Cite>Катя, веб-дизайнер</Cite>
            </BlockQuote>
          </div>
        </Slide>

        {/* модуль3 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 3: Основы CSS. Часть 1</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '70%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>CSS, способы подключения</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Правила, свойства, селекторы</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Наследование, каскад</ListItem>
              </div>
            </List>
          </div>
        </Slide>

        {/* модуль4 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 4: Основы CSS. Часть 2</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '70%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Единицы измерения</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Блочная модель документа, задание отступов</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Свойство display</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Позиционирование блоков</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Флексбокс: делаем сетку на флексах</ListItem>
              </div>
            </List>
          </div>
        </Slide>

        {/* flex */}
        <Slide>
          <Heading size={3} textColor="#1A237E" caps>Holy Grail Layout</Heading>
          <div style={{ height: '500px', marginTop: '20px' }}>
            <div style={{
              display: 'grid',
              minHeight: '100%',
              gridTemplateColumns: '1fr 3fr 1fr',
              gridTemplateRows: '50px auto 100px',
              gridTemplateAreas: '"header header header" "nav main aside" "footer footer footer"',
              gridColumnGap: '10px',
              gridRowGap: '15px',
              padding: '10px',
              boxSizing: 'border-box'
            }}>
              <div style={{ border: '1px solid #e4e4e4', textAlign: 'center', gridArea: 'header', background: 'linear-gradient(to top, rgba(245,50,252,0.5) 0%,rgba(91,222,255,0.5) 100%)' }}>header</div>
              <div style={{ border: '1px solid #e4e4e4', textAlign: 'center', gridArea: 'main', background: 'linear-gradient(to top, rgba(245,50,252,0.5) 0%,rgba(91,222,255,0.5) 100%)' }}>main</div>
              <div style={{ border: '1px solid #e4e4e4', textAlign: 'center', gridArea: 'nav', background: 'linear-gradient(to top, rgba(245,50,252,0.5) 0%,rgba(91,222,255,0.5) 100%)' }}>nav</div>
              <div style={{ border: '1px solid #e4e4e4', textAlign: 'center', gridArea: 'aside', background: 'linear-gradient(to top, rgba(245,50,252,0.5) 0%,rgba(91,222,255,0.5) 100%)' }}>aside</div>
              <div style={{ border: '1px solid #e4e4e4', textAlign: 'center', gridArea: 'footer', background: 'linear-gradient(to top, rgba(245,50,252,0.5) 0%,rgba(91,222,255,0.5) 100%)' }}>footer</div>
            </div>
          </div>
        </Slide>

        {/* kahoot */}
        <Slide
          transition={["slide", "fade"]}
          bgImage="https://1.downloader.disk.yandex.ru/preview/24c70345ca5780c018962f4777c389c37315533e0398b8aef4df7c9a98bfc1fc/inf/qnxcPql0snt9z3FvsI0tTeXAEOllbzij9mwIaFkMeoT-0Uxl9vcn5fl1zoK6T24jBYflMkXALJwAhjISRDnhjA%3D%3D?uid=0&filename=MCS%20telegraph%20-%20Kraeva%20%2830%20of%2066%29.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
        >
        </Slide>
        <Slide
          transition={["slide", "fade"]}
          bgImage="https://3.downloader.disk.yandex.ru/preview/21a9384d3319039e53a459d44de35896816642b50be7bd418f93967e5a13987b/inf/qjtMMnUZb8D4fgYO-r2NlwZj2kpxsD9mmbtSQaJ78zqaE9EoYsjJ47Ed1x2NVLOoWWpBXfH0sdn3-Fwai0tRpg%3D%3D?uid=0&filename=coding_school_0052.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
        ></Slide>

        {/* example */}
        <Slide>
          <div style={{ width: '70%', margin: '0 auto' }}>
            <Heading size={3} textColor="#1A237E" caps>Чему равна высота div?</Heading>
            <div style={{ height: '50px' }}></div>
            <CodePane
              textSize={30}
              lang={"html"}
              source={
                "<div style=\"overflow: hidden;\">\n" +
                "    <p style=\"margin-bottom: 30px;\"></p>\n" +
                "    <p style=\"margin-top: 20px;\"></p>\n" +
                "</div>"
              }
            >
            </CodePane>
          </div>
        </Slide>

        {/* модуль5 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 5: CSS-красота</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '50%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Работа с текстами</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Работа с фонами</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Тени, прозрачность</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Трансформации</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Анимации</ListItem>
              </div>
            </List>
          </div>
        </Slide>

        {/* demos */}
        <Slide>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ boxShadow: '4px 4px 10px 1px rgba(0,0,0,0.4)', width: '300px', padding: '50px', display: 'flex' }}>
              <div style={{ padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,.4)', border: '1px solid lightgray', margin: 'auto', position: 'relative' }}>
                <img src="./assets/images/smile.png" width="100" alt="" style={{ display: 'block', margin: '0 auto 10px' }} />
                <div style={{ fontStyle: 'italic' }}>I am popup</div>
                <div style={{ position: 'absolute', color: 'gray', top: '-10px', right: '-30px', fontSize: '30px' }}>&times;</div>
              </div>
            </div>
            <div style={{ boxShadow: '4px 4px 10px 1px rgba(0,0,0,0.4)', width: '600px', padding: '50px' }}>
              <div style={{ animation: `${keyFrameCloud} 2s infinite ease`, width: '200px', height: '200px' }}>
                <div style={{ width: '100px', height: '100px', position: 'absolute', background: 'blue', borderRadius: '50px', left: '0', top: '50px' }}></div>
                <div style={{ width: '100px', height: '100px', position: 'absolute', background: 'blue', borderRadius: '50px', left: '50px', top: '0' }}></div>
                <div style={{ width: '100px', height: '100px', position: 'absolute', background: 'blue', borderRadius: '50px', left: '100px', top: '50px' }}></div>
                <div style={{ width: '100px', height: '100px', position: 'absolute', background: 'blue', borderRadius: '50px', left: '35px', top: '50px' }}></div>
              </div>
            </div>
            <div style={{ boxShadow: '4px 4px 10px 1px rgba(0,0,0,0.4)', width: '300px', padding: '50px', display: 'flex' }}>
              <div style={{ width: '200px', height: '200px', background: 'green', margin: 'auto', position: 'relative' }}>
                <div style={{ background: 'lightblue', width: '100px', height: '100px', borderRadius: '50px', position: 'absolute', top: '0', left: '0' }}></div>
                <div style={{ background: 'lightblue', width: '100px', height: '100px', borderRadius: '50px', position: 'absolute', bottom: '0', left: '0' }}></div>
                <div style={{ background: 'lightblue', width: '100px', height: '100px', borderRadius: '50px', position: 'absolute', right: '0', bottom: '0' }}></div>
                <div style={{ background: 'lightblue', width: '100px', height: '100px', borderRadius: '50px', position: 'absolute', right: '0', top: '0' }}></div>
                <div style={{ background: 'yellow', width: '80px', height: '80px', borderRadius: '40px', position: 'absolute', top: '50%', left: '50%', marginTop: '-40px', marginLeft: '-40px' }}></div>
              </div>
            </div>
          </div>

          <div style={{ boxShadow: '4px 4px 10px 1px rgba(0,0,0,0.4)', padding: '50px', margin: '20px', display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '300px', height: '300px', background: 'url(./assets/images/jdun.png) top center no-repeat', backgroundSize: 'contain', animation: `${jdunX} 2s infinite linear` }}></div>
            <div style={{ width: '300px', height: '300px', background: 'url(./assets/images/jdun.png) top center no-repeat', backgroundSize: 'contain', animation: `${jdunY} 2s infinite linear` }}></div>
            <div style={{ width: '300px', height: '300px', background: 'url(./assets/images/jdun.png) top center no-repeat', backgroundSize: 'contain', animation: `${jdunZ} 2s infinite linear` }}></div>
          </div>
        </Slide>

        {/* модуль6 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 6: Основы JS. Часть 1</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '70%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>JavaScript основы, Hello world!</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Подключение скриптов, порядок выполнения</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Типы данных</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Переменные</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Операторы</ListItem>
              </div>
            </List>
          </div>
        </Slide>
        {/* practice */}
        <Slide
          transition={["slide", "fade"]}
          bgImage="https://instagram.fhel3-1.fna.fbcdn.net/t51.2885-15/e35/20583268_357049448065618_669553459774619648_n.jpg"
          bgColor="secondary"
          textColor="primary"
        >
        </Slide>

        {/* модуль7 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 7: Основы JS. Часть 2</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '50%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Взаимодействие с пользователем</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Условия, циклы</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Функции</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Взаимодействие с элементами на странице</ListItem>
              </div>
            </List>
          </div>
        </Slide>

        {/* модуль8 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 8: Публикация проекта</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '50%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Публикация своего проекта на гитхабе</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Работа с ветками</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Основные консольные команды</ListItem>
              </div>
            </List>
          </div>
        </Slide>
        <Slide
          bgImage="https://4.downloader.disk.yandex.ru/preview/978909fec1fcb63f242fd8098d4d30be946e571290f3f682463e61482fbff3c3/inf/qjtMMnUZb8D4fgYO-r2Nlwk0FpWUJDkONXeqrlMybx-orj3YkStjCQ0x-M2-SmnlFdkuGl9AVt4ceHxf5bNKHQ%3D%3D?uid=0&filename=Coding_for_girls_063.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
          transition={["slide", "fade"]}
        >
        </Slide>

        {/* модуль9 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 9: Финальный тест</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '50%', margin: '0 auto', fontSize: '30px' }}>
            <List textColor="#fff">
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Презентация проекта</ListItem>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <ListItem>Финальный тест</ListItem>
              </div>
            </List>
          </div>
        </Slide>

        {/* в конце был тест */}
        <Slide
          transition={["slide", "fade"]}
          bgImage="https://2.downloader.disk.yandex.ru/preview/fdf08373da60d7ca6e40b310d82525be29c091562a8ac49449b4c398bf286b94/inf/qjtMMnUZb8D4fgYO-r2NlwpWIpTPP742WJrnRqz3dyluc2OAWy5u7A3McVruSzEoNruY9UY7weCauq_TmgSeTw%3D%3D?uid=0&filename=Coding_for_girls_085.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
        ></Slide>
        <Slide
          transition={["slide", "fade"]}
          bgImage="https://1.downloader.disk.yandex.ru/preview/ddd8ccbb137d411f600b2f146dbb3cfc859f997c2b13946c19d8704b90737f0c/inf/qjtMMnUZb8D4fgYO-r2Nl1uw59xtsCIgAdN0Y6bbLZrIBZ7NNeFP3v5ppIJcN6m3evIEG3OlOi53KxrJ7dRGqg%3D%3D?uid=0&filename=coding_school_0061.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
        ></Slide>

        {/* модуль10 */}
        <Slide
          bgColor="#1A237E"
        >
          <Heading size={3} textColor="#fff" caps>Модуль 10: Дополнительные темы</Heading>
        </Slide>

        {/* дипломы */}
        <Slide transition={["slide", "fade"]}>
          <Layout>
            <Image
              height="100%"
              src="https://2.downloader.disk.yandex.ru/preview/bdb2cc08b1ec0a17a99a5d3c5b825ceada6abc32669f39a1e299939a7cfaf09b/inf/qjtMMnUZb8D4fgYO-r2Nl7P8nFRlDG6JGjeSL5_Zt-i1dFZ23MRDh1Joe0RlgqvY3yR81Fo-v-wLeufueaTe5Q%3D%3D?uid=0&filename=coding_school_0087.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
            />
            <Image
              height="100%"
              src="https://2.downloader.disk.yandex.ru/preview/da9a5b9db23b38ea32737a392f415bc8dc52e56c629a3e58e88db353aa219775/inf/qjtMMnUZb8D4fgYO-r2Nl5FYbEv8goVkFTnivlLrsBOtYerTaqjZfPkUCydVf_mW92AMwumEwkCjfylGmwfMCA%3D%3D?uid=0&filename=coding_school_0072.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
            />
            <Image
              height="100%"
              src="https://2.downloader.disk.yandex.ru/preview/2547f7add7e1fe83b61593cb9efeb3107f1dd3c6bf7a5037c11205acf2dbecfe/inf/qjtMMnUZb8D4fgYO-r2Nl3aHo2d-rzWSk5bBSmnEvF1kbcSnXseUfU9FUx5rsssv5QKFEmECcSQqqR4x74bhZQ%3D%3D?uid=0&filename=coding_school_0080.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"
            />
          </Layout>
        </Slide>

        {/* chapter cover */}
        <Slide
          transition={["fade"]}
          bgImage="./assets/images/yoda.jpg"
          bgColor="#000"
          bgPosition="top center"
          bgRepeat="no-repeat"
        >
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '550px', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
            <Text textColor="#fff" caps textSize={'50px'}>
                <span style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>
                  Путь <br />наставника <span style={{ animation: `${keyFrameExampleOne} 1.5s infinite ease`, color: '#fff', fontWeight: 'bold', fontSize: '80px' }}>|</span>
                </span>
            </Text>
          </div>
        </Slide>

        {/* надо учитывать */}
        <Slide
          bgColor="#000"
          textColor="primary"
        >
          <Heading size={3} textColor="#fff" caps>Надо учитывать</Heading>
          <div style={{ height:'20px' }}></div>
          <div style={{ maxWidth: '50%', margin: '0 auto', fontSize: '30px' }}>
            <List>
              <Appear>
                <div style={{ marginBottom: '20px' }}>
                  <ListItem>Разные начальные знания</ListItem>
                </div>
              </Appear>
              <Appear>
                <div style={{ marginBottom: '20px' }}>
                  <ListItem>Разная скорость обучения</ListItem>
                </div>
              </Appear>
              <Appear>
                <div style={{ marginBottom: '20px' }}>
                  <ListItem>Разная мотивация</ListItem>
                </div>
              </Appear>
              <Appear>
                <div style={{ marginBottom: '20px' }}>
                  <ListItem>Разный темперамент</ListItem>
                </div>
              </Appear>
            </List>
          </div>
        </Slide>

        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary">
          <Heading size={3} textColor="#1A237E" caps>Разные начальные знания</Heading>
          <div height="20px"></div>
          <Image
            src="./assets/images/path.png"
            height={500}
          ></Image>
        </Slide>

        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary">
          <Heading size={3} textColor="#1A237E" caps>Разная скорость обучения</Heading>
          <div height="20px"></div>
          <Image
            src="./assets/images/speedOfLearning.png"
            height={500}
          ></Image>
        </Slide>
        {/* конфуций */}
        <Slide transition={["spin", "zoom"]} bgColor="#000" textColor="primary">
          <div style={{ maxWidth: '50%', margin: '0 auto', textAlign: 'left' }}>
            <Quote>
              <Text margin="15px 0 0" textColor="primary" textSize={'30px'} lineHeight={1.5}>
                Не важно, как медленно вы идете, до тех пор, пока вы не остановитесь.
              </Text>
            </Quote>
          </div>
          <Cite>Конфуций</Cite>
        </Slide>


        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary">
          <Heading size={3} textColor="#1A237E" caps>Разный темперамент</Heading>
          <Image
            src="./assets/images/character.png"
            height={500}
          ></Image>
        </Slide>

        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary">
          <Heading size={3} textColor="#1A237E" caps>Разная мотвация</Heading>
          <div height="20px"></div>
          <Image
            src="./assets/images/motivation.png"
            height={500}
          ></Image>
        </Slide>

        {/* books */}
        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary"
               bgImage="./assets/images/books.jpg"
               bgDarken=".3"
        >
        </Slide>

        {/* Валя 3 */}
        <Slide transition={["spin", "zoom"]}
               bgImage={"https://4.downloader.disk.yandex.ru/preview/0ab814b80adacc698fc7d47a00b5e42838aef4cb9b2738bdc8785bab6cb0f2b5/inf/qnxcPql0snt9z3FvsI0tTRs9j0PQNHuC3MpapEQuwMQWTILhMMenoiIlnSxBD4ddnq9hT0lNXV1mdvQKv5DI6A%3D%3D?uid=0&filename=MCS%20telegraph%20-%20Kraeva%20%282%20of%2066%29.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"}
        >
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '450px', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
            <BlockQuote>
              <Quote>
                <Text margin="15px 0 0" textColor="primary">
                  <div style={{ fontSize: '30px', lineHeight: '40px' }}>
                    Всегда хотела научиться, но мысль о просиживании часов вместе с учебником, компом и кучей незнакомых терминов
                    приводило меня в уныние.
                  </div>
                </Text>
              </Quote>
              <Cite>Валя, экономист</Cite>
            </BlockQuote>
          </div>
        </Slide>

        {/* ЗНАНИЯ vs НАВЫКИ */}
        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary">
          <Heading size={3} textColor="#1A237E" caps>ЗНАНИЯ vs НАВЫКИ</Heading>
          <Image
            height={400}
            src="./assets/images/camping.png"
          >
          </Image>
        </Slide>

        {/* kino */}
        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary"
               bgImage="./assets/images/kino.jpeg"
               bgDarken=".3"
        >
          <Appear>
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '550px', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
              <Text textColor="primary">
                <p style={{ textAlign: 'left' }}>
                  <div>
                    <b>&laquo;Весна на Заречной улице&raquo;</b>
                  </div>
                  <br />
                  Режиссёр:
                  <br />
                  Феликс Миронер,
                  <br />
                  Марлен Хуциев
                  <div style={{ height: '20px' }}></div>
                  1956 год
                </p>
              </Text>
          </div>
          </Appear>
        </Slide>

        {/* Ликбез */}
        <Slide transition={["slide", "fade"]} bgColor="#000" textColor="primary">
          <Layout>
            <Fill>
              <Image
                src="./assets/images/likbez.jpg"
              >
              </Image>
            </Fill>
            <Fill>
              <Text textColor={"primary"}>
                <div style={{ textAlign:'left', lineHeight: '40px', fontSize: '30px' }}>
                  Ликвидация безграмотности у населения &mdash;<br />
                  <b>«ЛИКБЕЗ»</b>
                </div>
              </Text>
            </Fill>
          </Layout>
        </Slide>

        {/* Гераклит */}
        <Slide transition={["spin", "zoom"]} bgColor="#000" textColor="primary">
          <div style={{ width: '50%', margin: '0 auto', textAlign: 'left' }}>
            <Quote>
              <Text margin="15px 0 0" textColor="#FFF">
                <div style={{ fontSize: '50px' }}>
                  Постоянны только перемены.
                </div>
              </Text>
            </Quote>
            <Cite>Гераклит (ок. 500 г. до н.э., плюс-минус пара дней)</Cite>
          </div>
        </Slide>

        {/* academy, geekbrains */}
        <Slide transition={["slide", "fade"]} bgColor="#fff" textColor="primary">
          <Layout>
            <Fill>
              <Image
                src="./assets/images/logoAcademy.png"
              >
              </Image>
            </Fill>
            <Fill>
              <Image
                src="./assets/images/geekbrainsLogo.jpg"
                width={"400px"}
              >
              </Image>
            </Fill>
          </Layout>
        </Slide>


        {/* заключение */}
        <Slide
          transition={["fade"]}
          bgImage="https://2.downloader.disk.yandex.ru/preview/d5d4feae5f50f7e0cc2d89ac734ccdb27eb835d6d85a69c47414acc0a227c19d/inf/qjtMMnUZb8D4fgYO-r2Nl0vMPxcwPHNHgZP68gdJC-mm0WiqeHd6Kwlwq3KxmqX0UkF0QdNOxl0nYMsEnFYAcA%3D%3D?uid=0&filename=Coding_for_girls_102.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1280x975"
        >
          {/*<Heading size={1} textColor={"primary"} caps>*/}
            {/*<div style={{padding: '25px', display: 'inline-flex', border: '1px solid #fff'}}>*/}
              {/*Заключение*/}
            {/*</div>*/}
          {/*</Heading>*/}
        </Slide>

        {/* Вера */}
        <Slide transition={["spin", "zoom"]}
               bgImage={"https://2.downloader.disk.yandex.ru/preview/6ed8e51b1a0db2528c95098fec563f52cb726551887982487e4b2c07b1a33204/inf/qnxcPql0snt9z3FvsI0tTcMSaXLtmfssoFmz6-A5_WqcXkZ36KWkvLFgyEAgH5FokXb15HfVqi6bIaMUlcsW8w%3D%3D?uid=0&filename=MCS%20telegraph%20-%20Kraeva%20%2811%20of%2066%29.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1180x575"}
        >
          <div style={{ position: 'relative', height: '100vh', margin: '-10px', width: '450px', background: '#1A237E', opacity: '.95', padding: '50px 20px', textAlign: 'left' }}>
            <BlockQuote>
              <Quote>
                <Text margin="15px 0 0" textColor="primary">
                  <div style={{ fontSize: '30px', lineHeight: '40px' }}>
                    В моей работе необходимо понимать, о чем общаться с кандидатами,
                    что они рассказывают и вообще быть в теме.
                  </div>
                </Text>
              </Quote>
              <Cite>Вера, IT рекрутер</Cite>
            </BlockQuote>
          </div>
        </Slide>

        {/* сделать мир лучше 3 */}
        <Slide>
          <Heading size={2} textColor={"#1A237E"} caps>Как мне сделать мир лучше?</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor={"#1A237E"} caps>Выступите на митапе</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor={"#1A237E"} caps>Напишите пост</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor={"#1A237E"} caps>Проведите МК</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor={"#1A237E"} caps>Помогайте джуниорам</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor={"#1A237E"} caps>Полезные ссылки</Heading>
          <div style={{ marginBottom: '100px' }}></div>
          <div style={{ width: '50%', margin: '0 auto', lineHeight: '40px' }}>
            <List>
              <ListItem>Джули Дирксен &laquo;Искусство обучать&raquo;</ListItem>
              <ListItem>Саймон Хартли &laquo;А у меня получится?&raquo;</ListItem>
              <ListItem>Презентация</ListItem>
              <ListItem><a href="https://github.com/FormidableLabs/spectacle">github.com/FormidableLabs/spectacle</a></ListItem>
              <ListItem>Слайды в pdf</ListItem>
              <ListItem><a href="https://moscoding.ru/">moscoding.ru</a></ListItem>
              <ListItem>
                  FB / <a href="https://www.facebook.com/profile.php?id=100009479826265">lucyhackwrench</a>
              </ListItem>
              <ListItem>
                  VK / <a href="https://vk.com/id4174564">lucyhackwrench</a>
              </ListItem>
            </List>
          </div>
        </Slide>

        <Slide>
          <Heading size={1} textColor={"#1A237E"} caps>
            <div style={{ fontSize: '100px' }}>Q / A</div>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
