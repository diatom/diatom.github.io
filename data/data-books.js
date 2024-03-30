export const elems = `
    <search>
      <label for="searchInput">Краткие оценки прочитанных мною книг</label>
      <div>
        <input type="text" id="searchInput" placeholder="книга, автор, жанр..."/>
        <button id="searchButton" type="submit">🔍</button>
      </div>
    </search>
  <form is="my-tags"></form>
`

export let dat = [
  {
    Id: 0,
    name: `Дюна`,
    author: `Фрэнк Герберт`,
    genre: `научная фантастика`,
    date: `1965`,
    description: `Альтернативное видение будущего, как бы развивалась цивилизация при отказе от микропроцессорных технологий. 
    Власть, интриги, манипуляции, становление, всё через призму неоготичного футуризма.`,
    rating: `8`,
    tags: `научная фантастика, будущее,`,
  },
  {
    Id: 1,
    name: `Мессия Дюны`,
    author: `Фрэнк Герберт`,
    genre: `научная фантастика`,
    date: `1969`,
    description: `Продолжение Дюны. Становление Муад'Диба. Логичное развитие главного героя и того, какую империю он строит. Роман выдержан в духе оригинала, 
    но может вызвать критику за как-бы меньший размах предыдущей части, хотя логично показывает развитие сюжета согласно исходным событиям, 
    что и предаёт высокую ценность произведению.`,
    rating: `7`,
    tags: `научная фантастика, будущее`,
  },
  {
  Id: 2,
  name: `Дети Дюны`,
  author: `Фрэнк Герберт`,
  genre: `научная фантастика`,
  date: `1976`,
  description: `Третий роман в серии о Дюне. Следует за ее выживающими Детьми, которые имеют главную миссию бороться за управление вселенной.`,
  rating: `7.5`,
  tags: `научная фантастика, будущее,`
},
{
  Id: 3,
  name: `Бог император Дюны`,
  author: `Фрэнк Герберт`,
  genre: `научная фантастика`,
  date: `1981`,
  description: `В четвертой книге серии, Лето II правит вселенной уже тысячелетие. Герберт исследует долгосрочные воздействия его тирании на человечество и природу власти.`,
  rating: `7`,
  tags: `научная фантастика, будущее,`
},
{
  Id: 4,
  name: `Еретики Дюны`,
  author: `Фрэнк Герберт`,
  genre: `научная фантастика`,
  date: `1984`,
  description: `Четвертый том цикла Дюна. События книги разворачиваются через полторы тысячи лет после Бога-императора Дюны. Вселенная вновь находится на грани больших перемен. `,
  rating: `7.2`,
  tags: `научная фантастика, будущее,`
},
{
  Id: 5,
  name: `Капитул Дюны`,
  author: `Фрэнк Герберт`,
  genre: `научная фантастика`,
  date: `1985`,
  description: `Последний роман Герберта в серии Дюна. Завершает серию исследований об истории человеческой цивилизации, истории золотого пути и о завершении исторического процесса.`,
  rating: `7.5`,
  tags: `научная фантастика, будущее,`
},
{
  Id: 6,
  name: `Основание`,
  author: `Айзек Азимов`,
  genre: `научная фантастика`,
  date: `1951`,
  description: `Основание сочетает в себе идеи о падении и подъеме империй, космической науке и социальной инженерии. Это история о том, как один человек предсказал падение Галактической Империи.`,
  rating: `8`,
  tags: `научная фантастика, будущее`
},
{
  Id: 7,
  name: `Основание и Империя`,
  author: `Айзек Азимов`,
  genre: `научная фантастика`,
  date: `1952`,
  description: `Продолжение “Основания”. Врожденно-гениальный военный стратег Теймурлан стремится противостоять ожидаемому краху и беспорядку, который, как предсказал Гарри Селдон, настанет через 500 лет.`,
  rating: `7.5`,
  tags: `научная фантастика, будущее`
},
{
  Id: 8,
  name: `Второе Основание`,
  author: `Айзек Азимов`,
  genre: `научная фантастика`,
  date: `1953`,
  description: `Перспективы первого Основания никогда не выглядели более безрадостными. Но склонность тиранна к самоанализу может дать небольшой шанс на спасение.`,
  rating: `8`,
  tags: `научная фантастика, будущее`
},
{
  Id: 9,
  name: `Кризис Основания`,
  author: `Айзек Азимов`,
  genre: `научная фантастика`,
  date: `1957`,
  description: `В книге происходят революции и контр-революции, и в центре внимания - персональные вопросы об идентичности, судьбе, и естественно, о власти.`,
  rating: `7.5`,
  tags: `научная фантастика, будущее`
},
{
  Id: 10,
  name: `Основание и Земля`,
  author: `Айзек Азимов`,
  genre: `научная фантастика`,
  date: `1986`,
  description: `Настоящие интриги и подозрения начинают просачиваться в научное общество Основания, как и сам Тревайз начинает задаваться вопросами о своей роли в грандиозном плане Гарри Селдона.`,
  rating: `8`,
  tags: `научная фантастика, будущее`
},
{
  Id: 11,
  name: `Девять принцев Амбера`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1970`,
  description: `Первый том цикла «Хроники Амбера». Главный герой - Корвин, принц Амбера, после долгого бессознательного состояния, обнаруживает, что потерял память и не помнит своего прошлого.`,
  rating: `8.5`,
  tags: `фэнтези`
},
{
  Id: 12,
  name: `Ружья Авалона`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1972`,
  description: `Начинается новая глава в эпической саге о Корвине, принце Амбера, борющемся за власть над таинственной и многомерной вселенной.`,
  rating: `8.5`,
  tags: `фэнтези`
},
{
  Id: 13,
  name: `Знак Единорога`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1975`,
  description: `Корвин пытается понять, на чей стороне он должен быть в грядущей войне между принцами Амбера, но тайна о роли единорога в их мирах и его союзнике на Авалоне могут оказать давление на масштабы войны.`,
  rating: `8.2`,
  tags: `фэнтези`
},
{
  Id: 14,
  name: `Рука Оберона`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1976`,
  description: `Корвин оказывается в центре битвы за контроль над невидимой Рукой Оберона — силой, считающейся источником всех миров.`,
  rating: `8.3`,
  tags: `фэнтези`
},
{
  Id: 15,
  name: `Владения Хаоса`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1978`,
  description: `Корвин доказал себе и принцам Амбера, что он — правильный король в беспокойные времена. Но у него остается последнее испытание: война с Хаосом.`,
  rating: `8.4`,
  tags: `фэнтези`
},
{
  Id: 16,
  name: `Карты судьбы`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1985`,
  description: `Начинается второй цикл о происхождении принцев Амбера. Главный герой, Мерлин, пытается разобраться в паутине семейных интриг и открыть тайну своего собственного происхождения.`,
  rating: `8.1`,
  tags: `фэнтези`
},
{
  Id: 17,
  name: `Кровь Амбера`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1986`,
  description: `Вторая книга второго цикла о принцах Амбера. Приключение Мерлина продолжаются на Земле и в Хаосе, между кем быть и кем родиться.`,
  rating: `8.1`,
  tags: `фэнтези`
},
{
  Id: 18,
  name: `Знак Хаоса`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1987`,
  description: `Действие происходит параллельно в нескольких мирах и волшебные артефакты играют важную роль в раскрытии тайны происхождения Мерлина.`,
  rating: `8`,
  tags: `фэнтези`
},
{
  Id: 19,
  name: `Рыцарь Теней`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1989`,
  description: `Мерлину предстоит доказать свою принадлежность к обоим мирам - Амберу и Хаосу, а также определить, насколько глубоки его связи со своим отцом, Корвином.`,
  rating: `7.9`,
  tags: `фэнтези`
},
{
  Id: 20,
  name: `Принц Хаоса`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1991`,
  description: `Финал цикла Хроник Амбера. Мерлину предстоит открыть истинную королеву Хаоса и определить свою роль в вечной борьбе за трон.`,
  rating: `8`,
  tags: `фэнтези`
},
{
  Id: 21,
  name: `Начало всех начал`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2003`,
  description: `Первый роман цикла "Богатыри". Никитин приоткрывает занавес над таинственным миром старинной Руси и ее богатырей.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 22,
  name: `Яфет`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2007`,
  description: `Яфет - всегда двигаемый жаждой знаний, неустанно ищет путь к укрощению стихий.`,
  rating: `7.4`,
  tags: `фэнтези`
},
{
  Id: 23,
  name: `Трое из Леса`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2004`,
  description: `Трое друзей переносятся в волшебный мир, где им приходится стать героями и спасти волшебный лес от порчи.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 24,
  name: `Трое в Песках`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2004`,
  description: `В поисках артефакта, который может вернуть их домой, наши герои оказываются в сердце пустыни.`,
  rating: `7.4`,
  tags: `фэнтези`
},
{
  Id: 25,
  name: `Трое и Боги`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2005`,
  description: `В заключительной книге трое героев узнают о причинах своего прибытия в магическом мире и раскрывают тайну своего происхождения.`,
  rating: `7.6`,
  tags: `фэнтези`
},
{
  Id: 26,
  name: `Трое в Долине`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2005`,
  description: `В продолжении серии герои отправляются в удивительное путешествие по волшебной долине.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 27,
  name: `Мрак`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2007`,
  description: `В этой книге герои встречаются с другой стороной волшебства и пытаются найти выход из нарастающего мрака.`,
  rating: `7.4`,
  tags: `фэнтези`
},
{
  Id: 28,
  name: `Передышка в Барбусе`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2004`,
  description: `В этом томе героям удается найти временный пристанище в городке Барбус, где они могут ненадолго отдохнуть от страстей и приключений.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 29,
  name: `Передышка не бывает долгой`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2002`,
  description: `Продолжение истории героев. Отдыха в Барбусе, к сожалению, было не так уж и много, как хотелось бы.`,
  rating: `7`,
  tags: `фэнтези`
},
{
  Id: 30,
  name: `Семеро Тайных`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2005`,
  description: `Книга, рассказывающая о самых таинственных и важных героях мира автора. Они - семеро великих, обладающих уникальными способностями и возможностями.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 31,
  name: `Изгой`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2002`,
  description: `Книга рассказывает историю героя, признанного изгоем, и о его пути к искуплению.`,
  rating: `7.3`,
  tags: `фэнтези`
},
{
  Id: 32,
  name: `Таргитай`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2001`,
  description: `Книга повествует о принце Таргитае - герое прежних времен, который столкнулся с невероятными испытаниями и опасными противниками.`,
  rating: `7.2`,
  tags: `фэнтези`
},
{
  Id: 33,
  name: `Таргитай-2. Освобождение`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2002`,
  description: `Продолжение приключений принца Таргитая - теперь ему предстоит сражаться за свою страну и свою любовь.`,
  rating: `7.4`,
  tags: `фэнтези`
},
{
  Id: 34,
  name: `Истребивший магию`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2003`,
  description: `Эпическая история о борьбе против великого зла, угрожающего уничтожить весь мир. В своем путешествии герой столкнется с преградами и испытаниями, которые проверят его на прочность.`,
  rating: `7.3`,
  tags: `фэнтези`
},
{
  Id: 35,
  name: `Фарамунд`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2010`,
  description: `Очередной фантастический роман Юрия Никитина знакомит читателей с героем по имени Фарамунд, противоборствующим могущественным силам тьмы.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 36,
  name: `Гиперборей`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2011`,
  description: `Интригующая история о мире, который предшествовал известной нам цивилизации. Это мир высоких технологий, магии и героических битв.`,
  rating: `7.1`,
  tags: `фэнтези`
},
{
  Id: 37,
  name: `Вещий Олег`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2012`,
  description: `Сюжет романа строится вокруг великого князя Олега, знаменитого предсказателя. Действие книги проходит во времена жестоких воин, смелых героев и темных чар.`,
  rating: `7`,
  tags: `фэнтези`
},
{
  Id: 38,
  name: `Битва за Царьград`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2013`,
  description: `Впечатляющая историческая сага о героических героях, отважно боровшихся за Царьград и судьбу всего христианского мира.`,
  rating: `7.3`,
  tags: `фэнтези`
},
{
  Id: 39,
  name: `Святой Грааль`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2015`,
  description: `Герои этого увлекательного произведения участвуют в событиях, связанных с поиском Святого Грааля - загадочного сосуда, обладающего необъяснимой мощью.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 40,
  name: `Стоунхендж`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2016`,
  description: `Эта книга переносит нас в эпоху древних цивилизаций и тайн, связанных со Стоунхенджем, одним из самых загадочных монументов в истории человечества.`,
  rating: `7.4`,
  tags: `фэнтези`
},
{
  Id: 41,
  name: `Откровение`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2018`,
  description: `Роман, передающий откровение, что истинная сила заключена в людях. Их вера, надежда и любовь - истинное богатство, которое может преобразовать мир.`,
  rating: `7.5`,
  tags: `фэнтези`
},
{
  Id: 42,
  name: `Возвращение Томаса`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2010`,
  description: `Томас возвращается в фентезийный мир, чтобы продолжить свои приключения и открывает новые тайны этого удивительного мира.`,
  rating: `7.1`,
  tags: `фэнтези`
},
{
  Id: 43,
  name: `Меч Томаса`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2010`,
  description: `Томас узнает о легендарном мече, который предназначен именно ему. С этим оружием он может стать настоящим героем и победить любого врага.`,
  rating: `7.2`,
  tags: `фэнтези`
},
{
  Id: 44,
  name: `Башня-2`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2009`,
  description: `Продолжение захватывающей истории о Башне и ее защитниках. В этой книге читатели узнают больше о таинственной Башне и угрозе, которую она представляет.`,
  rating: `7.3`,
  tags: `фэнтези`
},
{
  Id: 45,
  name: `Человек с топором`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2011`,
  description: `Приключенческая история о странствующем воине с топором, который обладает удивительной силой и бесстрашием.`,
  rating: `7.1`,
  tags: `фэнтези`
},
{
  Id: 46,
  name: `Зачеловек`,
  author: `Юрий Никитин`,
  genre: `фэнтези`,
  date: `2012`,
  description: `Оригинальный роман, в котором главный герой - человек, обладающий удивительной способностью превращаться в животное.`,
  rating: `7`,
  tags: `фэнтези`
},
{
  Id: 47,
  name: `Трудно быть богом`,
  author: `Братья Стругацкие`,
  genre: `научная фантастика`,
  date: `1964`,
  description: `В этой книге Братья Стругацкие изучают тему личной этики в контексте "антиутопии" - общества, в котором наблюдаются тоталитарные тенденции.`,
  rating: `8.4`,
  tags: `научная фантастика`
},
{
  Id: 48,
  name: `Понедельник начинается в субботу`,
  author: `Братья Стругацкие`,
  genre: `научная фантастика`,
  date: `1965`,
  description: `Удивительный мир Научного Института Волшебства и Чародейства описывается с грустным юмором. На первый взгляд, это добродушная шутка, но на самом деле - притча о научном поиске и личной свободе.`,
  rating: `8.5`,
  tags: `научная фантастика`
},
{
  Id: 49,
  name: `Пикник на обочине`,
  author: `Братья Стругацкие`,
  genre: `научная фантастика`,
  date: `1972`,
  description: `В этом романе о встрече с другой цивилизацией в первую очередь рассказывается о реакции людей на неопознанное и непостижимое, заброшенное здесь инопланетянами и оставшееся неизученным – люди боятся подойти к нему слишком близко.`,
  rating: `8.7`,
  tags: `научная фантастика`
},
{
  Id: 50,
  name: `За миллиард лет до конца света`,
  author: `Братья Стругацкие`,
  genre: `научная фантастика`,
  date: `1976`,
  description: `На этот раз обычные люди, ведущие обычную жизнь, сталкиваются с явлениями, которые не в состоянии понять или объяснить. Ни одной встречи, ни каких-либо сообщений от инопланетян - и всё же над всем витает ужасающая угроза.`,
  rating: `8.2`,
  tags: `научная фантастика`
},
{
  Id: 51,
  name: `Несвятые святые`,
  author: `Матер Тереза`,
  genre: `биография`,
  date: `1985`,
  description: `Сборник рассказов Матери Терезы, в которых она делится своими воспоминаниями о тех людях, с которыми она столкнулась в Калькутте, ибо именно через эти лица мы можем увидеть лицо Бога.`,
  rating: `8.0`,
  tags: `биография, религия`
},
{
  Id: 52,
  name: `Оргуправленческое мышление`,
  author: `Георгий Щедровицкий`,
  genre: `научная литература`,
  date: `1991`,
  description: `Книга посвящена проблематике развития типов мышления и представляет собой попытку построения модели "оргуправленческого мышления".`,
  rating: `7.5`,
  tags: `научная литература, психология`
},
{
  Id: 53,
  name: `Слова. Том I. С болью и любовью о современном человеке`,
  author: `Леонид Горбачев`,
  genre: `философия`,
  date: `2018`,
  description: `Книга вышла в рамках серии "Слова". В этом произведении автор делится своим видением жизни, духовного развития и осознания своего места в мире.`,
  rating: `7.2`,
  tags: `философия, самосознание`
},
{
  Id: 54,
  name: `Слова. Том II. Духовное пробуждение`,
  author: `Леонид Горбачев`,
  genre: `философия`,
  date: `2019`,
  description: `Второй том серии "Слова" посвящен духовному пробуждению и дальнейшему духовному росту человека.`,
  rating: `7.3`,
  tags: `философия, самосознание`
},
{
  Id: 55,
  name: `Слова. Том III. Духовная борьба`,
  author: `Леонид Горбачев`,
  genre: `философия`,
  date: `2020`,
  description: `Третий том "Слов" описывает внутренние противоречия и борьбу, которые возникают в процессе духовного роста и развития человека.`,
  rating: `7.4`,
  tags: `философия, самосознание`
},
{
  Id: 56,
  name: `Слова. Том IV. Семейная жизнь`,
  author: `Леонид Горбачев`,
  genre: `философия`,
  date: `2021`,
  description: `Четвертый том "Слов" представляет авторскую интерпретацию смысла семейной жизни и неоспоримой роли семьи в процессе духовного развития.`,
  rating: `7.6`,
  tags: `философия, самосознание`
},
{
  Id: 57,
  name: `Преступление и наказание`,
  author: `Федор Достоевский`,
  genre: `роман`,
  date: `1866`,
  description: `Многомерный роман Достоевского о жизненных перипетиях студента Родиона Раскольникова, который совершает убийство, оправдывая это своей выдающейся личностью и высокими целями.`,
  rating: `9.0`,
  tags: `роман, классика`
},
{
  Id: 58,
  name: `Двадцать тысяч лье под водой`,
  author: `Жюль Верн`,
  genre: `приключенческий роман`,
  date: `1870`,
  description: `Исследовательская экспедиция в неизведанное пространство океана встречает невиданных существ и открывает неизвестные глубины. Отправившись на поиски загадочного морского монстра, герои обнаруживают подводную лодку "Наутилус".`,
  rating: `8.4`,
  tags: `приключения, научная фантастика`
},
{
  Id: 59,
  name: `Старик и море`,
  author: `Эрнест Хемингуэй`,
  genre: `роман`,
  date: `1952`,
  description: `Это история о борьбе старика с самой мощной силой природы, большой марлиновой рыбой, которую он ловит на протяжении нескольких дней. В конечном итоге, она становится его моральной победой над старостью и одиночеством.`,
  rating: `8.3`,
  tags: `роман, классика`
},
{
  Id: 60,
  name: `Исповедь`,
  author: `Лев Толстой`,
  genre: `философский трактат`,
  date: `1882`,
  description: `Автобиографическая работа, в которой Толстой описывает свой духовный поиск и свои мысли о жизни, смерти и вере.`,
  rating: `8.1`,
  tags: `философия, автобиография`
},
{
  Id: 61,
  name: `Письма о добром и прекрасном`,
  author: `Дмитрий Лихачев`,
  genre: `научная литература`,
  date: `1989`,
  description: `В этом сборнике писем на разные темы, Лихачев делится своими мыслями о доброте, красоте, гуманизме и роли культуры в обществе.`,
  rating: `8.5`,
  tags: `философия, корреспонденция`
},
{
  Id: 62,
  name: `Отцы и дети`,
  author: `Иван Тургенев`,
  genre: `роман`,
  date: `1862`,
  description: `Роман о поколении 1860-х годов и конфликте между "отцами" и "детьми", представляющими два разных подхода к жизни и социальным сменам.`,
  rating: `7.9`,
  tags: `роман, классика`
},
{
  Id: 63,
  name: `Горе от ума`,
  author: `Александр Грибоедов`,
  genre: `комедия`,
  date: `1824`,
  description: `Сатирическая комедия о жизни русского общества в начале XIX века. Главный герой, Чацкий, является критиком модных тенденций и лицемерия.`,
  rating: `8.0`,
  tags: `драма, комедия, классика`
},
{
  Id: 64,
  name: `Портрет Дориана Грея`,
  author: `Оскар Уайльд`,
  genre: `философский роман`,
  date: `1890`,
  description: `Обучающая история юного Дориана Грея, который, под дурным влиянием своего наставника, заключает дьявольский договор, позволяющий ему сохранять молодость и красоту, в то время как его портрет стареет вместо него.`,
  rating: `8.8`,
  tags: `философия, готический роман, классика`
},
{
  Id: 65,
  name: `Аванта+ серия энциклопедий История`,
  author: `Аванта+`,
  genre: `энциклопедия`,
  date: `2007`,
  description: `Серия книг, которая даёт обзор основных периодов и событий в истории человечества, от древних цивилизаций до современности.`,
  rating: `7.5`,
  tags: `история`
},
{
  Id: 66,
  name: `Туманность Андромеды`,
  author: `Иван Ефремов`,
  genre: `научная фантастика`,
  date: `1957`,
  description: `Цивилизация Земли далекого будущего оказывается на пороге встречи с другой разумной расой в галактике Андромеда.`,
  rating: `8.7`,
  tags: `научная фантастика`
},
{
  Id: 67,
  name: `Час быка`,
  author: `Иван Ефремов`,
  genre: `научная фантастика`,
  date: `1970`,
  description: `В этом романе чужое поколение счело себя богами, они построили культ вокруг себя, и лишь участники Сопротивления решили остановить их.`,
  rating: `8.3`,
  tags: `научная фантастика`
},
{
  Id: 68,
  name: `Люди которые играют в игры`,
  author: `Эрик Бёрн`,
  genre: `психология`,
  date: `2005`,
  description: `Книга, основанная на теории игр, иллюстрирует, как игры, в которые мы играем, забрасывают нас в петли повторяющегося поведения и как научиться это преодолевать.`,
  rating: `7.5`,
  tags: `психология`
},
{
  Id: 69,
  name: `Игры в которые играют люди`,
  author: `Эрик Бёрн`,
  genre: `психология`,
  date: `2007`,
  description: `Руководство по психологии межличностных отношений, обсуждающее игры, которые люди играют в своих повседневных взаимоотношениях.`,
  rating: `7.6`,
  tags: `психология`
},
{
  Id: 70,
  name: `7 навыков высокоэффективных людей`,
  author: `Стивен Кови`,
  genre: `самосовершенствование`,
  date: `1989`,
  description: `Книга предлагает семь принципов для эффективного и продуктивного жизненного пути, основанных на принципах личной ответственности, приоритета, взаимной зависимости и понимания других.`,
  rating: `8.1`,
  tags: `самосовершенствование, бизнес, психология`
},
{
  Id: 71,
  name: `Заново изобретая колесо`,
  author: `Персиваль Бронвен`,
  genre: `научная литература`,
  date: `2017`,
  description: `Автор обсуждает, как важные изобретения и инновации произошли в истории, и анализирует процесс их создания и влияние на общество.`,
  rating: `7.6`,
  tags: `научная литература, история, технологии`
},
{
  Id: 72,
  name: `Государь`,
  author: `Никколо Макиавелли`,
  genre: `политическая теория`,
  date: `1513`,
  description: `Основной труд Макиавелли, в котором он представляет свои взгляды на политику и управление государством, и в котором он высказывает свою знаменитую теорию о том, что цель оправдывает средства.`,
  rating: `8.0`,
  tags: `политика, классика, философия`
},
{
  Id: 73,
  name: `Вкус`,
  author: `Боб Холмс`,
  genre: `научная литература`,
  date: `2017`,
  description: `Холмс исследует, как мы воспринимаем вкус, как он определяется и как разница в восприятии вкусов между людьми объясняется генетикой и культурой.`,
  rating: `7.8`,
  tags: `наука, гастрономия`
},
{
  Id: 74,
  name: `Князь Света`,
  author: `Роджер Желязны`,
  genre: `фэнтези`,
  date: `1967`,
  description: `Роман описывает борьбу между светом и тьмой, богами и смертными. Главный герой - рожденный князем света, но выросший в мире смертных - берет на себя задачу свержения старых богов.`,
  rating: `8.1`,
  tags: `фэнтези`
},
{
  Id: 75,
  name: `Атлант расправил плечи`,
  author: `Айн Рэнд`,
  genre: `философский роман`,
  date: `1957`,
  description: `В этом романе Рэнд освещает свою философию об идеальном существовании и возвеличивает концепцию индивидуализма.`,
  rating: `8.4`,
  tags: `философия, роман`
},
{
  Id: 76,
  name: `Таис Афинская`,
  author: `Иван Ефремов`,
  genre: `исторический роман`,
  date: `1972`,
  description: `История жизни Таис, афинской гетеры, которая стала одной из самых могущественных женщин эпохи, женой персидского царя.`,
  rating: `8.3`,
  tags: `историческая литература`
},
{
  Id: 77,
  name: `1984`,
  author: `Джордж Оруэлл`,
  genre: `антиутопия`,
  date: `1949`,
  description: `Классический роман Оруэлла представляет собой дистопию об обществе, которым управляет тоталитарный режим. В нем развивается тема подавления индивидуальности и свободы.`,
  rating: `8.9`,
  tags: `фантастика, классика, антиутопия`
},
{
  Id: 78,
  name: `Над пропастью во ржи`,
  author: `Джером Сэлинджер`,
  genre: `роман`,
  date: `1951`,
  description: `Роман рассказывает о нескольких днях из жизни шестнадцатилетнего Холдена Колфилда, который бродит по Нью-Йорку, пытаясь найти свой путь в жизни и смысл во взрослении.`,
  rating: `8.2`,
  tags: `роман, классика`
},
{
  Id: 79,
  name: `Иудейская война`,
  author: `Иосиф Флавий`,
  genre: `исторический рассказ`,
  date: `75`,
  description: `Роман рассказывает о нескольких днях из жизни шестнадцатилетнего Холдена Колфилда, который бродит по Нью-Йорку, пытаясь найти свой путь в жизни и смысл во взрослении.`,
  rating: `8.2`,
  tags: `роман, классика`
},

]
  
  export const tags = [
    `научная фантастика`,
    `будущее`,
    `фэнтези`,
  ];


// По образцу объектов ниже сделай такие же объекты для книг: Дети Дюны, Бог император Дюны, Еретики Дюны, Капитул Дюны, Основание (Айзек Азимов), 
// Основание и Империя, Второе Основание, Кризис Основания, Основание и Земля, Девять принцев Амбера, Ружья Авалона, Знак Единорога, Рука Оберона, 
// Владения Хаоса, Карты судьбы, Кровь Амбера, Знак Хаоса, Рыцарь Теней, Принц Хаоса, Начало всех начал (Юрий Никитин), Яфет (Юрий Никитин), 
// Трое из Леса (Юрий Никитин), Трое в Песках (Юрий Никитин), Трое и Боги (Юрий Никитин), Трое в Долине (Юрий Никитин), Мрак (Юрий Никитин), 
// Передышка в Барбусе (Юрий Никитин), Передышка не бывает долгой (Юрий Никитин), Семеро Тайных (Юрий Никитин), Изгой (Юрий Никитин), 
// Таргитай (Юрий Никитин), Таргитай-2. Освобождение (Юрий Никитин), Истребивший магию (Юрий Никитин), Фарамунд (Юрий Никитин), Гиперборей (Юрий Никитин), 
// Вещий Олег (Юрий Никитин), Битва за Царьград (Юрий Никитин), Святой Грааль (Юрий Никитин), Стоунхендж (Юрий Никитин), Откровение (Юрий Никитин), 
// Возвращение Томаса (Юрий Никитин), Меч Томаса (Юрий Никитин), Башня-2 (Юрий Никитин), Человек с топором (Юрий Никитин), Зачеловек (Юрий Никитин), 
// Трудно быть богом (Стругацкие), Понедельник начинается в субботу (Стругацкие), Пикник на обочине (Стругацкие), За миллиард лет до конца света (Стругацкие), 
// Несвятые святые, Оргуправленческое мышление (Щедровицкий), Слова. Том I. С болью и любовью о современном человеке, Слова. Том II. Духовное пробуждение, 
// Слова. Том III. Духовная борьба, Слова. Том IV. Семейная жизнь, Преступление и наказание, Двадцать тысяч лье под водой, Старик и море, Исповедь (Толстой), 
// Письма о добром и прекрасном (Лихачев), Отцы и дети, Горе от ума, Портрет Дориана Грея, Аванта+ серия энциклопедий История, Туманность Андромеды (Ефремов), 
// Час быка (Ефремов), Люди которые играют в игры, Игры в которые играют люди, 7 навыков высокоэффективных людей, Заново изобретая колесо (Персиваль Бронвен), 
// Государь (Макиавелли), Вкус (Боб Холмс), Князь Света (Желязны), Атлант расправил плечи, Таис Афинская (Ефремов), 1984 (Джордж Оруэлл), Над пропастью во ржи