const SUBSCRIPTION_KEY = 'newsletter-subscription';
const SUBSCRIPTION_TIMEOUT = 1000;

const hasAlreadySubscribed = (email: string) => {
  return localStorage.getItem(SUBSCRIPTION_KEY) === email;
};

type SubscribeToNewsletterSuccessResponse = true;
type SubscribeToNewsletterErrorResponse = Error;
export type SubscribeToNewsletterResponse =
  | SubscribeToNewsletterSuccessResponse
  | SubscribeToNewsletterErrorResponse;

export const subscribeToNewsletter = async (email: string) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (hasAlreadySubscribed(email)) {
        return reject(
          new Error('You are already subscribed to the newsletter.'),
        );
      }

      localStorage.setItem(SUBSCRIPTION_KEY, email);
      return resolve();
    }, SUBSCRIPTION_TIMEOUT);
  });
};
