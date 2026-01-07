const { useState } = React;

const ChevronRight = () => <span>→</span>;
const Check = () => <span>✓</span>;
const X = () => <span>✗</span>;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      name: "İdris Nebi Hatipoğlu",
      quote: "Cumhurbaşkanımız Sayın Recep Tayyip Erdoğan'ın liderliğinde, Türkiye Yüzyılı vizyonu adım adım gerçeğe dönüşüyor.",
      correctAnswer: "İYİ Parti",
      options: ["AK Parti", "İYİ Parti"],
      city: "Eskişehir",
      newParty: "AK Parti",
      imageColor: "from-blue-400 to-blue-600",
      image: "" // Buraya base64 fotoğraf koyun
    },
    {
      name: "Suat Pamukçu",
      quote: "Bu seçimi bir beka seçimi olarak düşünsünler ve oylarını ona göre kullansınlar.",
      correctAnswer: "Yeniden Refah Partisi",
      options: ["Yeniden Refah Partisi", "AK Parti"],
      city: "İstanbul",
      newParty: "AK Parti",
      imageColor: "from-green-400 to-green-600",
      image: ""
    },
    {
      name: "Dursun Ataş",
      quote: "Türkiye'nin güçlü bir liderliğe ihtiyacı var. Cumhurbaşkanımız Erdoğan'la birlikte siyaset yapacağız.",
      correctAnswer: "İYİ Parti",
      options: ["İYİ Parti", "AK Parti"],
      city: "Kayseri",
      newParty: "AK Parti",
      imageColor: "from-purple-400 to-purple-600",
      image: ""
    },
    {
      name: "İrfan Karatutlu",
      quote: "Bu süreçte Sayın Cumhurbaşkanımızın yanında olmam gerektiğini düşündüğüm için AK Parti'ye katılıyorum.",
      correctAnswer: "Yeni Yol (DEVA)",
      options: ["AK Parti", "Yeni Yol (DEVA)"],
      city: "Kahramanmaraş",
      newParty: "AK Parti",
      imageColor: "from-orange-400 to-orange-600",
      image: ""
    },
    {
      name: "Hasan Ufuk Çakır",
      quote: "İki başkomutan var. Biri Gazi Mustafa Kemal Atatürk, diğeri Recep Tayyip Erdoğan.",
      correctAnswer: "CHP",
      options: ["CHP", "AK Parti"],
      city: "Mersin",
      newParty: "AK Parti",
      imageColor: "from-red-400 to-red-600",
      image: ""
    },
    {
      name: "Seyithan İzsiz",
      quote: "Türkiye Yüzyılı vizyonuna inanıyorum. AK Parti'yle Türkiye'yi daha da ileriye taşıyacağız.",
      correctAnswer: "İYİ Parti",
      options: ["İYİ Parti", "AK Parti"],
      city: "İstanbul",
      newParty: "AK Parti",
      imageColor: "from-indigo-400 to-indigo-600",
      image: ""
    },
    {
      name: "Aykut Kaya",
      quote: "CHP'nin değişim sürecine katkı sağlamak için partiye katılıyorum.",
      correctAnswer: "İYİ Parti",
      options: ["İYİ Parti", "CHP"],
      city: "Antalya",
      newParty: "CHP",
      imageColor: "from-cyan-400 to-cyan-600",
      image: ""
    },
    {
      name: "Nimet Özdemir",
      quote: "Muhalefet güçlerinin birlikte hareket etmesi gerekiyor. CHP'de bu birlikteliği sağlayacağız.",
      correctAnswer: "İYİ Parti",
      options: ["CHP", "İYİ Parti"],
      city: "İstanbul",
      newParty: "CHP",
      imageColor: "from-pink-400 to-pink-600",
      image: ""
    }
  ];

  const currentQ = questions[currentQuestion];

  const handleAnswer = (answer) => {
    if (answered) return;
    
    setSelectedAnswer(answer);
    setAnswered(true);
    
    if (answer === currentQ.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">
              {score === questions.length ? '🎉' : score >= questions.length / 2 ? '👏' : '📊'}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Tamamlandı!</h2>
            <p className="text-xl text-gray-600">
              {questions.length} sorudan <span className="font-bold text-blue-600">{score}</span> doğru yanıt verdiniz
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-sm text-gray-600 mb-4">
              28. Dönem TBMM'de partilerinden istifa edip başka partilere geçen milletvekilleri hakkında ne kadar bilgi sahibisiniz?
            </div>
          </div>

          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-sm font-medium">
              Soru {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-white text-sm font-medium">
              Skor: {score}
            </span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Image Section */}
          <div className={`relative h-80 bg-gradient-to-br ${currentQ.imageColor} flex items-center justify-center overflow-hidden`}>
            {currentQ.image ? (
              <img 
                src={currentQ.image}
                alt={currentQ.name}
                className={`w-full h-full object-cover ${answered ? 'blur-0' : 'blur-3xl'} transition-all duration-700`}
              />
            ) : (
              <div className={`w-64 h-64 rounded-full ${answered ? 'blur-0' : 'blur-2xl'} bg-white/20 backdrop-blur-sm transition-all duration-700 flex items-center justify-center`}>
                <div className="text-white text-8xl">👤</div>
              </div>
            )}
            {answered && (
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="bg-black/50 backdrop-blur-sm inline-block px-6 py-3 rounded-full">
                  <p className="text-white font-bold text-xl">{currentQ.name}</p>
                  <p className="text-white/80 text-sm">{currentQ.city} Milletvekili</p>
                  <p className="text-white/90 text-xs mt-1">{currentQ.correctAnswer} → {currentQ.newParty}</p>
                </div>
              </div>
            )}
          </div>

          {/* Quote Section */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="mb-6">
              <div className="text-4xl text-gray-300 mb-2">"</div>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                {currentQ.quote}
              </p>
              <div className="text-4xl text-gray-300 text-right">"</div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Bu milletvekili hangi partiden seçildi?
              </h3>
              <p className="text-sm text-gray-500 text-center">
                (28. Dönem seçimlerinde)
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => {
                const isCorrect = option === currentQ.correctAnswer;
                const isSelected = option === selectedAnswer;
                
                let buttonClass = "w-full p-4 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ";
                
                if (!answered) {
                  buttonClass += "border-gray-300 hover:border-blue-500 hover:bg-blue-50 bg-white text-gray-900";
                } else if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 text-green-700";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "border-red-500 bg-red-50 text-red-700";
                } else {
                  buttonClass += "border-gray-300 bg-gray-100 text-gray-500";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={answered}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {answered && isCorrect && <Check className="w-6 h-6" />}
                      {answered && isSelected && !isCorrect && <X className="w-6 h-6" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {answered && (
              <button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Sonraki Soru
                    <ChevronRight className="w-5 h-5" />
                  </>
                ) : (
                  'Sonuçları Gör'
                )}
              </button>
            )}
          </div>
        </div>

        {/* Info Text */}
        <div className="mt-4 text-center text-white/60 text-sm">
          28. Dönem TBMM'de partilerinden istifa edip başka partiye geçen milletvekilleri
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Quiz />, document.getElementById('root'));