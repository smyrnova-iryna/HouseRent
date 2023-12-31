const dataUkr = {
    header: 
            {logo: "ЛОГОТИП ВАШЕЙ КОМПАНИИ", 
            phoneNumber: "+38000000000", 
            email: "email.com", 
            callback: 
                    {text: "Передзвонити", 
                    header: "ЗВОРОТНИЙ ДЗВІНОК", 
                    message: "Мы зв'яжемося з Вами якомога швидше!", 
                    nameText: "Им'я", 
                    phoneText: "Номер телефону", 
                    buttonText: "ВІДПРАВИТИ", 
                    dataMessage: "Дані будуть використані тільки для контакту з Вами!"} 
            },
    menuPaths: 
            {main: "/HouseRent", 
            advantages: "/HouseRent#advantages",
            offices: "/HouseRent#offices",
            promotions: "/HouseRent/promotions", 
            contacts: "/HouseRent#contacts",
            privacypolicy: "/HouseRent/privacypolicy",
            floorPages: {
                secondFloor: "/HouseRent/offices/second_floor",
                thirdFloor: {
                        firstPart: "/HouseRent/offices/third_floor/first_area",
                        secondPart: "/HouseRent/offices/third_floor/second_area",
                        thirdPart: "/HouseRent/offices/third_floor/third_area",
                        fourthPart: "/HouseRent/offices/third_floor/fourth_area",
                        fifthPart: "/HouseRent/offices/third_floor/fifth_area",
                        sixthPart: "/HouseRent/offices/third_floor/sixth_area",
                },
                fourthFloor: "/HouseRent/offices/fourth_floor",
            }, 
            error: "*"},
    menuItems: 
            {main: "Головна",
            advantages: "Переваги", 
            offices: "Офіси", 
            promotions: "Акції", 
            contacts: "Контакти"},
    main: 
        {mainTitle: ["О", "Р", "Е", "Н", "Д", "А"],
        mainInfo: 
                ["Оренда офісів", 
                "в центрі міста",
                "нежитловий фонд",
                "від одного кабінета до цілого поверху"],
                mainTextHeader: "Ваш бізнес в комфортних умовах за розумну ціну",
                mainText: `Предоставляем в аренду офисы по улице Гоголя, дом 15 (корпус В-4), город Днепр, Украина. Объект расположен в тихом месте, 
                в квартале от проспекта Дмитрия Яворницкого - главного проспекта города, что делает его максимально доступным. Пешеходы могут 
                воспользоваться услугами городского транспорта, остановки которого находятся рядом. В нескольких минутах ходьбы расположены кафе, 
                торгово-развлекательные центры, супермаркеты, отделение "Новой почты", Екатеринославский бульвар, парк ім. Т.Г.Шевченко. Наше предложение 
                - отличная возможность стать участником деловой жизни Днепра и пользоваться всеми благами развитой инфраструктуры центрального 
                района города.`},
    advantages: 
            {mainTitle: "Наші переваги",
            mainInfo: 
                    ["в центре города (вход со двора)", 
                    "удобная транспортная и пешеходная развязка",
                    "парковка во дворе",
                    "тихий район, спокойная обстановка",
                    "нежилой фонд",
                    "два ввода электроснабжения",
                    "здание расположено в окружении коммерческой недвижимости",
                    "аренда от одного собственника",
                    "кирпичное здание",
                    "кабинетная система / блочная система / целый этаж",
                    "офисы разной площади (от 15 до 450 кв.м.)",
                    "автономное газовое отопление",
                    "80% комнат оборудовано кондиционерами",
                    "широкие коридоры, большие окна, светлые кабинеты",
                    "высота потолков от 3 метров",
                    "качественный ремонт",
                    "базовая офисная отделка",
                    "полный пакет документов (арендодатель - неплательщик НДС)",
                    "работа с любыми категориями арендаторов",
                    "доступ с 08:00 до 20:00, в субботу до 16:00, в воскресенье по договоренности"]},
    offices: 
            {
                secondFloor: {
                   
                },
                thirdFloor: {
                    title: "Третій поверх",
                    firstArea: {
                        title: "ОФИС № 30-31",
                        statusTitle: ["В", "І", "Л", "Ь", "Н", "И", "Й"],
                        advantages: ["площадь 39,5 кв м", "3 этаж",
                                "кондиционер",
                                "высота потолков от 3 метров",
                                "большие окна / светлые кабинеты", 
                                "базовая офисная отделка / отделка после арендатора",
                                "покрытие пола – линолеум",
                                "широкий коридор",
                                "автономное газовое отопление в здании",
                                "два ввода электроснабжения в здании",
                                "полный пакет документов (арендодатель - неплательщик НДС)",
                                "работа с любыми категориями арендаторов",
                                "доступ с 08:00 до 20:00, в субботу до 16:00, в воскресенье по договоренности"
                        ],
                        // commonAdvantages: ["автономное газовое отопление на здание",
                        //         "электроснабжение – 2 ввода",
                        //         "доступ с 08:00 до 20:00, в субботу до 16:00, в воскресенье по договоренности",
                        //         "полный пакет документов / Арендодатель неплательщик НДС / работаем с любыми категориями Арендаторов"
                        // ],  
                    } 
                },
                fourthFloor: {
                    title: "Четвертий поверх"    
                },
            },
    promotions: 
            {},    
    contacts: 
            {address: 
                    {heading: 'Контакты UAB "FerroMetals":', 
                    text: `Лайсвес пр. 60-1107,
    LT-05120 Вильнюс, Литва`, 
                    detailsHeading: "Наши реквизиты:", 
                    details: `Paysera LT, UAB
    Пилайтес пр. 16, Вильнюс, LT-04352, Литва
    SWIFT-код: EVIULT2VXXX
    IBAN: LT173500010015992602`}, 
                    feedback: 
                            {adaptiveButtonText: "Обратная связь",
                            heading: "Форма обратной связи", 
                            description: "Мы свяжемся с Вами как можно скорее!", 
                            nameInputText: "Ваше ім'я", 
                            contactsInputText: "Ваші контакти",  
                            messageInputText: "Текст повідомлення",
                            bottomText: "Данные будут использованы только для контакта с Вами!", 
                            buttonText: "ОТПРАВИТЬ",
                            loadingText: "Отправка...",
                            resultText: "Ваше сообщение успешно отправлено!",
                            errorText: "Что-то пошло не так! Пожалуйста, попробуйте снова!"}
            },
    errorPath: "*",
    errorMessage: "404 ОШИБКА!!!",
    returnMessage: "Вернуться в Главное",
    footer:    
            {copyright: '© 2023, _________________________________', 
            privacyPolicy: "Политика конфиденциальности", 
            siteDeveloper: ["Разработчик сайта: ", "Iryna Smyrnova"], 
            address: `Лайсвес пр. 60-1107,
LT-05120 Вильнюс, Литва`},
            privacyPolicy: `ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ

Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую данный сайт, на котором размещен текст этой Политики конфиденциальности, может получить о Пользователе, а также любых программ и продуктов, размещенных на нем.
    
1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
    
1.1. В настоящей Политике конфиденциальности используются следующие термины:
    
1.1.1. «Администрация сайта» – уполномоченные сотрудники на управления сайтом, действующие от его имени, которые организуют и (или) осуществляет обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.
    
1.1.2. «Персональные данные» — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
    
1.1.3. «Обработка персональных данных» — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
    
1.1.4. «Конфиденциальность персональных данных» — обязательное для соблюдения Администрацией сайта требование не допускать их умышленного распространения без согласия субъекта персональных данных или наличия иного законного основания.
    
1.1.5. «Пользователь сайта (далее Пользователь)» – лицо, имеющее доступ к сайту, посредством сети Интернет и использующее данный сайт для своих целей.
    
1.1.6. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.
    
1.1.7. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу IP.
    
2. ОБЩИЕ ПОЛОЖЕНИЯ
    
2.1. Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.
    
2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта.
    
2.3. Настоящая Политика конфиденциальности применяется только к данному сайту. Администрация сайта не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на данном сайте.
    
2.4. Администрация сайта не проверяет достоверность персональных данных, предоставляемых Пользователем сайта.
    
3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ
    
3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по умышленному неразглашению персональных данных, которые Пользователь предоставляет по разнообразным запросам Администрации сайта (например, при регистрации на сайте, оформлении заказа, подписки на уведомления и т.п).
    
3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения специальных форм на Сайте и обычно включают в себя следующую информацию:
    
3.2.1. фамилию, имя, отчество Пользователя;
    
3.2.2. контактный телефон Пользователя;
    
3.2.3. адрес электронной почты (e-mail);
    
3.2.4. место жительство Пользователя и другие данные.
    
3.3. Администрация сайта также принимает усилия по защите Персональных данных, которые автоматически передаются в процессе посещения страниц сайта:
    
IP адрес;
    
информация из cookies;
    
информация о браузере (или иной программе, которая осуществляет доступ к сайту);
    
время доступа;
    
посещенные адреса страниц;
    
реферер (адрес предыдущей страницы) и т.п.
    
3.3.1. Отключение cookies может повлечь невозможность доступа к сайту.
    
3.3.2. Сайт осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация используется с целью выявления и решения технических проблем, для контроля корректности проводимых операций.
    
3.4. Любая иная персональная информация неоговоренная выше (история заказов, используемые браузеры и операционные системы и т.д.) не подлежит умышленному разглашению, за исключением случаев, предусмотренных в п.п. 5.2. и 5.3. настоящей Политики конфиденциальности.
    
4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ
    
4.1. Персональные данные Пользователя Администрация сайта может использовать в целях:
    
4.1.1. Идентификации Пользователя, зарегистрированного на сайте, для оформления заказа и (или) заключения Договора.
    
4.1.2. Предоставления Пользователю доступа к персонализированным ресурсам сайта.
    
4.1.3. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования сайта, оказания услуг, обработка запросов и заявок от Пользователя.
    
4.1.4. Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества.
    
4.1.5. Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.
    
4.1.6. Создания учетной записи для совершения заказов, если Пользователь дал согласие на создание учетной записи.
    
4.1.7. Уведомления Пользователя сайта о состоянии Заказа.
    
4.1.8. Обработки и получения платежей.
    
4.1.9. Предоставления Пользователю эффективной клиентской и технической поддержки при возникновении проблем, связанных с использованием сайта.
    
4.1.10. Предоставления Пользователю с его согласия, обновлений продукции, специальных предложений, информации о ценах, новостной рассылки и иных сведений от имени сайта или от имени партнеров сайта.
    
4.1.11. Осуществления рекламной деятельности с согласия Пользователя.
    
4.1.12. Предоставления доступа Пользователю на сторонние сайты или сервисы партнеров данного сайта с целью получения их предложений, обновлений или услуг.
    
5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ
    
5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
    
5.2. Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные третьим лицам, в частности, курьерским службам, организациями почтовой связи, операторам электросвязи, исключительно в целях выполнения заявок Пользователя, оформленных на сайте, в рамках Договора публичной оферты
    
5.3. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти только по основаниям и в порядке, установленным действующим законодательством.
    
6. ОБЯЗАТЕЛЬСТВА СТОРОН
    
6.1. Пользователь обязуется:
    
6.1.1. Предоставить корректную и правдивую информацию о персональных данных, необходимую для пользования сайтом.
    
6.1.2. Обновить или дополнить предоставленную информацию о персональных данных в случае изменения данной информации.
    
6.1.3. Принимать меры для защиты доступа к своим конфиденциальным данным, хранящимся на сайте.
    
6.2. Администрация сайта обязуется:
    
6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.
    
6.2.2. Не разглашать персональных данных Пользователя, за исключением п.п. 5.2. и 5.3. настоящей Политики Конфиденциальности.
    
6.2.3. Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента обращения или запроса Пользователя или его законного представителя либо уполномоченного органа по защите прав субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или неправомерных действий.
    
7. ОТВЕТСТВЕННОСТЬ СТОРОН
    
7.1. Администрация сайта несёт ответственность за умышленное разглашение Персональных данных Пользователя в соответствии с действующим законодательством, за исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики Конфиденциальности
    
7.2. В случае утраты или разглашения Персональных данных Администрация сайта не несёт ответственность, если данная конфиденциальная информация:
    
7.2.1. Стала публичным достоянием до её утраты или разглашения.
    
7.2.2. Была получена от третьей стороны до момента её получения Администрацией сайта.
    
7.2.3. Была получена третьими лицами путем несанкционированного доступа к файлам сайта.
    
7.2.4. Была разглашена с согласия Пользователя.
    
7.3. Пользователь несет ответственность за правомерность, корректность и правдивость предоставленной Персональных данных в соответствии с действующим законодательством.
    
8. РАЗРЕШЕНИЕ СПОРОВ
    
8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем сайта и Администрацией сайта, обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).
    
8.2. Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.
    
8.3. При не достижении соглашения спор будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством.
    
8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется действующее законодательство.
    
9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ
    
9.1. Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.

9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.`
};

export default dataUkr;