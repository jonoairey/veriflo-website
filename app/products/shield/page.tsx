import { redirect } from 'next/navigation';

export default function ShieldRedirect() {
  redirect('/products/protect');
}
