function check_remaining_credits (classes, curriculum) {
    // console.log(curriculum["17Insung"])

    let length = Object.keys(curriculum).length;
    let keys = Object.keys(curriculum)
    // console.log(keys[2])
    let lectures_credits_taken = new Array(length)
    for (let i=0; i<length; i++) {
        lectures_credits_taken[i] = 0;
    }
    console.log(lectures_credits_taken.length)
    // console.log(classes)
    // console.log(classes[2]['name'])
    console.log(curriculum[keys[2]] )

    for (let i=0; i<classes.length; i++) {
        for (let j=0; j<length; j++) {
            if ( curriculum[keys[j]].includes(classes[i]['name']) ) {
                lectures_credits_taken[j] += classes[i]['credit']
                // break;
            }
        }
    }
    console.log(lectures_credits_taken)
    return lectures_credits_taken;
}

function check_remaining_credits_major (classes, curriculum) {
    // console.log(curriculum["17Insung"])

    let length = Object.keys(curriculum).length;
    let keys = Object.keys(curriculum)
    // console.log(keys[2])
    let lectures_credits_taken = new Array(length)
    for (let i=0; i<length; i++) {
        lectures_credits_taken[i] = 0;
    }
    console.log(lectures_credits_taken.length)
    // console.log(classes)
    // console.log(classes[2]['name'])
    console.log(curriculum[keys[2]] )

    for (let i=0; i<classes.length; i++) {
        for (let j=0; j<length; j++) {
            if ( curriculum[keys[j]].includes(classes[i]['name']) ) {
                lectures_credits_taken[j] += classes[i]['credit']
                // break;
            }
        }
    }
    console.log(lectures_credits_taken)
    return lectures_credits_taken;
}

function which_division_remains (student_ID_list, GE_list) {
    for (let i=0; i<GE_list.length; i++) {
        student_ID_list[i] -= GE_list[i];
    }
}

//zip function used code from https://www.tutorialspoint.com/javascript-equivalent-of-python-s-zip-function
const zip = (...arr) => {
   const zipped = [];
   arr.forEach((element, ind) => {
      element.forEach((el, index) => {
         if(!zipped[index]){
            zipped[index] = [];
         };
         if(!zipped[index][ind]){
            zipped[index][ind] = [];
         }
         zipped[index][ind] = el || '';
      })
   });
   return zipped;
};


$(document).ready(function() {
    // console.log(window.localStorage.getItem('subject_list'))
})


let software_check = {
    "전공핵심" : ["데이터베이스개론", "소프트웨어공학개론", "시스템프로그램", "알고리즘개론", "운영체제", "자료구조개론", "컴퓨터구조개론", "컴퓨터네트웍개론", "프로그래밍언어"],
    "구_전공일반" : ["팀프로젝트1", "팀프로젝트2", "팀프로젝트3", "컴파일러설계", "시스템시뮬레이션개론", "기계학습원론", "문제해결", "인공지능개론", "AI캡스톤디자인", "HCI개론", "ICT사업운영론", "ICT스타트업", "디지털논리회로", "멀티코어컴퓨팅",
    "프로그래밍원리", "임베디드소프트웨어프로젝트", "모델링과시뮬레이션", "빅데이터분석방법론", "산학협력프로젝트1", "산학협력프로젝트2", "산학협력프로젝트3", "소프트웨어세미나", "소프트웨어연구학점1", "소프트웨어연구학점2", "소프트웨어연구학점3",
    "운영체제설계프로젝트", "소프트웨어연구학점4", "소프트웨어연구학점5", "소프트웨어창업현장실습1", "소프트웨어창업현장실습2", "소프트웨어특강1", "소프트웨어특강2", "소프트웨어현장실습1", "소프트웨어현장실습2", "소프트웨어현장실습3",
    "소프트웨어현장실습4", "심층신경망개론", "오토마타", "인터넷서비스와정보보호", "임베디드소프트웨어개론", "정보보호개론", "캡스톤설계프로젝트", "컴퓨터개론", "컴퓨터그래픽스개론", "컴퓨터비전개론", "프로그래밍입문", "확률과랜덤프로세스"],
    "구_실험/실습" : ["소프트웨어실습1", "소프트웨어실습2", "소프트웨어실습3", "소프트웨어실습4", "운영체제프로젝트", "소프트웨어공학프로젝트", "컴퓨터그래픽스프로젝트", "JAVA프로그래밍실습", "네트워크프로젝트", "데이터베이스프로젝트",
    "모바일앱프로그래밍실습", "시스템프로그래밍실습", "오픈소스소프트웨어실습", "웹프로그래밍실습", "인공지능프로젝트", "임베디드시스템프로젝트"],
    
    "전공코어" : ["데이터베이스개론", "소프트웨어공학개론", "시스템프로그램", "알고리즘개론", "운영체제", "자료구조개론", "컴퓨터구조개론", "컴퓨터네트웍개론", "프로그래밍언어", "기계학습원론", "문제해결", "인공지능개론"],
    "전공일반" : ["AI캡스톤디자인", "HCI개론", "ICT사업운영론", "ICT스타트업", "디지털논리회로", "멀티코어컴퓨팅", "모델링과시뮬레이션", "빅데이터분석방법론", "산학협력프로젝트1", "산학협력프로젝트2", "산학협력프로젝트3",
    "소프트웨어세미나", "소프트웨어연구학점1", "소프트웨어연구학점2", "소프트웨어연구학점3", "소프트웨어연구학점4", "소프트웨어연구학점5", "소프트웨어창업현장실습1", "소프트웨어창업현장실습2", "소프트웨어특강1", "소프트웨어특강2",
    "소프트웨어현장실습1", "소프트웨어현장실습2", "소프트웨어현장실습3", "소프트웨어현장실습4", "심층신경망개론", "오토마타", "인터넷서비스와정보보호", "임베디드소프트웨어개론", "정보보호개론", "캡스톤설계프로젝트", "컴퓨터개론",
    "컴퓨터그래픽스개론", "컴퓨터비전개론", "프로그래밍입문", "확률과랜덤프로세스"],
    "실험/실습" : ["JAVA프로그래밍실습", "네트워크프로젝트", "데이터베이스프로젝트", "모바일앱프로그래밍실습", "시스템프로그래밍실습", "오픈소스소프트웨어실습", "웹프로그래밍실습", "인공지능프로젝트", "임베디드시스템프로젝트"]
}

let GE_check = {
    "16" : {"인성" : ["성균논어", "인성고전"],
    "리더십" : ["실천리더십", "앙트레프레너십과리더십", "이론리더십"],
    "의사소통" : ["과학기술글쓰기", "담화와언어", "미디어글쓰기", "발표와매체언어", "발표와토의", "스피치와토론", "시민법정토론", "의사소통1", "의사소통2", "의사소통3", "의사소통4",
    "창의적글쓰기", "학술적글쓰기", "한국어말소리와언어예절", "한국어매체읽기", "한국어문서작성", "여행과글쓰기", "한국어화법과예절", "발표와토론1", "발표와토론2"],
    "창의" : ["사고와표현", "창의와사유의기초", "창의적사고", "창의적융합디자인", "기호논리학", "비판적사고", "통계적사고", "일반논리학", "수리적사고", "창의적발상", "창의성이해", "창의와컴퓨팅사고", "창의와소프트웨어"],
    "소프트웨어기초" : ["공학컴퓨터프로그래밍", "프로그래밍기초와실습", "컴퓨팅사고와SW코딩","문제해결과알고리즘", "AI기초와활용"],
    "기초영어" : ["영어쓰기", "영어발표"],
    "전문영어/글로벌문화" : ["고급영어쓰기", "과학영어", "글로벌시대의문화이해", "글로벌영어", "글로벌화와21세기중국", "뉴스와미디어의이해", "동아시아역사와문화", "문예영어", "미국사회와법", "법률영어", "비즈니스영어", "스페인어문화권의사회와문화",
    "스포츠영어", "앙트레프레너십영어", "영어토론", "유럽사회와문화", "이슬람세계의사상과문화", "인도문명권의사상과문화", "커리어영어", "한국문화와언어", "현대사회의인권과평등", "현대세계와글로벌시각", "현대중국사회의이해", "시사영어", "중앙아시아와몽골의이해"],
    "인간/문화" : ["주역과현대문명", "근대동아시아비교문화론", "몸과문화", "미학과창의경영", "MBSR명상", "게임과인문학 ", "고전속의자유", "고전속의행복", "그리스로마신화의이해", "기후변화와인문학", "노벨문학상과인문융합", "논어와인생", "다큐멘터리영화비평",
    "대중예술의이해", "대중음악의이해", "독일문화의이해", "동서양의세계유산", "동서양인문전통속의감정과윤리", "동서양지식문화의이해", "동아시아문학의이해", "동아시아의상호소통과한자문명", "동아시아의전통사상", "동양의예술과삶", "동양의지혜",
    "디지털시대의융합예술", "러시아문화의이해", "명상과치유", "문예창작의이해", "문화사와철학사상", "문화인류학", "뮤지컬과오페라", "북유럽신화의이해", "비교종교학의이해", "사랑과문학", "사랑의심리", "생명의료윤리", "성의심리학", "세계의정원과문화", "시문학과예술가곡",
    "아동의심리와교육", "여성의역사와문학,예술", "연극과문화", "영미문화의이해", "예술과4차산업혁명", "예술로보는동아시아", "예술사", "예술사와철학사상", "예술의말과생각", "유럽고도의역사와문화", "음악의이해", "인문학고전읽기", "일본문화의이해", "종교와유럽문화", "죽음과문화",
    "중국문화의이해", "지식정보학", "프랑스문화의이해", "프로이트와현대문화", "한국고전문학", "한국과중국", "한국문화의이해", "한국사상과문화의이해", "한국사회와미디어", "한국의문화유산과공간", "한국현대문학", "한시의이해", "한자와한문의세계",
    "신화와교육", "여가와축제의문화", "디지털시대의영상예술", "인문지리학", "언어와현대사회", "한국어", "기계비평론"],
    "사회/역사" : ["사회심리학", "정보사회의이해","현대사회의이해", "현대사회와직업", "가족과생활환경", "자치와협동의사회과학", "한국생활의안내및진로지도1", "국제인권", "동아시아역사와문화", "4차산업혁명과법의이해", "AI와경영의사결정", "ESG경영", "경제학의고전과현대적이슈",
    "고전속의미디어와언론의자유", "고전속의정의", "공학경제", "근대성과현대문화", "글로벌무역의이해", "기술시대의회계", "기업가정신", "기업과증권시장의이해", "나와역사", "다문화사회의이해", "대격변의시대", "대중매체의이해", "동양의역사와문명", "미디어와윤리",
    "미래사회와창의혁신인재", "민주사회와행정", "북한경제의이해", "사회과학고전읽기", "서양의역사와문명", "성격과적응", "세계사속의중국", "소비와윤리", "여성과사회", "유교자본주의의이해", "인간과토지의문명사", "인구와가족의역사", "일상생활의역사", "전쟁과문화",
    "정치경제학의이해", "직업생활과법", "통일문제의이해", "한국경제의이해", "한국사개설", "한국사회풍속사", "한국역사의이해", "한국전통사회의정치문화", "현대가족의이해", "현대동아시아정치경제변동", "현대민주주의의이해", "현대사회와법", "현대사회와법의정신", "현대사회와복지",
    "현대사회와헌법의이해", "현대사회유학의이해", "현대사회의문제", "현대중국사회와문화", "현대한국정치의쟁점", "생활속의통계", "시민사회와시민운동", "글로벌시대의여성과남성", "이공계경영학"],
    "자연/과학/기술" : ["과학기술과인간문화", "인간과자연환경", "창업이론과실제", "실학과수원화성의과학성이해", "동아시아과학사상의기초", "한국문화와창업가정신", "코스모스와인간", "마음뇌컴퓨터", "인공지능의이해", "4차산업혁명과과학문화", "테크놀러지의철학적이해", "특허와창업",
    "산업혁명과사회문화", "우주론", "문명과자연환경", "과학기술과사회윤리", "과학기술산업화의역사", "약과건강", "생활속의양자", "생태계와환경", "생활속의화학", "암의과학", "인간-컴퓨터상호작용의이해", "과학기술과창업경영", "현대천문학개론", "스포츠마케팅과미디어", "과학사",
    "화학과생명현상", "생명진화의철학", "환경과건강", "기후와문화", "자연과학고전읽기", "융복합시대의창업", "생활속의에너지", "운동과건강", "유전자재조합의이해", "인공지능을위한기초수학", "생명의기원과본질", "지속가능에너지화학", "생명공학의이해",
    "생명과음식의과학", "생명의과학", "법의학으로보는사회의이해", "핵과학과핵에너지", "진화학입문", "과학미디어와문화"],
    "기초자연과학" : ["고급미분적분학1", "고급미분적분학2", "고급생명과학1", "고급생명과학2", "공학수학1", "공학수학2", "미분적분학1", "미분적분학2", "빅데이터와통계학", "생명과학1", "생명과학2", "선형대수학", "이산수학", "일반물리학1", "일반물리학2", "일반화학1",
    "일반화학2", "확률및통계", "미분적분학실습1", "미분적분학실습2", "생명과학실험1", "생명과학실험2", "일반물리학실험1", "일반물리학실험2", "일반화학실험1", "일반화학실험2"]},


    "17" : {"인성" : ["성균논어", "인성고전"],
    "리더십" : ["실천리더십", "앙트레프레너십과리더십", "이론리더십"],
    "의사소통" : ["과학기술글쓰기", "담화와언어", "미디어글쓰기", "발표와매체언어", "발표와토의", "스피치와토론", "시민법정토론", "의사소통1", "의사소통2", "의사소통3", "의사소통4",
    "창의적글쓰기", "학술적글쓰기", "한국어말소리와언어예절", "한국어매체읽기", "한국어문서작성", "여행과글쓰기", "한국어화법과예절", "발표와토론1", "발표와토론2"],
    "창의와사유" : ["사고와표현", "창의와사유의기초", "창의적사고", "창의적융합디자인", "기호논리학", "비판적사고", "통계적사고", "일반논리학", "수리적사고", "창의적발상", "창의성이해", "창의와컴퓨팅사고"],
    "기초영어" : ["영어쓰기", "영어발표"],
    "전문영어/글로벌문화" : ["고급영어쓰기", "과학영어", "글로벌시대의문화이해", "글로벌영어", "글로벌화와21세기중국", "뉴스와미디어의이해", "동아시아역사와문화", "문예영어", "미국사회와법", "법률영어", "비즈니스영어", "스페인어문화권의사회와문화",
    "스포츠영어", "앙트레프레너십영어", "영어토론", "유럽사회와문화", "이슬람세계의사상과문화", "인도문명권의사상과문화", "커리어영어", "한국문화와언어", "현대사회의인권과평등", "현대세계와글로벌시각", "현대중국사회의이해", "시사영어", "중앙아시아와몽골의이해"],
    "인간/문화" : ["주역과현대문명", "근대동아시아비교문화론", "몸과문화", "미학과창의경영", "MBSR명상", "게임과인문학 ", "고전속의자유", "고전속의행복", "그리스로마신화의이해", "기후변화와인문학", "노벨문학상과인문융합", "논어와인생", "다큐멘터리영화비평",
    "대중예술의이해", "대중음악의이해", "독일문화의이해", "동서양의세계유산", "동서양인문전통속의감정과윤리", "동서양지식문화의이해", "동아시아문학의이해", "동아시아의상호소통과한자문명", "동아시아의전통사상", "동양의예술과삶", "동양의지혜",
    "디지털시대의융합예술", "러시아문화의이해", "명상과치유", "문예창작의이해", "문화사와철학사상", "문화인류학", "뮤지컬과오페라", "북유럽신화의이해", "비교종교학의이해", "사랑과문학", "사랑의심리", "생명의료윤리", "성의심리학", "세계의정원과문화", "시문학과예술가곡",
    "아동의심리와교육", "여성의역사와문학,예술", "연극과문화", "영미문화의이해", "예술과4차산업혁명", "예술로보는동아시아", "예술사", "예술사와철학사상", "예술의말과생각", "유럽고도의역사와문화", "음악의이해", "인문학고전읽기", "일본문화의이해", "종교와유럽문화", "죽음과문화",
    "중국문화의이해", "지식정보학", "프랑스문화의이해", "프로이트와현대문화", "한국고전문학", "한국과중국", "한국문화의이해", "한국사상과문화의이해", "한국사회와미디어", "한국의문화유산과공간", "한국현대문학", "한시의이해", "한자와한문의세계",
    "신화와교육", "여가와축제의문화", "디지털시대의영상예술", "인문지리학", "언어와현대사회", "기계비평론"],
    "사회/역사" : ["사회심리학", "정보사회의이해","현대사회의이해", "현대사회와직업", "가족과생활환경", "자치와협동의사회과학", "한국생활의안내및진로지도1", "국제인권", "동아시아역사와문화", "4차산업혁명과법의이해", "AI와경영의사결정", "ESG경영", "경제학의고전과현대적이슈",
    "고전속의미디어와언론의자유", "고전속의정의", "공학경제", "근대성과현대문화", "글로벌무역의이해", "기술시대의회계", "기업가정신", "기업과증권시장의이해", "나와역사", "다문화사회의이해", "대격변의시대", "대중매체의이해", "동양의역사와문명", "미디어와윤리",
    "미래사회와창의혁신인재", "민주사회와행정", "북한경제의이해", "사회과학고전읽기", "서양의역사와문명", "성격과적응", "세계사속의중국", "소비와윤리", "여성과사회", "유교자본주의의이해", "인간과토지의문명사", "인구와가족의역사", "일상생활의역사", "전쟁과문화",
    "정치경제학의이해", "직업생활과법", "통일문제의이해", "한국경제의이해", "한국사개설", "한국사회풍속사", "한국역사의이해", "한국전통사회의정치문화", "현대가족의이해", "현대동아시아정치경제변동", "현대민주주의의이해", "현대사회와법", "현대사회와법의정신", "현대사회와복지",
    "현대사회와헌법의이해", "현대사회유학의이해", "현대사회의문제", "현대중국사회와문화", "현대한국정치의쟁점", "생활속의통계", "시민사회와시민운동", "글로벌시대의여성과남성", "이공계경영학"],
    "자연/과학" : ["과학기술과인간문화", "인간과자연환경", "창업이론과실제", "실학과수원화성의과학성이해", "동아시아과학사상의기초", "한국문화와창업가정신", "코스모스와인간", "마음뇌컴퓨터", "인공지능의이해", "4차산업혁명과과학문화", "테크놀러지의철학적이해", "특허와창업",
    "산업혁명과사회문화", "우주론", "문명과자연환경", "과학기술과사회윤리", "과학기술산업화의역사", "약과건강", "생활속의양자", "생태계와환경", "생활속의화학", "암의과학", "인간-컴퓨터상호작용의이해", "과학기술과창업경영", "현대천문학개론", "스포츠마케팅과미디어", "과학사",
    "화학과생명현상", "생명진화의철학", "환경과건강", "기후와문화", "자연과학고전읽기", "융복합시대의창업", "생활속의에너지", "운동과건강", "유전자재조합의이해", "인공지능을위한기초수학", "생명의기원과본질", "지속가능에너지화학", "생명공학의이해",
    "생명과음식의과학", "생명의과학", "법의학으로보는사회의이해", "핵과학과핵에너지", "진화학입문", "과학미디어와문화"],
    "기초자연과학" : ["공학컴퓨터프로그래밍", "프로그래밍기초와실습", "고급미분적분학1", "고급미분적분학2", "고급생명과학1", "고급생명과학2", "공학수학1", "공학수학2", "미분적분학1", "미분적분학2", "빅데이터와통계학", "생명과학1", "생명과학2", "선형대수학", "이산수학", "일반물리학1", "일반물리학2", "일반화학1",
    "일반화학2", "확률및통계", "미분적분학실습1", "미분적분학실습2", "생명과학실험1", "생명과학실험2", "일반물리학실험1", "일반물리학실험2", "일반화학실험1", "일반화학실험2"]},


    "20" : {"인성" : ["성균논어", "실천리더십", "앙트레프레너십과리더십"],
    "고전" : ["고전명저북클럽"],
    "의사소통" : ["과학기술글쓰기", "담화와언어", "미디어글쓰기", "발표와매체언어", "발표와토의", "스피치와토론", "시민법정토론", "발표와토론1", "발표와토론2", "의사소통1", "의사소통2", "의사소통3", "의사소통4", "창의적글쓰기", "학술적글쓰기", "한국어말소리와언어예절", "한국어매체읽기", "한국어문서작성"],
    "창의" : ["사고와표현", "창의와사유의기초", "창의적발상", "창의적사고", "창의적융합디자인"],
    "미래(sw)" : ["공학컴퓨터프로그래밍", "프로그래밍기초와실습", "컴퓨팅사고와SW코딩", "문제해결과알고리즘", "AI기초와활용"],
    "글로벌" : ["고급영어쓰기", "과학영어", "글로벌시대의문화이해", "글로벌영어", "글로벌화와21세기중국", "뉴스와미디어의이해", "동아시아역사와문화", "문예영어", "미국사회와법", "법률영어", "비즈니스영어", "스페인어문화권의사회와문화", "스포츠영어", "앙트레프레너십영어",
    "영어토론", "영어발표", "유럽사회와문화", "이슬람세계의사상과문화", "인도문명권의사상과문화", "커리어영어", "한국문화와언어", "현대사회의인권과평등", "현대세계와글로벌시각", "현대중국사회의이해", "영어쓰기"],
    "인간/문화" : ["MBSR명상", "게임과인문학 ", "고전속의자유", "고전속의행복", "그리스로마신화의이해", "기후변화와인문학", "노벨문학상과인문융합", "논어와인생", "다큐멘터리영화비평", "대중예술의이해", "대중음악의이해", "독일문화의이해", "동서양의세계유산", "동서양인문전통속의감정과윤리",
    "동서양지식문화의이해", "동아시아문학의이해", "동아시아의상호소통과한자문명", "동아시아의전통사상", "동양의예술과삶", "동양의지혜", "디지털시대의융합예술", "러시아문화의이해", "명상과치유", "문예창작의이해", "문화사와철학사상", "문화인류학",
    "뮤지컬과오페라", "북유럽신화의이해", "비교종교학의이해", "사랑과문학", "사랑의심리", "생명의료윤리", "성의심리학", "세계의정원과문화", "시문학과예술가곡", "아동의심리와교육", "여성의역사와문학,예술", "연극과문화", "영미문화의이해",
    "예술과4차산업혁명", "예술로보는동아시아", "예술사", "예술사와철학사상", "예술의말과생각", "유럽고도의역사와문화", "음악의이해", "인문학고전읽기", "일본문화의이해", "종교와유럽문화", "죽음과문화", "중국문화의이해", "지식정보학",
    "프랑스문화의이해", "프로이트와현대문화", "한국고전문학", "한국과중국", "한국문화의이해", "한국사상과문화의이해", "한국사회와미디어", "한국의문화유산과공간", "한국현대문학", "한시의이해", "한자와한문의세계"],
    "사회/역사" : ["4차산업혁명과법의이해", "AI와경영의사결정", "ESG경영", "가족과생활환경", "경제학의고전과현대적이슈", "고전속의미디어와언론의자유", "고전속의정의", "공학경제", "국제인권", "근대성과현대문화", "글로벌무역의이해", "기술시대의회계", "기업가정신", "기업과증권시장의이해", "나와역사",
    "다문화사회의이해", "대격변의시대", "대중매체의이해", "동양의역사와문명", "미디어와윤리", "미래사회와창의혁신인재", "민주사회와행정", "북한경제의이해", "사회과학고전읽기", "서양의역사와문명", "성격과적응", "세계사속의중국", "소비와윤리", "여성과사회", "유교자본주의의이해",
    "인간과토지의문명사", "인구와가족의역사", "일상생활의역사", "전쟁과문화", "정치경제학의이해", "직업생활과법", "통일문제의이해", "한국경제의이해", "한국사개설", "한국사회풍속사", "한국생활의안내및진로지도1", "한국역사의이해", "한국전통사회의정치문화", "현대가족의이해",
    "현대동아시아정치경제변동", "현대민주주의의이해", "현대사회와법", "현대사회와법의정신", "현대사회와복지", "현대사회와직업", "현대사회와헌법의이해", "현대사회유학의이해", "현대사회의문제", "현대중국사회와문화", "현대한국정치의쟁점"],
    "자연/과학/기술" : ["4차산업혁명과과학문화", "테크놀러지의철학적이해", "특허와창업", "산업혁명과사회문화", "우주론", "문명과자연환경", "과학기술과사회윤리", "과학기술산업화의역사", "약과건강", "생활속의양자", "생태계와환경", "생활속의화학", "암의과학",
    "인간-컴퓨터상호작용의이해", "과학기술과창업경영", "현대천문학개론", "스포츠마케팅과미디어", "과학사", "화학과생명현상", "생명진화의철학", "환경과건강", "기후와문화", "자연과학고전읽기", "융복합시대의창업", "생활속의에너지", "운동과건강", "유전자재조합의이해",
    "인공지능을위한기초수학", "생명의기원과본질", "지속가능에너지화학", "생명공학의이해", "생명과음식의과학", "생명의과학", "법의학으로보는사회의이해", "핵과학과핵에너지", "코스모스와인간", "인간과자연환경", "실학과수원화성의과학성이해"],
    "기초자연과학" : ["고급미분적분학1", "고급미분적분학2", "고급생명과학1", "고급생명과학2", "공학수학1", "공학수학2", "미분적분학1", "미분적분학2", "빅데이터와통계학", "생명과학1", "생명과학2", "선형대수학", "이산수학", "일반물리학1", "일반물리학2", "일반화학1", "일반화학2",
    "확률및통계", "미분적분학실습1", "미분적분학실습2", "생명과학실험1", "생명과학실험2", "일반물리학실험1", "일반물리학실험2", "일반화학실험1", "일반화학실험2"]},

    
    "21" : {"인성" : ["성균논어", "실천리더십", "앙트레프레너십과리더십"],
    "고전" : ["고전명저북클럽"],
    "의사소통" : ["과학기술글쓰기", "담화와언어", "미디어글쓰기", "발표와매체언어", "발표와토의", "스피치와토론", "시민법정토론", "의사소통1", "의사소통2", "의사소통3", "의사소통4", "창의적글쓰기", "학술적글쓰기", "한국어말소리와언어예절", "한국어매체읽기", "한국어문서작성"],
    "창의" : ["사고와표현", "창의와사유의기초", "창의적사고", "창의적융합디자인"],
    "DS" : ["공학컴퓨터프로그래밍", "프로그래밍기초와실습", "AI기초와활용", "데이터분석기초"],
    "글로벌" : ["고급영어쓰기", "과학영어", "글로벌시대의문화이해", "글로벌영어", "글로벌화와21세기중국", "뉴스와미디어의이해", "동아시아역사와문화", "문예영어", "미국사회와법", "법률영어", "비즈니스영어", "스페인어문화권의사회와문화", "스포츠영어", "앙트레프레너십영어",
    "영어토론", "영어발표", "유럽사회와문화", "이슬람세계의사상과문화", "인도문명권의사상과문화", "커리어영어", "한국문화와언어", "현대사회의인권과평등", "현대세계와글로벌시각", "현대중국사회의이해", "영어쓰기"],
    "인문/사회/과학" : ["MBSR명상", "게임과인문학 ", "고전속의자유", "고전속의행복", "그리스로마신화의이해", "기후변화와인문학", "노벨문학상과인문융합", "논어와인생", "다큐멘터리영화비평", "대중예술의이해", "대중음악의이해", "독일문화의이해", "동서양의세계유산", "동서양인문전통속의감정과윤리",
    "동서양지식문화의이해", "동아시아문학의이해", "동아시아의상호소통과한자문명", "동아시아의전통사상", "동양의예술과삶", "동양의지혜", "디지털시대의융합예술", "러시아문화의이해", "명상과치유", "문예창작의이해",
    "문화사와철학사상", "문화인류학", "뮤지컬과오페라", "북유럽신화의이해", "비교종교학의이해", "사랑과문학", "사랑의심리", "생명의료윤리", "성의심리학", "세계의정원과문화", "시문학과예술가곡", "아동의심리와교육", "여성의역사와문학,예술",
    "연극과문화", "영미문화의이해", "예술과4차산업혁명", "예술로보는동아시아", "예술사", "예술사와철학사상", "예술의말과생각", "유럽고도의역사와문화", "음악의이해", "인문학고전읽기", "일본문화의이해", "종교와유럽문화", "죽음과문화", "중국문화의이해", "지식정보학", "프랑스문화의이해",
    "프로이트와현대문화", "한국고전문학", "한국과중국", "한국문화의이해", "한국사상과문화의이해", "한국사회와미디어", "한국의문화유산과공간", "한국현대문학", "한시의이해", "한자와한문의세계", "4차산업혁명과법의이해", "AI와경영의사결정", "ESG경영", "경제학의고전과현대적이슈",
    "고전속의미디어와언론의자유", "고전속의정의", "공학경제", "근대성과현대문화", "글로벌무역의이해", "기술시대의회계", "기업가정신", "기업과증권시장의이해", "나와역사", "다문화사회의이해", "대격변의시대", "대중매체의이해", "동양의역사와문명", "미디어와윤리",
    "미래사회와창의혁신인재", "민주사회와행정", "북한경제의이해", "사회과학고전읽기", "서양의역사와문명", "성격과적응", "세계사속의중국", "소비와윤리", "여성과사회", "유교자본주의의이해", "인간과토지의문명사", "인구와가족의역사",
    "일상생활의역사", "전쟁과문화", "정치경제학의이해", "직업생활과법", "통일문제의이해", "한국경제의이해", "한국사개설", "한국사회풍속사", "한국역사의이해", "한국전통사회의정치문화", "현대가족의이해", "현대동아시아정치경제변동", "현대민주주의의이해", "현대사회와법",
    "현대사회와법의정신", "현대사회와복지", "현대사회와헌법의이해", "현대사회유학의이해", "현대사회의문제", "현대중국사회와문화", "현대한국정치의쟁점", "4차산업혁명과과학문화", "테크놀러지의철학적이해", "특허와창업", "산업혁명과사회문화", "우주론", "문명과자연환경",
    "과학기술과사회윤리", "과학기술산업화의역사", "약과건강", "생활속의양자", "생태계와환경", "생활속의화학", "암의과학", "인간-컴퓨터상호작용의이해", "과학기술과창업경영", "현대천문학개론", "스포츠마케팅과미디어", "과학사", "화학과생명현상", "생명진화의철학", "환경과건강",
    "기후와문화", "자연과학고전읽기", "융복합시대의창업", "생활속의에너지", "운동과건강", "유전자재조합의이해", "인공지능을위한기초수학", "생명의기원과본질", "지속가능에너지화학", "생명공학의이해","생명과음식의과학", "생명의과학", "법의학으로보는사회의이해", "핵과학과핵에너지"],
    "기초인문사회/자연과학" : ["경제학입문", "기초독어1", "기초독어2", "기초러시아어1", "기초러시아어2", "기초일본어1", "기초일본어2", "기초중국어1", "기초중국어2", "기초프랑스어1", "기초프랑스어2", "기초한문", "동양사상입문", "라틴어", "문학입문", "사회과학입문", "사회학입문", "심리학입문",
    "언어학입문", "역사학입문", "예술학입문", "정치학입문", "철학입문", "희랍어", "고급미분적분학1", "고급미분적분학2", "고급생명과학1", "고급생명과학2", "공학수학1", "공학수학2", "미분적분학1", "미분적분학2", "빅데이터와통계학", "생명과학1", "생명과학2", "선형대수학", "이산수학",
    "일반물리학1", "일반물리학2", "일반화학1", "일반화학2", "확률및통계", "미분적분학실습1", "미분적분학실습2", "생명과학실험1", "생명과학실험2", "일반물리학실험1", "일반물리학실험2", "일반화학실험1", "일반화학실험2"]}
}

let odd_rows = JSON.parse(window.localStorage.getItem('subject_list'));
console.log(odd_rows[2]);

// console.log( JSON.parse(window.localStorage.getItem("student_ID")) )
let student_ID = JSON.parse(window.localStorage.getItem("student_ID"))[0]
console.log(student_ID)

let data = []

let major_classes = []
let GE_classes = []

let total_classes_names = []

for (row of odd_rows) {
    let lecture = {'name':row[3],'classification':row[4], 'credit':parseInt(row[5]), 'grade':row[7]};
    // console.log(row)
    total_classes_names.push(row[4])

    if (row[6] === 'P') {
        lecture['grade'] = 4.5; // needs to be fixed, don't count this into GPA
    }
    if (row[6] === 'F') {
        lecture['grade'] = 0.0;
    }
    if (lecture['classification'] === '전공') {
        major_classes.push(lecture);
    }
    if (lecture['classification'] === '교양') {
        GE_classes.push(lecture);
    }
}

console.log(GE_classes)
let GE_classes_names = []
for (obj of GE_classes) {
    GE_classes_names.push(obj["name"])
}
console.log(GE_classes_names)

let major_classes_names = []
for (obj of major_classes) {
    major_classes_names.push(obj["name"])
}
console.log(major_classes_names)

let total_credits_major = 0;
let total_credits_GE = 0;

// 2016 : 115
// 2017 ~ 2019 : 114
// 2020 : 118
// 21 ~ 22 : 116
let total_credits = {
    "2016" : 115,
    "2017" : 114,
    "2018" : 114,
    "2019" : 114,
    "2020" : 118,
    "2021" : 116,
    "2022" : 116,
};


let GPA_major = 0.0;
let GPA_GE = 0.0;
let GPA_total = 0.0;

for (course of major_classes) {
    total_credits_major += course['credit'];
    GPA_major += course['credit'] * course['grade'];
}

for (course of GE_classes) {
    total_credits_GE += course['credit'];
    GPA_GE += course['credit'] * course['grade'];
}



GPA_total = (GPA_major + GPA_GE) / (total_credits_major + total_credits_GE);
GPA_major /= total_credits_major;
GPA_GE /= total_credits_GE

let experiment_credit = 0.0 // 실험실습.
let major_core_credit = 0.0 // 전공코어 (or 전공핵심).
let major_credit = 0.0 // 전공일반 (or 전공심화).

let admission_year = student_ID.slice(0,4)
admission_year = parseInt(admission_year)
console.log(admission_year)
// console.log(typeof admission_year)
// console.log(admission_year)

// console.log(software_check["전공일반"])
// console.log(major_classes)

// console.log(major_classes[1]["name"])

// console.log(software_check["전공일반"].includes(major_classes[1]["name"]))

if (admission_year >= 2021) {
    experiment_credit = 6
    major_core_credit = 36
    major_credit = 21
    for (lecture of major_classes) {
        if (software_check["전공코어"].includes(lecture['name'])) {
            major_core_credit -= lecture['credit']
        }
        if (software_check["전공일반"].includes(lecture['name'])) {
            major_credit -= lecture['credit']
        }
        if (software_check["실험/실습"].includes(lecture['name'])) {
            experiment_credit -= lecture['credit']
        }
    }
}



if (admission_year < 2021) {
    experiment_credit = 14
    major_core_credit = 27
    major_credit = 24
    for (lecture of major_classes) {
        if (software_check["전공핵심"].includes(lecture['name'])) {
            console.log(lecture['name'])
            major_core_credit -= lecture['credit']
        }
        if (software_check["구_전공일반"].includes(lecture['name'])) {
            console.log(lecture['name'])
            major_credit -= lecture['credit']
        }
        if (software_check["구_실험/실습"].includes(lecture['name'])) {
            console.log(lecture['name'])
            experiment_credit -= lecture['credit']
        }
    }
}

// console.log(major_core_credit, major_credit, experiment_credit)
let remaining_major_credit_list = {"전공코어":major_core_credit, "전공일반":major_credit, "실험/실습":experiment_credit}
console.log(remaining_major_credit_list)


let curriculum = null;
let student_ID_list = [];
let GE_16_list = [2,2,4,2,4,4,2,3,3,3,21]
let GE_17_19_list = [2,2,4,2,4,2,3,3,3,24]
let GE_20_list = [2,3,4,3,8,6,3,3,3,18]
let GE_21_22_list = [22,3,4,3,11,6,6,18]
let GE_list;

if (admission_year <= 2016) {
    curriculum = GE_check["16"]
    GE_list = GE_16_list;

}
if (admission_year > 2016 && admission_year <= 2019) {
    curriculum = GE_check["17"]
    GE_list = GE_17_19_list;
}
if (admission_year === 2020) {
    curriculum =GE_check["20"]
    GE_list = GE_20_list;
}
if (admission_year > 2020) {
    curriculum = GE_check["21"]
    GE_list = GE_20_21_list;
}

// console.log(GE_classes)
student_ID_list = check_remaining_credits(GE_classes, curriculum);
// console.log(student_ID_list, GE_list)
which_division_remains(student_ID_list, GE_list);

// console.log(student_ID_list)

// console.log(GPA_major)
// console.log(GPA_GE)
// console.log(GPA_total)

// console.log(total_credits_major)
// console.log(total_credits_GE)

// console.log(student_ID_list)
keys = Object.keys(curriculum)
// console.log(keys)

for (let j=0; j<student_ID_list.length; j++) {
    if (student_ID_list[j] < 0) {
        // console.log(keys[j].slice(2, ) ,":", (-1) * student_ID_list[j])
        console.log(keys[j] ,":", (-1) * student_ID_list[j])
    }
}

let major_values = Object.values(remaining_major_credit_list)
let major_keys = Object.keys(remaining_major_credit_list)


let print_txt = "";
for (let j=0; j<major_keys.length; j++) {
    if (major_values[j] > 0) {
        console.log(major_keys[j]+ ":", major_values[j])
        print_txt+= major_keys[j]+ ":"+ major_values[j] + "<br>";
    }
}

if (admission_year < 2021) {
    major_keys = ["전공핵심", "구_전공일반", "구_실험/실습"]
}

// 수강한 전공, 교양 각 학점과 내 학번이 수강해야 하는 총 학점.
console.log("전공 이수 총 학점:", total_credits_major)
print_txt += "전공 이수 총 학점:" + total_credits_major + "<br>";
console.log("교양 이수 총 학점:", total_credits_GE)
print_txt += "교양 이수 총 학점:" + total_credits_GE + "<br>";
console.log("총 요구학점:", total_credits[admission_year + ""])
print_txt += "총 요구학점:" + total_credits[admission_year + ""] + "<br>";
console.log("이만큼 더 들으세요:", total_credits[admission_year + ""] - total_credits_major - total_credits_GE)
print_txt += "잔여학점 :" + (total_credits[admission_year + ""] - total_credits_major - total_credits_GE) + "<br>"; 


for (key of major_keys) {
    for (maj of major_classes_names) {
        software_check[key] =  software_check[key].filter((ele) => ele !== maj) 
    }
    console.log(software_check[key])
}

let GE_key = ""
if (admission_year < 2017) {
    GE_key = "16"
}
// if (admission_year >= 2017 && admission_year < )


student_ID_list = student_ID_list.map(n=>n*(-1))
let result_table = zip(keys,student_ID_list)


$("#container").prepend("필수 교양/ 전공 과목중, 어떤 과목을 들어야 할지 모르겠다면, 하단에 있는 과목들 중에서 골라보는 것은 어떨까요?<br>과목 구분에 따라서 추천 과목 및 강의평을 확인하실 수 있습니다.");
$("#container").prepend(print_txt +"<br>");

$("#container").append('<div class="accordion" id="leftSubject" style="width:100%">');
let idx = 0;
let check_ID = admission_year%2000;
if(check_ID<16)
    check_ID = 16;
else if(check_ID>16 && check_ID<20 )
    check_ID = 17;
else if(check_ID > 21)
    check_ID = 21;
else
    check_ID = admission_year%2000;
for(let i in result_table){
    if(result_table[i][1] != 0){
        $("#leftSubject").append('<div class="accordion-item" id=item'+idx+'></div>');
        $("#item"+idx).append('<h2 class="accordion-header" id="heading'+idx+'"></h2>');
        $("#heading"+idx).append('<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target=#collapse'+idx+' aria-expanded="true" aria-controls="collapse'+idx+'">'+result_table[i][0]+'</button>');
        $("#item"+idx).append('<div id="collapse'+idx+'" class="accordion-collapse collapse show" aria-labelledby="heading'+idx+'" data-bs-parent="#leftSubject">'+'<div class="accordion-body" id="body'+idx+'"></div></div>');
        let recommend_list = GE_check[check_ID][result_table[i][0]];
        for(let i in recommend_list){
            let url = 'https://everytime.kr/lecture/search?keyword='+recommend_list[i]+'&condition=name';
            let btn = '<button type="button" class="btn btn-primary btn-sm">강평 보기</button><br>';
            btn = "<a href='"+url+"' target = '_blank'>" + btn + "</a>";

            $("#body"+idx).append("<div class='m-3 text-center'>"+recommend_list[i]+" " + btn+"</div></div>");
        }
        idx++;
    }
}

$("#container").append('<br><div class="accordion" id="leftMajor" style="width:100%">');
major_keys = major_keys.map(n=>n[0]=="구"?n.slice(2,):n)
 let major_table = zip(major_keys,major_values);
let major_idx = 50;
for(let i in major_table){
    if(major_table[i][1] != 0){
        $("#leftMajor").append('<div class="accordion-item" id=Majoritem'+major_idx+'></div>');
        $("#Majoritem"+major_idx).append('<h2 class="accordion-header" id="Majorheading'+major_idx+'"></h2>');
        $("#Majorheading"+major_idx).append('<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target=#collapse'+major_idx+' aria-expanded="true" aria-controls="collapse'+major_idx+'">'+major_table[i][0]+'</button>');
        $("#Majoritem"+major_idx).append('<div id="collapse'+major_idx+'" class="accordion-collapse collapse show" aria-labelledby="Majorheading'+major_idx+'" data-bs-parent="#leftSubject">'+'<div class="accordion-body" id="body'+major_idx+'"></div></div>');
        let major_recommend_list = software_check[major_table[i][0]];
        for(let i in major_recommend_list){
            let url = 'https://everytime.kr/lecture/search?keyword='+major_recommend_list[i]+'&condition=name';
            let btn = '<button type="button" class="btn btn-primary btn-sm">강평 보기</button><br>';
            btn = "<a href='"+url+"' target = '_blank'>" + btn + "</a>";

            $("#body"+major_idx).append("<div class='m-3 text-center'>"+major_recommend_list[i]+" " + btn+"</div></div>");
        }
        major_idx++;
    }
}

// 여기는 파이썬으로 file에 write하는 방식.

// result_path = "./sample_data/" +  student_ID + "_result.txt"
// f = open(result_path, "w")
// f.write("student ID: %d\n\n" % int(student_ID))
// f.write("GPA_total: %f\n" % GPA_total)
// f.write("GPA_major: %f\n" % GPA_major)
// f.write("GPA_GE: %f\n" % GPA_GE)
// f.write("\n")
// f.write("credits_total: %d\n" % (total_credits_major + total_credits_GE))
// f.write("credits_major: %d\n" % total_credits_major)
// f.write("credits_GE: %d\n" % total_credits_GE)
// f.write("\n")
// f.write("remaining_major_core_credit: %d\n" % major_core_credit)
// f.write("remaining_major_credit: %d\n" % major_credit)
// f.write("remaining_experiment_credit: %d\n" % experiment_credit)
// f.write("\nGE left:\n")
// for i in range(len(student_ID_list)):
//     # f.write("%d " % student_ID_list[i])
//     if student_ID_list[i] < 0:
//         curriculum_name = list(curriculum[i].keys())[0]
//         f.write("%s: " %  curriculum_name)
//         curriculum_courses = curriculum[i][curriculum_name]
//         for item in curriculum_courses:
//             if item not in total_classes_names:
//                 f.write("%s " % item)
//         f.write("\n")

// f.close()
