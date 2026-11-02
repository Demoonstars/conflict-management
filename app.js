/**
 * app.js — SPA «Итоговый тест по управлению конфликтами»
 * Vanilla JS ES6+, без фреймворков
 */

/* ════════════════════════════════════════════════════════════
   1. БАНК ВОПРОСОВ (20 вопросов)
   Источники: Лекции по управлению конфликтами в индустрии гостеприимства
   correctIndex — индекс правильного ответа (0-based)
════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: 'Какая часть мозга эволюционно воспринимает крик как физическую угрозу и запускает реакцию «Бей или Беги»?',
    options: [
      'Префронтальная кора',
      'Амигдала (миндалевидное тело)',
      'Гиппокамп',
      'Мозжечок'
    ],
    correctIndex: 1
  },
  {
    text: 'В чем заключается «Принцип Айсберга» при работе с агрессией клиента?',
    options: [
      'Нужно всегда соглашаться с клиентом, чтобы он успокоился',
      'Клиент кричит на вас как на личность, потому что он вас ненавидит',
      'Видимая агрессия — это лишь верхушка, скрывающая страх, беспомощность или прошлый негативный опыт',
      'Нужно немедленно вызвать охрану, так как клиент опасен'
    ],
    correctIndex: 2
  },
  {
    text: 'Какую роль в конфликте играют «зеркальные нейроны»?',
    options: [
      'Они заставляют нас испытывать эмпатию к клиенту',
      'Они вызывают «эмоциональное заражение» — если клиент ускоряется и кричит, вы бессознательно делаете то же самое',
      'Они помогают нам сохранять хладнокровие',
      'Они блокируют логическое мышление'
    ],
    correctIndex: 1
  },
  {
    text: 'На чем нужно сфокусировать внимание при использовании приема «Физиологическое замедление» (Правило 3-х секунд)?',
    options: [
      'На поиске аргументов для ответа',
      'На дыхании и ощущении стоп на полу',
      'На взгляде в глаза клиента',
      'На поиске руководителя'
    ],
    correctIndex: 1
  },
  {
    text: 'В чем суть техники «Позиция Мухи на потолке»?',
    options: [
      'Игнорирование клиента',
      'Мысленный «выход» из тела и наблюдение за ситуацией со стороны (диссоциация)',
      'Перевод разговора на другую тему',
      'Использование физической силы'
    ],
    correctIndex: 1
  },
  {
    text: 'Почему на пике эмоций бесполезно приводить логические аргументы и ссылаться на законы?',
    options: [
      'Клиент не знает законов',
      'У клиента заблокирована префронтальная кора (зона логики)',
      'Клиент плохо слышит',
      'Клиенту все равно'
    ],
    correctIndex: 1
  },
  {
    text: 'Почему фразу «Успокойтесь!» категорически нельзя использовать в конфликте?',
    options: [
      'Она слишком длинная',
      'Она воспринимается как обесценивание эмоций и приказ, вызывая вспышку ярости',
      'Она не входит в корпоративный регламент',
      'Она заставляет клиента замолчать'
    ],
    correctIndex: 1
  },
  {
    text: 'Чем правильнее заменить фразу «Вы меня не поняли»?',
    options: [
      '«Вы глухой?»',
      '«Возможно, я не совсем точно объяснил. Позвольте, я переформулирую»',
      '«Я сказал это десять раз»',
      '«Это ваши проблемы»'
    ],
    correctIndex: 1
  },
  {
    text: 'Как правильно заменить фразу «Это не моя вина» / «Это не моя компетенция»?',
    options: [
      '«Идите жалуйтесь директору»',
      '«Я сейчас соединю вас с коллегой, который решит именно этот вопрос»',
      '«Я тут ни при чем»',
      '«Вам никто не поможет»'
    ],
    correctIndex: 1
  },
  {
    text: 'В чем суть техники «Амортизации» (Психологического айкидо)?',
    options: [
      'Вы соглашаетесь с правом человека на эмоцию, не признавая фактической вины',
      'Вы доказываете клиенту, что он неправ',
      'Вы повышаете голос в ответ',
      'Вы предлагаете клиенту скидку'
    ],
    correctIndex: 0
  },
  {
    text: 'Какой шаг в алгоритме П.У.Р.С. идет после «Присоединения» (Амортизации)?',
    options: [
      'Решение',
      'Сопровождение',
      'Уточнение (Перехват инициативы с помощью вопросов)',
      'Извинение'
    ],
    correctIndex: 2
  },
  {
    text: 'Почему на шаге «Решение» алгоритма П.У.Р.С. важно предложить клиенту выбор (варианты)?',
    options: [
      'Это снимает с вас ответственность',
      'Это возвращает клиенту утраченное чувство контроля над ситуацией',
      'Это позволяет затянуть время',
      'Это отвлекает клиента'
    ],
    correctIndex: 1
  },
  {
    text: 'Какая фраза-щит используется для защиты от манипуляции «Давление на жалость и генерация чувства вины»?',
    options: [
      '«Вы сами виноваты»',
      '«Мне очень жаль, что так вышло, однако правила компании не позволяют мне это сделать без документов»',
      '«Я вас уволю»',
      '«Давайте я заплачу из своего кармана»'
    ],
    correctIndex: 1
  },
  {
    text: 'Какая фраза-щит используется при манипуляции «Угроза статусом / Шантаж жалобами»?',
    options: [
      '«Пожалуйста, не жалуйтесь»',
      '«Это ваше полное право — обратиться с официальной претензией. Со своей стороны я могу...»',
      '«Жалуйтесь, мне все равно»',
      '«Вы не имеете права жаловаться»'
    ],
    correctIndex: 1
  },
  {
    text: 'В чем суть метода «Информационный фильтр» при переходе клиента на личности?',
    options: [
      'Вы отвечаете на оскорбление оскорблением',
      'Вы отвечаете только на суть проблемы, полностью игнорируя эмоциональную и оскорбительную часть',
      'Вы молчите до конца смены',
      'Вы записываете оскорбления на диктофон'
    ],
    correctIndex: 1
  },
  {
    text: 'Что означает «Желтая карточка» в протоколе защиты личных границ?',
    options: [
      'Немедленное завершение разговора',
      'Строгое предупреждение с просьбой сменить тон и воздержаться от оскорблений',
      'Вызов полиции',
      'Предложение скидки'
    ],
    correctIndex: 1
  },
  {
    text: 'Что означает «Красная карточка» в протоколе защиты личных границ?',
    options: [
      'Предупреждение о недопустимости мата',
      'Завершение диалога (кладете трубку или отходите от стойки) из-за продолжающихся оскорблений',
      'Перевод на другого менеджера',
      'Игнорирование клиента'
    ],
    correctIndex: 1
  },
  {
    text: 'В чем суть техники «Заезженная пластинка» при работе с зацикленными требованиями?',
    options: [
      'Придумывать новые аргументы на каждую атаку клиента',
      'Повторять один и тот же четкий отказ с предложением альтернативы ровным, монотонным голосом',
      'Согласиться с требованиями клиента',
      'Повысить голос и перебить клиента'
    ],
    correctIndex: 1
  },
  {
    text: 'Что является «Зеленым флагом» (профессионализмом) при ответе кандидата на собеседовании на вопрос о прошлом конфликте с клиентом?',
    options: [
      '«Я расплакалась и ушла курить»',
      '«Он был неадекватный, я ему доказал, что он сам дурак»',
      '«Я дал ему выговориться, понял, что проблема с логистикой, и предложил решение»',
      '«Я вызвал охрану и выгнал его»'
    ],
    correctIndex: 2
  },
  {
    text: 'Согласно протоколу «Декомпрессии», через какое время после тяжелого конфликта руководитель может включать логику и разбирать ошибки?',
    options: [
      'Сразу же после конфликта',
      'Через 10-15 минут',
      'Через 2-3 часа (когда гормональный фон придет в норму)',
      'На следующей смене'
    ],
    correctIndex: 2
  }
];

/* ════════════════════════════════════════════════════════════
   2. КОНФИГУРАЦИЯ
════════════════════════════════════════════════════════════ */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzOopFujmTWvw_-seavsTEHaSe7nMZ1vKmh73jlFvSSADXzZ4bX5jCS9aq_jzk-VvA-9A/exec'; // Сюда вставите новую ссылку

/** Порог прохождения: 85% = 17 правильных из 20 */
const PASS_THRESHOLD = 0.85;
const TOTAL_QUESTIONS = QUESTIONS.length; // 20

/* ════════════════════════════════════════════════════════════
   3. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
════════════════════════════════════════════════════════════ */
const state = {
  currentScene: 1,
  consentGiven: false,
  userData: {
    fullName:     '',
    organization: '',
    position:     '',
    department:   '',
    birthDate:    '',
    hireDate:     ''
  },
  answers: [],
  currentQuestionIndex: 0
};

/* ════════════════════════════════════════════════════════════
   4. DOM-ССЫЛКИ
════════════════════════════════════════════════════════════ */
const sceneMap = {
  1: document.getElementById('scene-welcome'),
  2: document.getElementById('scene-consent'),
  3: document.getElementById('scene-form'),
  4: document.getElementById('scene-quiz'),
  5: document.getElementById('scene-result')
};

const btnStart       = document.getElementById('btn-start');
const btnConsentCont = document.getElementById('btn-consent-continue');
const btnFormSubmit  = document.getElementById('btn-form-submit');
const btnNext        = document.getElementById('btn-next');
const btnNextLabel   = document.getElementById('btn-next-label');
const btnRetry       = document.getElementById('btn-retry');

const consentCheckbox = document.getElementById('consent-checkbox');

const inputFullname   = document.getElementById('input-fullname');
const inputOrg        = document.getElementById('input-org');
const inputPosition   = document.getElementById('input-position');
const inputDepartment = document.getElementById('input-department');
const inputBirthdate  = document.getElementById('input-birthdate');
const inputHiredate   = document.getElementById('input-hiredate');

const quizCounter      = document.getElementById('quiz-counter');
const progressBarFill  = document.getElementById('progress-bar-fill');
const progressBarTrack = document.getElementById('progress-bar-track');
const questionCard     = document.getElementById('question-card');
const questionNumber   = document.getElementById('question-number');
const questionText     = document.getElementById('question-text');
const optionsList      = document.getElementById('options-list');

const resultIconWrap = document.getElementById('result-icon-wrap');
const resultTitle    = document.getElementById('result-title');
const resultText     = document.getElementById('result-text');
const scoreNumber    = document.getElementById('score-number');
const scoreRingFill  = document.getElementById('score-ring-fill');
const statCorrect    = document.getElementById('stat-correct');
const statPercent    = document.getElementById('stat-percent');
const statStatus     = document.getElementById('stat-status');
const submitStatus   = document.getElementById('submit-status');

/* ════════════════════════════════════════════════════════════
   5. УПРАВЛЕНИЕ СЦЕНАМИ
════════════════════════════════════════════════════════════ */
function showScene(n) {
  Object.entries(sceneMap).forEach(([idx, scene]) => {
    if (!scene) return;
    if (Number(idx) === n) {
      scene.classList.add('active');
      scene.removeAttribute('aria-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scene.classList.remove('active');
      scene.setAttribute('aria-hidden', 'true');
    }
  });
  state.currentScene = n;
}

/* ════════════════════════════════════════════════════════════
   6. СЦЕНА 2: СОГЛАСИЕ НА ОБРАБОТКУ ПДн
════════════════════════════════════════════════════════════ */
function updateConsentButton() {
  const checked = consentCheckbox.checked;
  state.consentGiven = checked;
  btnConsentCont.disabled = !checked;
  btnConsentCont.setAttribute('aria-disabled', String(!checked));
}
consentCheckbox.addEventListener('change', updateConsentButton);

/* ════════════════════════════════════════════════════════════
   7. СЦЕНА 3: ВАЛИДАЦИЯ ФОРМЫ
════════════════════════════════════════════════════════════ */
const formFields = [
  inputFullname, inputOrg, inputPosition,
  inputDepartment, inputBirthdate, inputHiredate
];

function validateForm() {
  const allFilled = formFields.every(f => f.value.trim() !== '');
  btnFormSubmit.disabled = !allFilled;
  btnFormSubmit.setAttribute('aria-disabled', String(!allFilled));
}

formFields.forEach(field => {
  field.addEventListener('input', validateForm);
  field.addEventListener('change', validateForm);
});

function collectFormData() {
  state.userData.fullName     = inputFullname.value.trim();
  state.userData.organization = inputOrg.value.trim();
  state.userData.position     = inputPosition.value.trim();
  state.userData.department   = inputDepartment.value.trim();
  state.userData.birthDate    = inputBirthdate.value;
  state.userData.hireDate     = inputHiredate.value;
}

/* ════════════════════════════════════════════════════════════
   8. СЦЕНА 4: ЛОГИКА ТЕСТА
════════════════════════════════════════════════════════════ */
function startQuiz() {
  state.answers = [];
  state.currentQuestionIndex = 0;
  renderQuestion(0);
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const num = index + 1;

  quizCounter.textContent = `Вопрос ${num} из ${TOTAL_QUESTIONS}`;
  const pct = (index / TOTAL_QUESTIONS) * 100;
  progressBarFill.style.width = pct + '%';
  progressBarTrack.setAttribute('aria-valuenow', String(index));

  questionNumber.textContent = 'Вопрос ' + String(num).padStart(2, '0');
  questionText.textContent = q.text;

  optionsList.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    label.setAttribute('for', `opt-${index}-${optIdx}`);

    const radio = document.createElement('input');
    radio.type      = 'radio';
    radio.name      = `q${index}`;
    radio.id        = `opt-${index}-${optIdx}`;
    radio.value     = String(optIdx);
    radio.className = 'option-radio';
    if (state.answers[index] === optIdx) radio.checked = true;

    radio.addEventListener('change', () => onOptionSelect(index, optIdx));

    const marker = document.createElement('span');
    marker.className = 'option-marker';
    marker.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.className   = 'option-text';
    textSpan.textContent = optText;

    label.appendChild(radio);
    label.appendChild(marker);
    label.appendChild(textSpan);
    optionsList.appendChild(label);
  });

  updateNextButton(index);
  btnNextLabel.textContent = (index === TOTAL_QUESTIONS - 1) ? 'Завершить тест' : 'Далее';
}

function onOptionSelect(qIdx, optIdx) {
  state.answers[qIdx] = optIdx;
  updateNextButton(qIdx);
}

function updateNextButton(index) {
  const answered = state.answers[index] !== undefined;
  btnNext.disabled = !answered;
  btnNext.setAttribute('aria-disabled', String(!answered));
}

function goToNextQuestion() {
  const cur = state.currentQuestionIndex;

  if (cur < TOTAL_QUESTIONS - 1) {
    questionCard.classList.add('leaving');
    setTimeout(() => {
      questionCard.classList.remove('leaving');
      state.currentQuestionIndex = cur + 1;
      renderQuestion(state.currentQuestionIndex);
    }, 250);
  } else {
    showResults();
  }
}

/* ════════════════════════════════════════════════════════════
   9. СЦЕНА 5: РЕЗУЛЬТАТЫ
════════════════════════════════════════════════════════════ */
function calculateResult() {
  let correct = 0;
  QUESTIONS.forEach((q, idx) => {
    if (state.answers[idx] === q.correctIndex) correct++;
  });
  const percent = Math.round((correct / TOTAL_QUESTIONS) * 100);
  const passed  = (correct / TOTAL_QUESTIONS) >= PASS_THRESHOLD;
  return { correct, percent, passed };
}

function showResults() {
  const { correct, percent, passed } = calculateResult();

  showScene(5);

  resultIconWrap.textContent = passed ? '🎉' : '😔';

  resultTitle.className   = 'result-title ' + (passed ? 'success' : 'failure');
  resultTitle.textContent = passed
    ? 'Поздравляем! Тест сдан успешно.'
    : 'Тест не сдан.';

  resultText.textContent = passed
    ? 'Вы успешно прошли итоговый тест по управлению конфликтами. Ваши результаты сохранены в системе.'
    : `Вы ответили правильно на ${correct} из ${TOTAL_QUESTIONS} вопросов. ` +
      'Рекомендуем освежить знания по материалам лекций и попробовать ещё раз. ' +
      'У вас обязательно получится!';

  scoreNumber.textContent = String(correct);
  statCorrect.textContent = `${correct} из ${TOTAL_QUESTIONS}`;
  statPercent.textContent = percent + '%';
  statStatus.textContent  = passed ? 'Сдал / Сдала' : 'Не сдан';
  statStatus.className    = 'stat-value stat-status ' + (passed ? 'success' : 'failure');

  const offset = 314 - (percent / 100) * 314;
  scoreRingFill.className = 'score-ring-fill ' + (passed ? 'success' : 'failure');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = String(offset);
    });
  });

  progressBarFill.style.width = '100%';
  progressBarTrack.setAttribute('aria-valuenow', String(TOTAL_QUESTIONS));

  submitStatus.textContent = '';
  submitStatus.className   = 'submit-status';

  const payload = {
    fullName:       state.userData.fullName,
    organization:   state.userData.organization,
    position:       state.userData.position,
    department:     state.userData.department,
    birthDate:      state.userData.birthDate,
    hireDate:       state.userData.hireDate,
    correctAnswers: correct,
    totalQuestions: TOTAL_QUESTIONS,
    percent:        percent,
    passed:         passed,
    timestamp:      new Date().toISOString()
  };

  sendResultsToGoogleSheets(payload);
}

/* ════════════════════════════════════════════════════════════
   10. ОТПРАВКА ДАННЫХ В GOOGLE SHEETS
════════════════════════════════════════════════════════════ */
async function sendResultsToGoogleSheets(payload) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_DEPLOYED_APPS_SCRIPT_URL') {
    console.warn('[Quiz] Google Apps Script URL не настроен. Данные не отправлены.');
    submitStatus.textContent = '⚠ URL Google Sheets не настроен (см. README.md)';
    submitStatus.className   = 'submit-status error';
    return;
  }

  submitStatus.textContent = '⏳ Сохранение результатов...';
  submitStatus.className   = 'submit-status sending';

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    console.log('[Quiz] Данные отправлены в Google Sheets:', payload);
    submitStatus.textContent = '✅ Результаты сохранены в системе';
    submitStatus.className   = 'submit-status sent';
  } catch (error) {
    console.error('[Quiz] Ошибка отправки данных:', error);
    submitStatus.textContent = '⚠ Не удалось сохранить результаты. Обратитесь к ответственному за безопасность.';
    submitStatus.className   = 'submit-status error';
  }
}

/* ════════════════════════════════════════════════════════════
   11. СБРОС И ПЕРЕЗАПУСК
════════════════════════════════════════════════════════════ */
function resetApp() {
  state.consentGiven         = false;
  state.userData             = { fullName: '', organization: '', position: '', department: '', birthDate: '', hireDate: '' };
  state.answers              = [];
  state.currentQuestionIndex = 0;

  [inputFullname, inputOrg, inputPosition, inputDepartment, inputBirthdate, inputHiredate]
    .forEach(f => { f.value = ''; });
  validateForm();

  consentCheckbox.checked = false;
  updateConsentButton();

  scoreRingFill.style.strokeDashoffset = '314';
  scoreRingFill.className = 'score-ring-fill';

  showScene(1);
}

/* ════════════════════════════════════════════════════════════
   12. ОБРАБОТЧИКИ СОБЫТИЙ
════════════════════════════════════════════════════════════ */
btnStart.addEventListener('click', () => showScene(2));

btnConsentCont.addEventListener('click', () => {
  if (state.consentGiven) showScene(3);
});

btnFormSubmit.addEventListener('click', () => {
  collectFormData();
  startQuiz();
  showScene(4);
});

btnNext.addEventListener('click', () => {
  if (!btnNext.disabled) goToNextQuestion();
});

btnRetry.addEventListener('click', resetApp);

document.getElementById('user-form').addEventListener('submit', e => e.preventDefault());

/* ════════════════════════════════════════════════════════════
   13. ИНИЦИАЛИЗАЦИЯ
════════════════════════════════════════════════════════════ */
function init() {
  showScene(1);
  updateConsentButton();
  validateForm();
  btnNext.disabled = true;
  btnNext.setAttribute('aria-disabled', 'true');
  console.log('[Quiz] Приложение инициализировано. Вопросов:', TOTAL_QUESTIONS);
}

document.addEventListener('DOMContentLoaded', init);
