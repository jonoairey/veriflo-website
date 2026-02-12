import { redirect } from 'next/navigation';

export default function SealRedirect() {
  redirect('/products/check');
}
