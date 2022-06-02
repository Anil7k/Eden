export const stepperData = {
  stepper0: {
    title: 'Welcome! First thing first..',
    subTitle: 'You can always change them later.',
    buttonText: 'Create workspace',
    selectorDetails: [{
      label: 'Full Name',
      placeholder: 'Steve jobs',
      value: 'fullName',
    },
    {
      label: 'Display Name',
      placeholder: 'Display Name',
      value: 'displayName',

    }],
  },
  stepper1: {
    title: 'Let\'s set up a home for all your work',
    subTitle: 'You can always create another workspace later.',
    buttonText: 'Create workspace',
    selectorDetails: [{
      label: 'Workspace Name',
      placeholder: 'Eden',
      value: 'workspace',
    },
    {
      label: 'Workspace Url',
      placeholder: 'Example',
      optional: true,
      url: true,
      value: 'url',
    }],
  },
  stepper2: {
    title: 'How are you planning to use Eden?',
    subTitle: 'We\'ll streamLine setup experience accordingly',
    buttonText: 'Create workspace',
    toggleDetails: [{
      text: 'For myself',
      subText: 'Write better. Think more clearly. stay organized.',
      value: 'self',
    },
    {
      text: 'With my team',
      subText: 'Wikis, docs, tasks & projects, all in one place.',
      value: 'team',
    }],
  },
  stepper3: {
    title: 'Congratulations,',
    subTitle: 'You have Completed onboarding, you can start using then',
    buttonText: 'Launch',
  },
};
