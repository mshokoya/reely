import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../root'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type LoginData = z.infer<typeof LoginSchema>;

function Component() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log('Registration Data:', data);
    // Handle form submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: Component,
})

