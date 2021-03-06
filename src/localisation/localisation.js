// import LocalizedStrings from 'react-localization';

// localization already moved to backend

export let strings = {

// export let strings = new LocalizedStrings({
  EN: {
    intro_page: {
      complete_field_warning: 'The field must be filled correctly',
      limit_warning_unauthorized: 'You have exhausted the limit of free checks per day (3 times). In order to increase the limit to 30 checks register or log in, it will take no more than a minute.',
      limit_warning_authorized: 'You have exhausted the limit of free checks per day (30 times).',
      intro_header: "Where to start a used car search?",
      intro_subheader: "Checking the car with the vin code is the first step when buying",
      intro_header__input_placeholder: "Enter your VIN / car number / link on AUTO.RIA",
      intro_header__input_substring: "The vin code will be checked on the partner's website",
      intro_header_btn_check: "Check car",
      intro_header_desc_item_1: "Enter VIN code",
      intro_header_desc_item_2: "Car info search",
      intro_header_desc_item_3: "Pay",
      intro_header_desc_item_4: "Get a report",

      price_block_header: "Found a good car?",
      price_block_subheader: "Make sure this is true! Only an on-site inspection will show the real condition of the car!",
      price_block_card_1_header: "Preliminary check",
      price_block_card_2_header: "On-site check",
      price_block_card_3_header: "Service station",
      price_block_card_1_string_1: "search history",
      price_block_card_1_string_2: "legal check",
      price_block_card_1_string_3: "feasibility assessment",
      price_block_card_2_string_1: "body checking",
      price_block_card_2_string_2: "computer diagnostics",
      price_block_card_2_string_3: "search for hidden defects",
      price_block_card_3_string_1: "body inspection",
      price_block_card_3_string_2: "inspection parts and aggregates",
      price_block_card_3_string_3: "computer diagnostics",
      price_block_card_currency: "uah",
      price_block_card_btn: "Learn more",
      consultation_block_header: "No time to search for a car?",
      consultation_block_subheader: "Trust it for us - pick it full constraction",
      consultation_block_btn: "Order a consultation"
    },
    footer: {
      footer_btn: "Learn more",
      company_information: " Privacy Policy. All rights reserved.",
      footer_phone: "+38096 470 27 00",
      footer_list_item_1: "Search by VIN ",
      footer_list_item_2: "VIN code",
      footer_list_item_3: "Car review",
      footer_list_item_4: "Full constraction car",
      footer_text: " is a service for checking VIN code, saving you money. Any additional information can help you choose the right car or negotiate a better price."
    },
    header: {
      header_vin_item: "VIN code",
      header_reviews_item: "Car review",
      header_full_constructor_item: "Full construction",
      header_blog_item: "Blog",
      header_enter_item: "Sign In",
      header_exit_item: "Sign Out",
      header_home_item: "Profile",
      header_btn_call: "Order a call"
    },
    form_login: {
      nav_item_sign_in: "Sign In",
      nav_item_sign_up: "Sign Up",
      email_label: "Email",
      password_label: "Password",
      login_label: "Login",
      email_sublabel: "We'll never share your email with anyone else."
    },
    result_page: {
      error_submessage: "Search for your request",
      error_link: "https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=",
      error_message: "Unfortunately, your data did not match any of the options.",
      result_page_header: "That's what we found by VIN",
      result_page_cards_block_header: "Get a detailed report and find out the truth",
      result_page_card_1_header: "Full car scan by VIN number from Europe and the USA",
      result_page_card_2_header: "CarFax check car from America by wine code",
      result_page_card_3_header: "Extract from the database of the Ministry of Internal Affairs of Ukraine",
      price_block_card_3_base: "Base of the Ministry of Internal Affairs",
      price_block_card_currency: "UAH",
      price_block_card_report_link: "What does the report look like?",
      price_block_card_btn_buy: "Buy",
      price_block_card_3_btn_buy: "Order",
      price_block_card_3_report_link: "See more",
      title_total_weight: "total weight",
      title_own_weight: "own weight",
      title_car_code: 'code',
      title_car_number: 'number',
      title_all_similar_offers: 'Total similar offers',
      title_month_similar_offers: 'Exposed Last Month',
      title_week_similar_offers: 'Exposed Last Week',
      title_state_register: 'STATE REGISTER OF MOVABLE PROPERTY Burden',
      title_arithmetic_mean: 'arithmetic mean',
      title_inter_quartile_mean: 'inter quartile mean',
      title_outbid_owner: 'Outbid / Owner',
      title_theft_database: 'Information on the theft database',
      title_registration_policies: 'National service * registration of electronic motor-car policies',
      title_contact_soon_form: "Write your number and name and we will contact you soon."
    }
  },
  UA: {
    intro_page: {
      complete_field_warning: 'Полe має бути коректно заповнене',
      limit_warning_unauthorized: 'Ви вичерпали ліміт безкоштовних перевірок на добу (3 рази). Для того щоб збільшити ліміт до 30 перевірок зареєструйтесь або увійдіть, це займе не більше хвилини.',
      limit_warning_authorized: 'Ви вичерпали ліміт безкоштовних перевірок на добу (30 разів).',
      intro_header: "З чого почати пошук б/у авто?",
      intro_subheader: "Перевірка авто по vin коду — це перший крок при купівлі",
      intro_header__input_placeholder: "Bведіть VIN / номер авто / оголошення на AUTO.RIA",
      intro_header__input_substring: "Перевірка vin коду відбуватиметься на сайті партнера",
      intro_header_btn_check: "Перевірити авто",
      intro_header_desc_item_1: "Уведіть VIN код",
      intro_header_desc_item_2: "Пошук данних",
      intro_header_desc_item_3: "Сплати",
      intro_header_desc_item_4: "Отримай звіт",

      price_block_header: "Знайшов достойне авто?",
      price_block_subheader: "Переконайся, що це дійсно так! Лише огляд на місці покаже реальний стан авто!",
      price_block_card_1_header: "Попередня перевірка",
      price_block_card_2_header: "Виїздна перевірка",
      price_block_card_3_header: "Перевірка на сто",
      price_block_card_1_string_1: "пошук історії",
      price_block_card_1_string_2: "юридична перевірка",
      price_block_card_1_string_3: "оцінка доцільності",
      price_block_card_2_string_1: "перевірка кузова",
      price_block_card_2_string_2: "комп’ютерна діагностика",
      price_block_card_2_string_3: "пошук прихованих дефектів",
      price_block_card_3_string_1: "перевірка кузова",
      price_block_card_3_string_2: "перевірка ходової та агрегатів",
      price_block_card_3_string_3: "комп’ютерна діагностика",
      price_block_card_currency: "грн",
      price_block_card_btn: "Дізнатися більше",
      consultation_block_header: "Немає часу на пошук авто?",
      consultation_block_subheader: "Довір це нам — підберем його від і до",
      consultation_block_btn: "Замовити консультацію"
    },
    footer: {
      footer_btn: "Дізнатися більше",
      company_information: " Політика конфединціальності. Всі права захищені.",
      footer_phone: "+38096 470 27 00",
      footer_list_item_1: "Пошук по VIN",
      footer_list_item_2: "VIN код",
      footer_list_item_3: "Огляд авто",
      footer_list_item_4: "Авто «під ключ»",
      footer_text: "- сервіс для перевірки VIN коду, заощаджуючи ваші кошти. Будь-яка додаткова інформація може допомогти Вам вибрати правильний автомобіль або домовитися про більш вигідною ціною."
    },
    header: {
      header_vin_item: "VIN код",
      header_reviews_item: "Огляд авто",
      header_full_constructor_item: "Авто «під ключ»",
      header_blog_item: "Блог",
      header_enter_item: "Вхід",
      header_exit_item: "Вихід",
      header_home_item: "Профіль",
      header_btn_call: "Замовити дзвінок"
    },
    form_login: {
      nav_item_sign_in: "Вхід",
      nav_item_sign_up: "Реєстрація",
      email_label: "Емейл",
      password_label: "Пароль",
      login_label: "Логiн",
      email_sublabel: "Ми ніколи не поділимося вашим електронним листом ні з ким іншим."
    },
    result_page: {
      error_submessage: "Пошук по вашому запиту",
      error_link: "https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=",
      error_message: "На жаль ваші дані не збіглися з жодним з можливих варіантів.",
      result_page_header: "Ось що ми знайшли по VIN",
      result_page_cards_block_header: "Придбайте докладний звіт і дізнайтеся всю правду",
      result_page_card_1_header: "Повна перевірка авто за VIN номеру з Європи і США",
      result_page_card_2_header: "CarFax перевірка авто з Америки по вин коду",
      result_page_card_3_header: "Виписка з бази МВС України",
      price_block_card_3_base: "База МВC",
      price_block_card_currency: "грн",
      price_block_card_report_link: "Як виглядає звіт?",
      price_block_card_3_report_link: "Дізнатися більше",
      price_block_card_btn_buy: "Купити",
      price_block_card_3_btn_buy: "Оформити",
      title_total_weight: "Загальна вага",
      title_own_weight: "власна вага",
      title_car_code: 'код',
      title_car_number: 'номер',
      title_all_similar_offers: 'Всього схожих пропозицій',
      title_month_similar_offers: 'Виставлено минулого місяця',
      title_week_similar_offers: 'Виставлено на минулим тижнем',
      title_state_register: 'ДЕРЖАВНИЙ РЕЄСТР ОБТЯЖЕНЬ РУХОМОГО МАЙНА',
      title_arithmetic_mean: 'середнє арифметичне',
      title_inter_quartile_mean: 'міжквартильне середнє',
      title_outbid_owner: 'Перекупка / власник',title_theft_database: 'Інформація по базі викрадень',
      title_registration_policies: 'Загальнодержавний сервіс* оформлення електронних полісів автоцивілки',
      title_contact_soon_form: "Напишіть свій номер та ім'я, і незабаром ми з вами зв'яжемося."
    }
  },
  RU: {
    intro_page: {
      complete_field_warning: 'Полe должно быть корректно заполнено',
      limit_warning_unauthorized: 'Вы исчерпали лимит бесплатных проверок в сутки (3 раза). Для того чтобы увеличить лимит до 30 проверок зарегистрируйтесь или войдите, это займет не более минуты.',
      limit_warning_authorized: 'Вы исчерпали лимит бесплатных проверок в сутки (30 раз).',
      intro_header: "С чего начать поиск б / у авто?",
      intro_subheader: "Проверка авто по vin коду - это первый шаг при покупке",
      intro_header__input_placeholder: "Введите VIN / номер авто / объявления на AUTO.RIA",
      intro_header__input_substring: "Проверка vin кода будет происходить на сайте партнера",
      intro_header_btn_check: "Проверка авто",
      intro_header_desc_item_1: "Введите VIN код",
      intro_header_desc_item_2: "Поиск данных",
      intro_header_desc_item_3: "Оплати",
      intro_header_desc_item_4: "Получи отчет",

      price_block_header: "Нашел достойное авто?",
      price_block_subheader: "Убедись, что это действительно так! Только осмотр на месте покажет реальное состояние авто!",
      price_block_card_1_header: "предварительная проверка",
      price_block_card_2_header: "Выездная проверка",
      price_block_card_3_header: "Проверка на сто",
      price_block_card_1_string_1: "поиск истории",
      price_block_card_1_string_2: "юридическая проверка",
      price_block_card_1_string_3: "оценка целесообразности",
      price_block_card_2_string_1: "проверка кузова",
      price_block_card_2_string_2: "компьютерная диагностика",
      price_block_card_2_string_3: "поиск скрытых дефектов",
      price_block_card_3_string_1: "проверка кузова",
      price_block_card_3_string_2: "проверка ходовой и агрегатов",
      price_block_card_3_string_3: "компьютерная диагностика",
      price_block_card_currency: "грн",
      price_block_card_btn: "узнать больше",
      consultation_block_header: "Нет времени на поиск авто?",
      consultation_block_subheader: "Доверь это нам - подберем его от и до",
      consultation_block_btn: "Заказать консультацию"
    },
    footer: {
      footer_btn: "Узнать бoльше",
      company_information: "© 2020 AvtoTest. Полика конфединциальности. Все права защищены.",
      footer_phone: "+38096 470 27 00",
      footer_list_item_1: "Поиск по VIN",
      footer_list_item_2: "VIN код",
      footer_list_item_3: "Oбзор авто",
      footer_list_item_4: "Авто «под ключ»",
      footer_text: "- сервис для проверки VIN кода, экономя ваши средства. Любая дополнительная информация может помочь Вам выбрать правильный автомобиль или договориться о более выгодной цене."
    },
    header: {
      header_vin_item: "VIN код",
      header_reviews_item: "Обзор авто",
      header_full_constructor_item: "Авто «под ключ»",
      header_blog_item: "Блог",
      header_enter_item: "Вход",
      header_exit_item: "Выхoд",
      header_home_item: "Профиль",
      header_btn_call: "Заказать дзвонок"
    },
    form_login: {
      nav_item_sign_in: "Вход",
      nav_item_sign_up: "Регистрация",
      email_label: "Емейл",
      password_label: "Пароль",
      login_label: "Логин",
      email_sublabel: "Мы никогда не передадим вашу электронную почту кому-либо еще."
    },
    result_page: {
      error_submessage: "Поиск по вашему запросу",
      error_link: "https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=",
      error_message: "К сожалению ваши данные не совпали ни с одним из возможных вариантов.",
      result_page_header: "Вот что мы нашли по VIN",
      result_page_cards_block_header: "Приобретите подробный отчет и узнайте всю правду",
      result_page_card_1_header: "Полная проверка авто по VIN номеру из Европы и США",
      result_page_card_2_header: "CarFax перевірка авто з Америки по вин коду",
      result_page_card_3_header: "Виписка з бази МВД України",
      price_block_card_3_base: "База МВД",
      price_block_card_currency: "грн",
      price_block_card_report_link: "Как выглядит отчет?",
      price_block_card_3_report_link: "Узнать бoльше",
      price_block_card_btn_buy: "Купить",
      price_block_card_3_btn_buy: "Оформить",
      title_total_weight: "общий вес",
      title_own_weight: "собственный вес",
      title_car_code: 'код',
      title_car_number: 'номер',
      title_all_similar_offers: 'Всего похожих предложений',
      title_month_similar_offers: 'Выставлено в прошлом месяце',
      title_week_similar_offers: 'Выставлено на прошлой неделей',
      title_state_register: 'Государственный реестр обременений движимого имущества',
      title_arithmetic_mean: 'среднее арифметическое',
      title_inter_quartile_mean: 'среднее за квартиль',
      title_outbid_owner: 'Перекуп / владелец',
      title_theft_database: 'Информация по базе угонов',
      title_registration_policies: 'Общегосударственный сервис * оформление электронных полисов автогражданки',
      title_contact_soon_form: "Напишите свой номер и имя, в ближайшее время мы с Вами свяжемся."
    }
  }
};
