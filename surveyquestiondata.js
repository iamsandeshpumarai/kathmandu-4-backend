const dataSurvey = [
  {
    Topic: "निर्वाचन र उम्मेदवार सर्वेक्षण",
    Subject: "उम्मेदवार र पार्टी छनौटको आधार",
    questions: [
      {
        Question: "अहिलेको राजनीतिक माहोलमा कुन पार्टीको सम्भावना छ भन्ने लाग्छ?",
        options: [
          { type: "checkbox", option: "काग्रेस" },
          { type: "checkbox", option: "नेपाली क. पा." },
          { type: "checkbox", option: "नेकपा एमाले" },
          { type: "checkbox", option: "रास्वपा" }
        ],
        answer: ""
      },
      {
        Question: "यो क्षेत्रमा कस्तो उम्मेदवारले जित्दा तपाईँहरुको अवस्थामा सुधार हुन्छ भन्ने लाग्छ र किन?",
        options: [
          
          { type: "checkbox", option: "स्थानीय तथा जिल्लावासी" },
          { type: "checkbox", option: "शिक्षित र समाज सेवी र सहयोगी भावना भएको" },
          { type: "checkbox", option: "राजनैतिक अनुभवी" },
          { type: "checkbox", option: "केन्द्रीय स्तरको नेता" },
          { type: "checkbox", option: "नैतिक चरित्रवान" },
          { type: "checkbox", option: "गरिव जनताको पक्षमा काम गर्ने" }
        ],
        answer: ""
      },
      {
        Question: "यो क्षेत्रको विकासको सन्दर्भमा कुन उम्मेदवार उपयुक्त हो भन्ने लाग्छ?",
        options: [
          { type: "text", option: "उम्मेदवारको नाम १" },
          { type: "text", option: "उम्मेदवारको नाम २" },
          { type: "text", option: "उम्मेदवारको नाम ३" },
          { type: "text", option: "उम्मेदवारको नाम ४" }
        ],
        answer: ""
      },
      {
        Question: "निर्वाचित हुने उम्मेदवारले यस क्षेत्रमा कस्ता कस्ता सुधारका कामहरु गर्नुपर्छ?",
        options: [
          { type: "checkbox", option: "स्थानीय तथा जिल्ला स्तरको सडक र पुलपुलेसो निर्माण र सुधार" },
          { type: "checkbox", option: "खानेपानी र सिँचाइ व्यवस्थापन" },
          { type: "checkbox", option: "स्वास्थ्य र शिक्षाको व्यवस्थापन र सुधार" },
          { type: "checkbox", option: "उद्यम व्यवसाय प्रवर्धन र रोजगारी सिर्जना कार्यक्रम" },
          { type: "checkbox", option: "सामाजिक सहिष्णुता कायम गर्ने" },
          { type: "checkbox", option: "गरिव समुदायको आर्थिक तथा सामाजिक अवस्थामा सुधार गर्ने" }
        ],
        answer: ""
      },
      {
        Question: "तपाइँलाई समुदायका सबै सम्प्रदायलाई समेट्न सक्ने उम्मेदवार को हो जस्तो लाग्छ?",
        options: [
          { type: "text", option: "उम्मेदवारको नाम" }
        ],
        answer: ""
      },
      {
        Question: "केन्द्रमा आफ्नो बर्चस्व राख्न र क्षेत्रमा विकासका कार्यक्रम ल्याउन सक्ने उम्मेदवार को हो जस्तो लाग्छ?",
        options: [
          { type: "text", option: "उम्मेदवारको नाम" }
        ],
        answer: ""
      },
      {
        Question: "तपाइँ प्रत्यक्ष र समानुपातिकमा एउटै पार्टीका उम्मेदवारलाई भोट दिनुहुन्छ की फरक फरक पार्टीका उम्मेदवारलाई दिनुहुन्छ?",
        options: [
          { type: "checkbox", option: "एउटै पार्टी" },
          { type: "checkbox", option: "फरक पार्टी" }
        ],
        answer: ""
      },
      {
        Question: "प्रत्यक्ष र समानुपातिकका उम्मेदवारलाई के आधारमा छनौट गर्नुहुन्छ?",
        options: [
          { type: "checkbox", option: "व्यक्तित्व" },
          { type: "checkbox", option: "पार्टी" },
          { type: "checkbox", option: "विगतको काम" },
          { type: "checkbox", option: "घोषणापत्र" }
        ],
        answer: ""
      },
      {
        Question: "तपाईँले रोज्नु भएको उम्मेदवारको कमजोर पक्षहरु के के छन्?",
        options: [
          { type: "checkbox", option: "न्युन शिक्षा र अनुभव" },
          { type: "checkbox", option: "पार्टी प्रति निष्ठावान नहुनु" },
          { type: "checkbox", option: "नेतृत्व क्षमता नभएको" },
          { type: "checkbox", option: "विलाशीता जिवन शैली" },
          { type: "checkbox", option: "नातावाद कृपावादलाई प्राथमिकता दिने" },
          { type: "checkbox", option: "नैतिक तथा सामाजिकपन नभएको" },
          { type: "checkbox", option: "आलोचना स्वीकार गर्न नसक्ने र सल्लाह सुझाव नलिने" },
          { type: "checkbox", option: "केन्द्रीय स्तरमा राम्रो पहुँच नभएको" }
        ],
        answer: ""
      },
      {
        Question: "तपाइँलाई यसपालीको चुनावी माहोलमा कुन पार्टीको एजेण्डाहरु उपयुक्त लाग्छ?",
        options: [
          { type: "checkbox", option: "काग्रेस" },
          { type: "checkbox", option: "नेपाली क. पा." },
          { type: "checkbox", option: "नेकपा एमाले" },
          { type: "checkbox", option: "रास्वपा" }
        ],
        answer: ""
      }
    ]
  }
];

module.exports= dataSurvey;