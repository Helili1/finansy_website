import { useEffect } from 'react'
import BookCard from '@/components/BookCard'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import FloatingIcons from '@/components/FloatingIcons'
import {
  FileDownIcon,
  ExternalLinkIcon,
  BookIcon,
  PiggyBankIcon,
  SchoolIcon,
  LineChartIcon,
  CheckCircleIcon,
  QrCodeIcon,
  BarChartIcon,
  CalendarIcon,
  ListTodoIcon,
  TableIcon,
} from 'lucide-react'

import profinansyImage from '/lovable-uploads/pro-finansy.jpeg'

const Index = () => {
  useEffect(() => {
    document.title = 'Финансовая грамотность'
  }, [])

  const books = [
    {
      title: 'Роберт Кийосаки «Богатый папа, бедный папа»',
      coverUrl:
        'https://alpinabook.ru/upload/iblock/2a2/yd5mi4z4e20hytl9tmcporvs2zugx9y7.jpeg',
      linkUrl:
        'https://www.litres.ru/book/robert-kiyosaki/bogatyy-papa-bednyy-papa-119256/chitat-onlayn/?page=1',
    },
    {
      title: 'Роберт Кийосаки «Квадрант денежного потока»',
      coverUrl:
        'https://alpinabook.ru/upload/iblock/8d2/8d25fb3709ca6992a0da06bd014cb0d2.jpg',
      linkUrl:
        'https://www.litres.ru/book/robert-kiyosaki/kvadrant-denezhnogo-potoka-10312612/chitat-onlayn/',
    },
    {
      title: 'Наполеон Хилл «Думай и богатей»',
      coverUrl: 'https://cdn1.ozone.ru/s3/multimedia-p/6024337357.jpg',
      linkUrl:
        'https://www.litres.ru/book/napoleon-hill/dumay-i-bogatey-11808577/chitat-onlayn/',
    },
    {
      title: 'Брайан Трейси «Наука денег»',
      coverUrl: 'https://cdn1.ozone.ru/multimedia/1023469162.jpg',
      linkUrl:
        'https://www.litres.ru/book/brayan-treysi/nauka-deneg-kak-uvelichit-svoy-dohod-i-stat-bogatym-39824081/?contentType=book&slug=nauka-deneg-kak-uvelichit-svoy-dohod-i-stat-bogatym-39824081',
    },
    {
      title: 'Джордж Клейсон «Самый богатый человек в Вавилоне»',
      coverUrl: 'https://cdn1.ozone.ru/s3/multimedia-a/6232423138.jpg',
      linkUrl:
        'https://www.litres.ru/book/dzhorzh-semuel-kleyson/samyy-bogatyy-chelovek-v-vavilone-68620378/chitat-onlayn/',
    },
    {
      title: 'Бодо Шефер «Мани, или Азбука денег»',
      coverUrl:
        'https://static.sello.uz/unsafe/x500/https://static.sello.uz/fm/20220420/2840a0fb-7596-4bff-b8b7-f0089c66aca7.jpg',
      linkUrl:
        'https://www.litres.ru/book/bodo-shefer/mani-ili-azbuka-deneg-11279349/chitat-onlayn/',
    },
    {
      title: 'Бодо Шефер «Путь к финансовой свободе»',
      coverUrl:
        'https://avatars.mds.yandex.net/get-mpic/5217165/2a0000018ac7601f6f7d0b4ad2cd435a5b56/900x1200',
      linkUrl:
        'https://www.litres.ru/book/bodo-shefer/put-k-finansovoy-svobode-11279304/chitat-onlayn/?contentType=book&slug=put-k-finansovoy-svobode-11279304&subPage=chitat-onlayn',
    },
    {
      title: 'Юлия Сахаровская «Куда уходят деньги»',
      coverUrl:
        'https://www.mann-ivanov-ferber.ru/assets/images/covers/23/7223/1.50x-thumb.png',
      linkUrl:
        'https://kniga-online.com/books/knigi-o-biznese/lichnye-finansy/page-2-15855-yuliya-saharovskaya-kuda-uhodyat-dengi-kak-gramotno.html',
    },
  ]

  const courses = [
    {
      title:
        'Финансовая грамотность на каждый день от Нетологии — курс с интересной практикой',
      url: 'https://netology.ru/programs/financial_basic',
    },
    {
      title:
        'Как управлять деньгами в 2025 году, чтобы не терять качество жизни? от Академии личных финансов',
      url: 'https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fcutt.ly%2FJeJ6Qank&postId=899214',
    },
    {
      title:
        'Эффективное управление личными финансами от GeekBrains — курс с крутым лектором',
      url: 'https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Ffas.st%2FfTqKw%3Ferid%3DLatgC7HxL&postId=899214',
    },
    {
      title:
        'Всегда при деньгах от Натальи Климовой — курс с проверкой домашних заданий',
      url: 'https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fihclick.ru%2F%3Fidp%3D237467%26o%3D276349%26p%3D276334&postId=899214',
    },
    {
      title:
        'Как быстро погасить кредиты и избавиться от долгов? от InvestFuture — лучшее обучающее видео',
      url: 'https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW1P-wQaJrI0&postId=899214',
    },
  ]

  const tests = [
    {
      title: 'Тест на финансовую грамотность от Российской Газеты',
      url: 'https://rg.ru/articles/test-fin-gramotnost/?utm_referrer=https%3A%2F%2Fyandex.ru%2F',
    },
    {
      title: 'Тест на финансовую грамотность от Testometrika',
      url: 'https://testometrika.com/finance/test-of-financial-literacy/',
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingIcons />

      <header className="bg-background py-16 md:py-24 lg:py-32 text-center relative header-gradient">
        <div className="absolute inset-0 bg-[url('/public/finance-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4 fade-in show">
            Финансовая грамотность
          </h1>
          <div className="w-24 h-1 div decorative-line mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ваш путь к финансовой свободе и благополучию начинается здесь
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16 relative">
        <Section
          title="Что же такое финансовая грамотность?"
          content={
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <BookIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-primary-light">
                  <strong>Финансовая грамотность</strong> — это сочетание
                  осведомлённости, знаний, навыков, установок и поведения,
                  связанных с финансами и необходимых для принятия разумных
                  финансовых решений, а также достижения личного финансового
                  благополучия.
                </p>
              </div>
            </div>
          }
        />

        <Section
          title="Как я могу улучшить свою финансовую грамотность?"
          content={
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <SchoolIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-primary-light">
                  Существует несколько способов улучшить финансовую грамотность.
                  А именно{' '}
                  <strong>
                    чтение книг и статей о финансах, участие в финансовых курсах
                    и вебинарах, консультации с финансовым советником
                  </strong>
                  , а также практическое применение полученных знаний.
                </p>
              </div>
            </div>
          }
        />

        <Section
          title="На какие книги по финансовой грамотности стоит обратить внимание?"
          content={
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <BookIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-primary-light">
                  Ниже собраны бестселлеры, которые научат разумно распоряжаться
                  деньгами:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book, index) => (
                  <BookCard
                    key={index}
                    title={book.title}
                    coverUrl={book.coverUrl}
                    linkUrl={book.linkUrl}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          }
        />

        <Section
          title={
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              ПРИЛОЖЕНИЕ PRO.FINANSY - всегда под рукой
            </h2>
          }
          content={
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-6">
                  <div className="glassy-card p-6 rounded-xl hover:shadow-lg transition-all">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Удобнейшая аналитика
                    </h3>
                    <p className="mb-3">
                      Всегда под рукой развернутая аналитика по бюджету в
                      онлайне:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>за любой период;</li>
                      <li>в разрезе любого счета;</li>
                      <li>и в разрезе всех счетов сразу.</li>
                    </ul>
                    <p>
                      Данные можно смотреть в электронном виде в приложении и на
                      компьютере. Можно скачать PDF-отчет или EXCEL-таблицу с
                      данными по всем операциям со всех счетов.
                    </p>
                  </div>

                  <div className="glassy-card p-6 rounded-xl hover:shadow-lg transition-all">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Что-то непонятно?
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>посмотрите видео-подсказку;</li>
                      <li>посмотрите курс по приложению;</li>
                      <li>обратитесь в поддержку.</li>
                    </ul>
                  </div>
                </div>
                <img
                  src={profinansyImage}
                  alt="Profinansy"
                  className="w-full h-auto"
                />
              </div>

              <div className="flex justify-center">
                <Button asChild variant="outline" className="btn-shimmer">
                  <a
                    href="http://sites.profinansy.ru/updates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Перейти на сайт приложения
                  </a>
                </Button>
              </div>
            </div>
          }
        />

        <Section
          title={
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              Гениальный ежедневник для финансового планирования
            </h2>
          }
          content={
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glassy-card p-4 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <ListTodoIcon className="h-5 w-5 mr-2 text-primary" />
                    Список желаний
                  </h3>
                  <img
                    src="/lovable-uploads/ed7e6f66-09e7-44f0-a498-6439c30e9b75.png"
                    alt="Список желаний"
                    className="rounded-lg shadow-md hover:scale-105 transition-transform"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Тренируйте навык составления списка желаний при помощи этого
                    раздела ежедневника
                  </p>
                </div>

                <div className="glassy-card p-4 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <BarChartIcon className="h-5 w-5 mr-2 text-primary" />
                    Финансовые цели (1)
                  </h3>
                  <img
                    src="/lovable-uploads/1cf712a6-ade5-490e-9dc5-6326996ca947.png"
                    alt="Финансовые цели"
                    className="rounded-lg shadow-md hover:scale-105 transition-transform"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Методика SMART для достижения финансовых целей
                  </p>
                </div>

                <div className="glassy-card p-4 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <TableIcon className="h-5 w-5 mr-2 text-primary" />
                    Финансовые цели (2)
                  </h3>
                  <img
                    src="/lovable-uploads/1ad259d9-74c5-4433-883c-34ce85b836b2.png"
                    alt="Таблица финансовых целей"
                    className="rounded-lg shadow-md hover:scale-105 transition-transform"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Таблицы для отслеживания прогресса по вашим целям
                  </p>
                </div>

                <div className="glassy-card p-4 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                    Бюджет на праздники
                  </h3>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full mb-4 btn-shimmer"
                    >
                      <a href="/daily-planner.pdf" target="_blank">
                        <FileDownIcon className="h-4 w-4 mr-2" />
                        Скачать весь ежедневник
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Планируйте затраты на праздники и дни рождения заранее,
                    чтобы они не выбивали ваш бюджет из колеи
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="btn-shimmer group">
                  <a
                    href="https://profinansy.ru/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Посетить сайт Profinansy
                  </a>
                </Button>
              </div>
            </div>
          }
        />

        <Section
          title="Знакомство с инвестициями"
          content={
            <div className="text-lg text-primary-light">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <PiggyBankIcon className="h-6 w-6 text-primary" />
                </div>
                <p>
                  <strong>Инвестиции</strong> — это способ отправить посылку с
                  деньгами себе в будущее. Позаботиться о себе в старости
                  сейчас, пока есть возможность. А за время пути посылка
                  увеличится в размерах. Познакомиться с инвестициями вы сможете
                  в этом гиде:
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <Button asChild className="btn-shimmer group">
                  <a
                    className="flex items-center"
                    href="/investment.pdf"
                    target="_blank"
                  >
                    <FileDownIcon className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Скачать гид по инвестициям
                  </a>
                </Button>
              </div>
            </div>
          }
        />

        <Section
          title={
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4">
                Курсы по обучению финансовой грамотности
              </h2>
              <p className="text-lg">
                Могу посоветовать вам такой сайт как{' '}
                <a
                  href="https://yabs.yandex.ru/count/WpaejI_zOoVX2LdX15qP0ADed4svVJ8B0juA2EWWcA3Fvt9dp_OxTzvmv-jtlDvmXmi0An6rY8GVQmqX9QerHuyJEWNXH07Y9x-VFrMX8Xb8EUoVt4w1uiGq1GfdZjjt3iB-kM6baGEFIfyuL3hDdz2V6KSvej8SVzes58_QFrLgZkSq2eKwepaE_P5HfKwVzlIsxP-V8YhHpz0GzSUQXBHa51Hq57HFSJkeY5eaTAsjIKXBHa4abf16Z604D3GaH2FfLza1KpOH84IgQU22qaFWc47ONGu67KSlHei2sOYaYbTGP-krA8wZpkSZUju7h5WfGFk05SK2j0zOgLA0zW4eEWhGFW05gW3j0r2U2j0-0CMf0Eq3K9eAqAfOOfRpTU2FS6LHAvmXfvlqbEWeOuZ6StexyNjgvyyyb-PEwLtVK2WKn-_x2Srp_9RQ4k1W4H2By-hZOKZkk_4IISiBmQd02AWlK3RUvQ3DxWFRDe03sC0LiMC8LPPMpicBLiFUZCE2HQjXIq_Lb6cgqCGSd1Ytq3rrqLQXuT8qMxco3PAMeaGTFG05Ae0jXlq2n4WYTqQ4n6LPs3gWwqmpP9fCfab7EORSf6Fq47RC1erAGE08qxr0hyhS0K8UQ6ZgKT3yBWURtELWSr-EZOpzi8KxFiaFbX7IfVM_j3PEoFVIsZWXdqldTRdwkuWsFA-lZL43tFhP63N0BQPPWvaUiwp1JEy2a76GAxgHfiSQeAh4zAu1gafCRxsFnpCwkqppPV_ZIuz7J_PykjlW0LWUyRR-YqEFAJ9IZobowxN-Y8uYY8i-wwM8fOZ0CH72jUM8PkPAfL8fOuO94UnlgFm95F320vmlQqr3_1j40wOfe4n_ba7bfsdJHk6A3t4G7aI8mfazWlYstPmMBkZV35OBhN0pfOPubv9sFtODSq7U9WAiA5OoHdDe4lKB330gPLvVXzeAj8onoWlymmAMIyHEDFs8YYAS1EiaITt7oiXNwg4YVuVWMreD0w7k4BNrfueejzYarSA1Oy6sOsV8Yn7Fy1KR4DpW5D7h0yOYz1lZ92mwCjyiJN0rq9K7TJ7EHJt76UOoyRJ48ixPAeaqe0m0~2?etext=2202.KS2GqI39-DqYUQLsZhUz0FjfOvnQ8CPY0dlknL3Vldc97vwP9v6xq2Q0FKiNfEHYmTeauFS8z3mwwWNxQmTOLwpNlJjmKWywp-4HuFoWZXh2Z3VpdHRhaG55cWJhbGZ6.7c674fdfb32932db7efabd30dd4fdc46e992b528&from=yandex.ru%3Bsearch%26%23x2F%3B%3Bweb%3B%3B0%3B&q=%D0%BA%D1%83%D1%80%D1%81%D1%8B+%D0%BF%D0%BE+%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE%D0%B9+%D0%B3%D1%80%D0%B0%D0%BC%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8&baobab_event_id=m4ztvi4c5d"
                  className="text-destructive hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SkillBox
                </a>{' '}
                - очень хороший сайт которым поможет вам обучиться.
              </p>
            </div>
          }
          content={
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <LineChartIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-primary-light">
                  Могу посоветовать ещё <strong>ТОП-5</strong> бесплатных курсов
                  по финансовой грамотности:
                </p>
              </div>
              <ol className="space-y-4 text-primary mt-8">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="flex items-start p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <span className="font-bold mr-4 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
                      {index + 1}
                    </span>
                    <a
                      href={course.url}
                      className="hover:underline flex-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          }
        />

        <Section
          title="Тесты на финансовую грамотность"
          content={
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <CheckCircleIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-primary-light">
                  Вы можете пройти тесты на финансовую грамотность, чтобы
                  проверить свои знания:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {tests.map((test, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className="p-6 h-auto text-left btn-shimmer"
                  >
                    <a
                      href={test.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start"
                    >
                      <span className="font-bold mr-4 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
                        {index + 1}
                      </span>
                      {test.title}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          }
        />

        <Section
          title="Заключение"
          content={
            <div className="space-y-6 text-lg text-primary-light">
              <p>
                <strong>
                  Финансовая грамотность является ключевым навыком, необходимым
                  для успешного управления личными финансами и достижения
                  финансовой независимости.
                </strong>{' '}
                В ходе обучения мы рассмотрели основные аспекты финансового
                планирования, включая бюджетирование, управление долгами,
                инвестиции и накопления. Понимание этих принципов позволяет не
                только принимать обоснованные решения, но и избегать
                распространенных ошибок, которые могут привести к финансовым
                трудностям.
              </p>
              <p>
                Обучение финансовой грамотности способствует развитию
                критического мышления и ответственности за свои финансовые
                решения. Оно помогает формировать здоровые финансовые привычки,
                такие как регулярное сбережение, разумное использование кредитов
                и инвестирование в будущее. В условиях современного мира, где
                финансовая нестабильность и неопределенность становятся нормой,
                обладание знаниями в этой области становится особенно
                актуальным.
              </p>
              <p>
                <strong>
                  Таким образом, повышение уровня финансовой грамотности не
                  только улучшает качество жизни индивидов, но и способствует
                  экономическому развитию общества в целом. Инвестируя в свое
                  финансовое образование, мы закладываем основу для более
                  стабильного и благополучного будущего.
                </strong>
              </p>
            </div>
          }
        />
      </main>

      <footer className="bg-background py-8 text-center text-destructive relative">
        <div className="container mx-auto px-4 space-y-2">
          <div className="w-24 h-1 decorative-line mx-auto mb-6"></div>
          <p>
            Продукт разработан в целях поднятия уровня финансовой грамотности
            населения
          </p>
          <p>Новочеркасск, 2025 год</p>
        </div>
      </footer>
    </div>
  )
}

export default Index
