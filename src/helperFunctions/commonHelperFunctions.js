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
      'Busdiness Plan Creation',
      'Market Research',
      'Competitor Analysis',
    ],
    mathSolver: [
      'Algebraic Equations',
      'Calculus Problems',
      'Geometry Problems',
    ],
    university: [
      'Resume Wriring',"Interview Preparation",
      'Cover Letter Writing',
      'Personal Statement Writing',
      "Scholarship Essay Writing",
      "College Admissions Essay Writing",
      
    ],
    langTranslation: [
      'Document Translation',
      'Website Translation',
      'Subtitling',
    ],
  };
};
