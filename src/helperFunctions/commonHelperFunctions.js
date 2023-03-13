import i18next from '../../i18n';

export const getArray = (type) => {
  switch (type) {
    case 'creativity':
      return ['High', 'Medium', 'Low'];

    case 'outputs':
      return [1, 2, 3, 4, 5, 6];

    default:
      return [1, 2, 3];
  }
};
export const mainCardsHeading = () => {
  return [
    'socialMedia',
    'contentCreation',
    'contentCorrection',
    'startUp',
    'mathSolver',
    'university',
    'langTranslation',
  ];
};

export const mainCardsButton = () => {
  return {
    socialMedia: ['Post Creation', 'Hashtag Suggestion', 'Idea Suggestion'],
    contentCreation: [
      'Blog Writing',
      'Article Writing',
      'Product Description',
      'Landing Page Content',
      'Ad Copy',
      'Email Copy',
    ],
    contentCorrection: [
      'Spelling and Grammar Correction',
      'Punctuation Correction',
      'Tone Correction',
      'Sentence Structure Correction',
    ],
    startUp: [
      'Business Plan Creation',
      'Market Research',
      'Competitor Analysis',
    ],
    mathSolver: [
      'Algebraic Equations',
      'Calculus Problems',
      'Geometry Problems',
    ],
    university: [
      'Resume Writing',
      'Interview Preparation',
      'Cover Letter Writing',
      'Personal Statement Writing',
      'Scholarship Essay Writing',
      'College Admissions Essay Writing',
    ],
    langTranslation: [
      'Document Translation',
      'Website Translation',
      'Subtitling',
    ],
  };
};

export const showInputs = () => {
  return {
    socialMedia: [
      'targetAudience',
      'typeOfPost',
      'toneOfPost',
      'typeOfMedia'
    ],
    contentCreation: [
      'targetAudience',
      'toneOfPost',
      'targetWordCount',
      'keywords',
    ],
    contentCorrection: [],
    startUp: [],
    mathSolver: [],
    university: ['targetInstitute'],
    langTranslation: ['sourceLang', 'targetLang'],
  };

  // return true;
  // return false;
};
export const translateInputText = () => {
  return {
    targetAudience: '',
    typeOfPost: '',
    toneOfPost: '',
    specificMessage: '',
    toneOfPost: '',
    targetWordCount: '',
    keywords: '',
    contentCreated: '',
    buisnessInfo: '',
    problemToSolve: '',
    personalInfo: '',
    targetInstitute: '',
    sourceLang: '',
    targetLang: '',
    contentToTranslate: '',
  };
};

export const returnCorrectDescription = (type) =>{
  if(type == "contentCorrection"){
    return ["Content to be corrected",""]
  }

  if(type == "startUp"){
    return ["Type of Assistance","e.g., business name, product description, target audience"]

  }

  if(type == "mathSolver"){
    return ["Type of Problem","e.g.,algebraic equations, calculus problems, geometry problems"]

  }

  if(type == "university"){
    return ["Personal Information","e.g., name, education, work experience"]

  }

  if(type == "langTranslation"){
    return ["Content to be Translated",""]

  }
  if(type == "socialMedia"){
    return ["Any Message to be included",""]

  }
  

  return ["Description",""]

}

export const convertPrompt = (inputs,type,typeOfCard,description) =>{
  console.log("inputs,type==>",inputs,type,description)
  let prompt = type+'Prompt';
  let data = {}
  let promptData = ""
  if(type == 'contentCreation'){
    inputs["typeOfcontent"] =  i18next.t(type)
  }
  if(type == 'contentCorrection'){
    inputs["contentToCorrect"] = description
    inputs["typeOfCorrection"] = typeOfCard

  }

  if(type == "startUp"){
    inputs["typeOfAssistance"] = typeOfCard 
    inputs["businessInfo"] = description

  }

  if(type == "mathSolver"){
    inputs["typeOfProblem"] = typeOfCard 
    inputs["problemToSolve"] = description

  }

  if(type == "university"){
    inputs["typeOfWriting"] = typeOfCard 
    inputs["personalInformation"] = description

  }

  if(type == "langTranslation"){
    inputs["typeofTranslation"] = typeOfCard 
    inputs["contentToTranslate"] = description

  }

  if(type == "socialMedia"){
    inputs["typeOfPost"] = typeOfCard 
    inputs["specificMessage"] = description 

    

  }



  for (const [key, value] of Object.entries(inputs)) {
    if(value !== ''){
      data[key] = value
    }
  }

  if(type == 'contentCreation'){
     promptData = i18next.t(prompt, data) +". Should be on the lines of this description: " + description;

  }

  if(type == 'contentCorrection'){
    promptData = i18next.t(prompt, data) ;

  }

  if(type == "startUp"){
    promptData = i18next.t(prompt, data)

  }

  if(type == "mathSolver"){
    promptData = i18next.t(prompt, data)


  }

  if(type == "university"){
    promptData = i18next.t(prompt, data) ;

  }

  if(type == "langTranslation"){
    promptData = i18next.t(prompt, data) ;
  
  }

  if(type == "socialMedia"){
    promptData = i18next.t(prompt, data) ;


  }

console.log("promptData===>",promptData)
return promptData;
}
