import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: '8oraQOiunIh_2MmQi',

  limitRate: {
    id: 'contactMessage',
    throttle: 10000,
  },
});

export const sendEmail = async (contactForm) => {
  emailjs.send('service_g3k7n9q', 'template_cp8d4ao', contactForm).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
};
