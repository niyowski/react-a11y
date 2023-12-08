import { Button, Field, Heading, Input } from '@demo/ui';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  subscribeToNewsletter,
  type SubscribeToNewsletterResponse,
} from './api/subscription';

type NewsletterSubscriptionInput = {
  email: string;
};

export const NewsletterSubscription: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SubscribeToNewsletterResponse>();

  const { register, handleSubmit } = useForm<NewsletterSubscriptionInput>();
  const onSubmit: SubmitHandler<NewsletterSubscriptionInput> = async (
    input,
  ) => {
    setLoading(true);

    try {
      await subscribeToNewsletter(input.email);
      setResult(true);
    } catch (error) {
      setResult(error as Error);
    }

    setLoading(false);
  };

  const renderContent = () => {
    if (result instanceof Error) {
      return <span>{result.message}</span>;
    }

    if (result) {
      return <span>Thank you for subscribing to our newsletter.</span>;
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <Field label="Email" required>
            <Input type="email" {...register('email')} />
          </Field>
          <Button
            type="submit"
            intent="secondary"
            radius="special"
            className="mt-2 self-end"
            disabled={loading}
          >
            Subscribe
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <Heading as="h2" className="m-0">
        Subscribe to our newsletter
      </Heading>
      {renderContent()}
    </div>
  );
};
