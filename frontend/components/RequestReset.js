import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request a password reset</h2>
      <Error error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link</p>
        )}

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Request reset</button>
      </fieldset>
    </Form>
  );
}
