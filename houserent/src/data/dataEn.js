const dataEn = {
    header: 
            {logo: "HERE IS COMPANY'S LOGO", 
            phoneNumber: "+38000000000", 
            email: "email.com", 
            callback: 
                    {text: "Callback", 
                    header: "CALLBACK", 
                    message: "We will contact you shortly!", 
                    nameText: "Name", 
                    phoneText: "Phone number", 
                    buttonText: "SUBMIT", 
                    dataMessage: "The data will only be used to contact you!"} 
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
            {main: "Main", 
            advantages: "Advantages", 
            offices: "Offices", 
            promotions: "Promotions", 
            contacts: "Contacts"},
    main: 
        {mainTitle: ["R", "E", "N", "T", "I", "N", "G"],
        mainInfo: 
                ["Offices renting", 
                "downtown", 
                "нежитловий фонд", 
                "from one room to whole floor"],
                mainTextHeader: "Your business в комфортных условиях за разумную цену",
                mainText: `Предоставляем в аренду офисы по улице Гоголя, дом 15 (корпус В-4), город Днепр, Украина. Объект расположен в тихом месте, 
                в квартале от проспекта Дмитрия Яворницкого - главного проспекта города, что делает его максимально доступным. Пешеходы могут 
                воспользоваться услугами городского транспорта, остановки которого находятся рядом. В нескольких минутах ходьбы расположены кафе, 
                торгово-развлекательные центры, супермаркеты, отделение "Новой почты", Екатеринославский бульвар, парк ім. Т.Г.Шевченко. Наше предложение 
                - отличная возможность стать участником деловой жизни Днепра и пользоваться всеми благами развитой инфраструктуры центрального 
                района города.`},
    advantages: 
            {mainTitle: "Our advantages",
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
                    title: "Third floor",
                    firstArea: {
                        title: "ОФИС № 30-31",
                        statusTitle: ["A", "V", "A", "I", "L", "A", "B", "L", "E" ],
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
                        commonAdvantages: ["автономное газовое отопление на здание",
                        "электроснабжение – 2 ввода",
                        "доступ с 08:00 до 20:00, в субботу до 16:00, в воскресенье по договоренности",
                        "полный пакет документов / Арендодатель неплательщик НДС / работаем с любыми категориями Арендаторов"
                ],  
                    }       
                },
                fourthFloor: {
                    title: "Fourth floor"    
                },
            },
    promotions: 
            {},
    contacts: 
            {address: 
                    {heading: 'Contacts of UAB "FerroMetals":', 
                    text: `Laisvės pr. 60-1107,
    LT-05120 Vilnius, Lithuania`, 
                    detailsHeading: "Our details:", 
                    details: `Paysera LT, UAB
    Pilaitės pr. 16, Vilnius, LT-04352, Lithuania
    SWIFT code: EVIULT2VXXX
    IBAN: LT173500010015992602`}, 
            feedback: 
                    {adaptiveButtonText: "Contact us",
                    heading: "Feedback form", 
                    description: "We will contact you soon!", 
                    nameInputText: "Your name", 
                    contactsInputText: "Your contacts",  
                    messageInputText: "Your message",
                    bottomText: "The data will only be used to contact you!", 
                    buttonText: "SEND MESSAGE",
                    loadingText: "Sending...",
                    resultText: "Your data was sucessfully sent!",
                    errorText: "Something went wrong! Please, try again!"}
            },
    errorPath: "*",
    errorMessage: "404 ERROR!!!",
    returnMessage: "Return Main",
    footer: {copyright: '© 2023, _____________________', 
            privacyPolicy: "Privacy policy", 
            siteDeveloper: ["Site developer: ", "Iryna Smyrnova"], 
            address: `Laisvės pr. 60-1107,
LT-05120 Vilnius, Lithuania`},
            privacyPolicy: `PRIVACY POLICY

This Privacy Policy of personal data (hereinafter referred to as the Privacy Policy) applies to all information that this website, which hosts the text of this Privacy Policy, can receive about the User, as well as any programs and products hosted on it.
    
1. DEFINITION OF TERMS
    
1.1. This Privacy Policy uses the following terms:
    
1.1.1. «Website Administration» are the authorized employees to manage the website, acting on its behalf, who organize and (or) carry out the processing of personal data, as well as determine the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data.
    
1.1.2. «Personal data» is any information relating to a directly or indirectly identified or identifiable physical person (subject of personal data).
    
1.1.3. «Processing of personal data» is any action (operation) or a set of actions (operations) performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.
    
1.1.4. «Confidentiality of personal data» is a mandatory requirement for the Website Administration to prevent their intentional distribution without the consent of the subject of personal data or other legal grounds.
    
1.1.5. «Website User (hereinafter referred to as the User)" is a person who has access to the website via the Internet and uses this website for their own purposes.
    
1.1.6. «Cookies» is a small piece of data sent by a web server and stored on the user's computer, which the web-client or the web-browser sends to the web-server in an HTTP request each time it tries to open a page of the relevant website.
    
1.1.7. «IP address» is a unique network address of a node in a computer network built using the IP protocol.
    
2. GENERAL PROVISIONS
    
2.1. The User's use of the website means the acceptance of this Privacy Policy and the terms of processing the User's personal data.
    
2.2. In the case of disagreement with the terms of the Privacy Policy, the User must stop using the website.
    
2.3. This Privacy Policy applies only to this website. The website administration does not control and is not responsible for third-party websites to which the User can follow the links available on this website.
    
2.4. The website administration does not verify the accuracy of personal data provided by the Website User.
    
3. SUBJECT OF THE PRIVACY POLICY
    
3.1. This Privacy Policy establishes the obligations of the Website Administration for the deliberate non-disclosure of personal data that the User provides at various requests of the Website Administration (for example, when registering on the website, placing an order, subscribing to notifications, etc.).
    
3.2. Personal data authorized for processing under this Privacy Policy is provided by the User by filling out special forms on the Website and usually includes the following information:
    
3.2.1. surname, name, patronymic of the User;
    
3.2.2. contact phone number of the User;
    
3.2.3. email address (e-mail);
    
3.2.4. place of residence of the User and other data.
    
3.3. The website administration also takes efforts to protect the Personal data that is automatically transmitted in the process of visiting the website pages:
    
IP address;
    
information from cookies;
    
information about the browser (or other program that accesses the website);
    
access time;
    
visited page addresses;
    
referrer (address of the previous page), etc.
    
3.3.1. Disabling cookies may result in the inability to access the website.
    
3.3.2. The website collects statistics about the IP addresses of its visitors. This information is used to identify and solve technical problems, to control the correctness of ongoing operations.
    
3.4. Any other personal information not specified above (order history, browsers and operating systems used, etc.) is not subject to deliberate disclosure, except as provided in p. 5.2. and 5.3. of this Privacy Policy.
    
4. PURPOSES OF COLLECTING THE USER'S PERSONAL INFORMATION
    
4.1. The User's personal data may be used by the Website Administration for the following purposes:
    
4.1.1. Identification of the User registered on the website for placing an order and (or) concluding an Agreement.
    
4.1.2. Providing the User with access to personalized resources of the website.
    
4.1.3. Establishing feedback with the User, including sending notifications, requests regarding the website use, services provision, processing requests and applications from the User.
    
4.1.4. Determining the User’s location to ensure security, prevent fraud.
    
4.1.5. Confirmation of the accuracy and completeness of personal data provided by the User.
    
4.1.6. Creating an account for making orders, if the User has agreed to create an account.
    
4.1.7. Notifications of the Website User about the status of the Order.
    
4.1.8. Processing and receiving payments.
    
4.1.9. Providing the User with effective customer and technical support in the case of problems related to the website use.
    
4.1.10. Providing the User with his consent, product updates, special offers, pricing information, newsletters and other information on behalf of the website or on behalf of the website partners.
    
4.1.11. Implementation of advertising activities with the User’s consent.
    
4.1.12. Granting access to the User to third-party websites or services of this website partners in order to receive their offers, updates or services.
    
5. METHODS AND TERMS OF PROCESSING PERSONAL INFORMATION
    
5.1. The processing of the User's personal data is carried out without term limitation, in any legal way, including in personal data information systems using automation tools or without using such tools.
    
5.2. The User agrees that the Website Administration has the right to transfer personal data to third parties, in particular, courier services, mailing organizations, telecommunications operators, exclusively for the purpose of fulfilling the User's requests made on the website under the Public Offer Agreement.
    
5.3. The User's personal data may be transferred to authorized state authorities only on the grounds and in the order established by applicable law.
    
6. OBLIGATIONS OF THE PARTIES
    
6.1. The User is obliged to:
    
6.1.1. Provide correct and truthful information about personal data necessary to use the website.
    
6.1.2. Update or supplement the provided information about personal data in the case of changes in this information.
    
6.1.3. Take measures to protect access to his confidential data stored on the website.
    
6.2. The website administration is obliged to:
    
6.2.1. Use the information received exclusively for the purposes specified in p. 4 of this Privacy Policy.
    
6.2.2. Do not disclose the User's personal data, with the exception of p. 5.2. and 5.3. of this Privacy Policy.
    
6.2.3. Block personal data relating to the relevant User from the moment of application of the User or his legal representative or the authorized body for the protection of the rights of personal data subjects for the period of verification, in the case of identification of inaccurate personal data or illegal actions.
    
7. RESPONSIBILITY OF THE PARTIES
    
7.1. The website administration is responsible for the deliberate disclosure of the User's Personal Data in accordance with applicable law, with the exception of cases provided for in p. 5.2., 5.3. and 7.2. of this Privacy Policy
    
7.2. In the case of loss or disclosure of Personal Data, the Website Administration is not responsible if this confidential information:
    
7.2.1. Became publicly known before its loss or disclosure.
    
7.2.2. Was received from a third party until it was received by the Website Administration.
    
7.2.3. Was obtained by third parties through unauthorized access to the website files.
    
7.2.4. Was disclosed with the User’s consent.
    
7.3. The User is responsible for the legitimacy, correctness and truthfulness of the provided Personal Data in accordance with applicable law.
    
8. DISPUTES RESOLUTION
    
8.1. Before going to court with a claim on disputes arising from the relationship between the Website User and the Website Administration, it is mandatory to submit a claim (a written proposal for a voluntary settlement of the dispute).
    
8.2. The claim recipient, within 30 calendar days from the date of the claim receipt, notifies the claimant in writing of the results of the claim consideration.
    
8.3. If an agreement is not reached, the dispute will be referred to the judicial authority in accordance with applicable law.
    
8.4. The current legislation applies to this Privacy Policy and the relationship between the User and the Website Administration.
    
9. ADDITIONAL TERMS
    
9.1. The website administration has the right to make changes to this Privacy Policy without the User’s consent.
    
9.2. The new Privacy Policy comes into legal force from the moment it is posted on the Website, unless otherwise provided by the new edition of the Privacy Policy.`
};

export default dataEn;